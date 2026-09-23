import express from "express"
import { registration, Userlogin } from "../controller/usuercontroller.js"


const router = express.Router()

router.post("/createuser", registration)


router.post("/login", Userlogin)


export default router