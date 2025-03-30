import jwt from "jsonwebtoken";

/* in the below function,we are generating a token and sending it to user in a cookie (http only cookie to make
sure its secure) and it will expire in 7 days , user has to login again after 7 days */

export const generateToken= (userId,res) => {
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d",
    });

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, //milliseconds
        httpOnly:true, //prevents xss atacks,cross-site scripting attacks
        sameSite:"strict", //Csrf attacks,cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development",
    });
    return token;
};