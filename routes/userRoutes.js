import express from "express"
import { deleteUser, GetallUser, getSpecific, registration, updateUser, Userlogin } from "../controller/usuercontroller.js"
import authMiddleware from "../middlewere/authMiddlewere.js"
import allowRoles from "../middlewere/roleMiddlewere.js"


const router = express.Router()

router.post("/createuser", registration)


router.post("/login", Userlogin)


router.get("/getall",authMiddleware,allowRoles("hr","admin"), GetallUser)


router.get("/specificuser/:id",authMiddleware,allowRoles("hr","admin"), getSpecific)


router.delete("/deleteuser/:id",authMiddleware,allowRoles("admin"), deleteUser)


router.put("/updatedata/:id",authMiddleware,allowRoles("admin"), updateUser)


export default router