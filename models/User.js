import mongoose from "mongoose";

const userschema =  new mongoose.Schema(
    {
        username:{
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
        }
    },
    {
        timestamps:true
    }
)

const user = mongoose.model("user",userschema);

export default user;
 
