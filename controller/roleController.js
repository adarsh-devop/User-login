import userRole from "../models/role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//=========================================================
//registr
//=========================================================

export const registr = async (req,res) => {
    try {
        const { name, email, password ,role } = req.body;

        if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required......",
      });
    }

    const existingRole = await userRole.findOne({ email });

    if (existingRole) {
      return res.json({
        message: "email already there",
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const Rolecopy = await userRole.create({
      name,
      email,
      password: hashedpassword,
      role,
    });

    res.status(201).json({
      message: "user registered successfully",
      response: {
        id: Rolecopy._id,
        name: Rolecopy.name,
        email: Rolecopy.email,
        role: Rolecopy.role,
      },
    });

    } catch (error) {
        res.json({
            message:"error",
            message:error.message
        })
    }
}

//=====================================================
//login
//=====================================================

export const Userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "email and password both are needed",
      });
    }

    const existRole = await userRole.findOne({ email });

    if (!existRole) {
      return res.json({
        message: "this email is invaled",
      });
    }



    //====================================
    //password
    //====================================

    const passwordCrt = await bcrypt.compare(password, existRole.password);

    if (!passwordCrt) {
      return res.json({
        message: "invaled password or email",
      });
    }

    const token = jwt.sign(
        {
            userId:existRole._id,
            role:existRole.role
        }
    )

    res.json({
      message: "login Successful",
    });


  } catch (error) {
    res.json({
      message: "server error",
      error: error.message,
    });
  }
};