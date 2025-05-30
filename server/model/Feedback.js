import mongoose from 'mongoose';


const feedbackSchema = new mongoose.Schema({
    salonId: {
      type: mongoose.Schema.Types.ObjectId, // This will store the salon id
      ref: 'SalonData',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // This will store the salon id
        required: true,
        ref: 'User',
      },
      bookingId: {
        type: mongoose.Schema.Types.ObjectId, // This will store the salon id
        required: true,
        ref: 'Booking',
      },
    email: { type: String, required: false },
    rating: { type: Number, required: true },
    comment: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
  });
  
  // Mongoose Model
  const Feedback = mongoose.model('Feedback', feedbackSchema);

  export default Feedback