import mongoose from "mongoose";

const LoginDataSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // Ensure no duplicate usernames (emails)
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
     // Restrict roles to valid types
      required: true,
    },
    image:{
      type:String
    },
    verify:{
      type: Boolean,
      default: false, 
    }
  },
);

const loginData = mongoose.model("loginData", LoginDataSchema);

export default loginData;
