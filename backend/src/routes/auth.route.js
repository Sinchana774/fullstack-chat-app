import express from "express";
import{checkAuth,login,logout,signup,updateProfile} from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

//protectRoute is built in middleware folder as "auth.middleware.js"
router.put("/update-profile",protectRoute,updateProfile);
//using protectRoute here because only authenticated users can update their profile
//this "protectRoute" part acts as the middle layer between user's requests and token generation
//it validates and checks if the user has the jwt token
//if it is valid it will grant access to update and change profile details
//if it is NOT valid it will display error message to the user

router.get("/check",protectRoute,checkAuth);

export default router;