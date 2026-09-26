import express from "express";
import { registr, Userlogin } from "../controller/roleController.js";

const router = express.Router()



router.post ("/register", registr)


router.post("/login",Userlogin)



export default router
