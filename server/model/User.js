import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    commonKey: { type: mongoose.Schema.Types.ObjectId, ref: "loginData" },
    username: {
      type: String,
      required: true,
      // Trims whitespace from the start and end of the string
    },
    phonenumber: {
      type: String,
      required: true,
      // Example: validates a 10-digit phone number
    },
    image: { type: String },
  });
  
  const User = mongoose.model("User", UserSchema);
  
  export default User;