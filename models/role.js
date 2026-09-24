import mongoose from "mongoose";

const roleschema =  new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trime:true
        },

        email:{
            type:String,
            required:true,
            unique:true,
            trime:true,
            lowercase:true
        },

        password:{
            type:String,
            required:true,
            minlength:8
        },

        role:{
            type:String,
            enum:["admin","hr"],
            default:"hr"
        }
    },
    {
        timestamps:true
    }
)

const userRole = mongoose.model("userRole",roleschema);

export default userRole;
 
