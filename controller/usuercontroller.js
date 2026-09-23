import user from "../models/User.js";
import bcrypt from "bcryptjs";

export const registration = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required......",
      });
    }

    const existinguser = await user.findOne({ email });

    if (existinguser) {
      return res.status(400).json({
        message: "email already there",
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const copy = await user.create({
      username,
      email,
      password: hashedpassword,
    });

    res.status(201).json({
      message: "user registered successfully",
      response: {
        id: copy._id,
        name: copy.username,
        email: copy.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

//=========================================
//login
//=========================================

export const Userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "email and password both are needed",
      });
    }

    const userexist = await user.findOne({ email });

    if (!userexist) {
      return res.json({
        message: "this email is invaled",
      });
    }

    //====================================
    //password
    //====================================

    const passwordCrt = await bcrypt.compare(password, userexist.password);

    if (!passwordCrt) {
      return res.json({
        message: "invaled password or email",
      });
    }

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


//===============================================
//get all users
//===============================================

export const GetallUser = async (req,res) => {
    try {
        const allUser = await user.find()
        if(!allUser)
            {
                return res.json
                ({
            message:"data is not there"
        })
    }

    res.json({
        message:"emp found",
        allUser
    })



    } catch (error) {
        res.json({
            message:"error",
            errmessage:error.message
        })
    }
}