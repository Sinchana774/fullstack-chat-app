import{generateToken} from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

//save user data,hash password and generate jwt token
//to check whether its working properly use postman app
export const signup =async (req,res) => {
    const{fullName,email,password} =req.body; 
    try {

        if(!fullName || !email || !password)
        {
            return res.status(400).json({message:"All fields are required"});
        }
        
        if(password.length<6)
        {
            return res.status(400).json({ message : "Password must be at least 6 characters"});
        }
        const user=await User.findOne({email});

        if(user) return res.status(400).json({message :"Email already exists"});

        const salt=await bcrypt.genSalt(10);

        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser= new User({
            fullName:fullName, // or just fullName, (since bothside values are same)
            email:email,
            password:hashedPassword
        });

        if(newUser){
            //generate jwt token here
            generateToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic,    
            });
            
        } else{
            res.status(400).json({message:"Invalid user data"});
        }

    } catch(error)
    {
        console.log("Error in signup controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
   
};

//check if user credentials(both email and password) is correct
//if correct , generate token containing info on user's email,password and profile pic
//if incorrect,display invalid credentials
/*also not displaying invalid email or password in specific because there might be malicious hacker trying to
hack into someone else's account (giving specific info makes it easier for them to hack) */ 
export const login= async (req,res) => {
    const{email,password}= req.body;

    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const isPasswordCorrect = await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect)
        {
            return res.status(400).json({message:"Invalid credentials"});
        }
        generateToken(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilePic:user.profilePic,
        });
    } catch(error)
    {
        console.log("Error in login controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};

//user is logging out,so clearout the cookies
//observe in postman,both login and signup functions have cookies but here we have no cookies 
export const logout=(req,res) => {
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out succesfully"});
    } catch(error)
    {
        console.log("Error in logout controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export const updateProfile= async(req,res) => {
    try{
        const {profilePic} =req.body;
        const userId=req.user._id;

        if(!profilePic)
        {
            return res.status(400).json({message:"Profile pic is required"});
        }

        const uploadResponse= await cloudinary.uploader.upload(profilePic);
        const updatedUser= await User.findByIdAndUpdate(userId, { profilePic:uploadResponse.secure_url},{new:true});
        res.status(200).json(updatedUser);
    
    } catch(error)
    {
        console.log("Error in update profile : ",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

export const checkAuth = (req,res) => {
    try{
        res.status(200).json(req.user);
    } catch(error)
    {
        console.log("Error in checkAuth controller ",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};