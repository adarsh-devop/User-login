import express from "express"
import connectedb from "./config/db.js"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"



dotenv.config()

const app = express()

//==================
//MIDDWERE
//==================

app.use(express.json())

connectedb()


//==================
//ROUTES
//==================

app.use("/api/user", userRoutes)


app.get("/",(req,res) => {
    res.send("hello world")
})

app.listen(2000,() => {
    console.log("Server running on port 2000")
    
})

// http://localhost:2000


