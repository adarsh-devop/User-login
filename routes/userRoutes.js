import express from "express"
import { deleteUser, GetallUser, getSpecific, registration, updateUser, Userlogin } from "../controller/usuercontroller.js"


const router = express.Router()

router.post("/createuser", registration)


router.post("/login", Userlogin)


router.get("/getall", GetallUser)


router.get("/specificuser/:id", getSpecific)


router.get("/deleteuser/:id", deleteUser)


router.put("/updatedata/:id", updateUser)


export default router