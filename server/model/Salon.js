// import mongoose, { Schema } from "mongoose";
// const salonSchemma=new Schema({
//     salonName:{type:String,requried: true},
//     place:{type:String,required: true},
//     mobileNumber:{type:String,required: true},
//     emailId:{type:String,required: true},
//     openingHour:{type:String,required: true},
//     closingHour:{type:String,required: true},
//     image:{type:String,required: true},
    
// })
import mongoose from "mongoose";


const serviceOptionSchema = new mongoose.Schema({
  name: { type: String, required: true },  // e.g., "V Cut", "U Cut"
  price: { type: Number, required: true },  // Price for the specific option
  timeRequired: { type: Number, required: true },  // Time required for the specific option
  gender: { type: String, },  // Gender specification
 
}, { timestamps: true });

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Service name, e.g., "Haircut"
  options: [serviceOptionSchema],  // Array of service options like "V Cut", "U Cut"
  offers: {
    discountPercentage: { type: Number, default: 0 }, // 0 means no discount
    startDate: { type: Date },
    endDate: { type: Date },
  },
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  count:{type:Number}
  });

const staffSchema = new mongoose.Schema({
  staffName: { type: String, required: true },
  staffImage: { type: String,}
});

const salonSchema = new mongoose.Schema(
  {
    salonName: { type: String, required: true },
  
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    openingHours: { type: String, required: true },
    closingHours: { type: String, required: true },
    image: { type: String, default: null }, // File path or URL
    commonKey: { type: mongoose.Schema.Types.ObjectId, ref: "loginData" },
    services: {
      type: [serviceSchema],
    },
    products: {
      type: [productSchema],
      default: [], // Initialize with an empty array
    },
    staffs: { type: [staffSchema], default: [] },
  },
  { timestamps: true }
);

 const salonData = mongoose.model("SalonData", salonSchema);
 export default salonData