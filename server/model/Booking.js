import mongoose from 'mongoose';
    import { v4 as uuidv4 } from 'uuid';  // Import UUID package

    const bookingSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'loginData', required: true },
        salonId: { type: mongoose.Schema.Types.ObjectId, ref: 'SalonData', required: true },
        stylistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true },
        serviceNames: { type: [String], required: true },
        productIds: { type: [mongoose.Schema.Types.ObjectId], ref: 'Product', default: [] },
        date: { type: Date, required: true },
        slot: { type: String, required: true },
        totalAmount: { type: Number, required: true },
        status: { type: String, enum: ['pending', 'confirmed', 'completed','canceled'], default: 'pending' },
        token: { type: String, unique: true, sparse: true },  
    },
    { timestamps: true }
    );

    // Pre-save hook to generate a unique token if not provided
    bookingSchema.pre('save', function (next) {
    if (!this.token) {
        this.token = uuidv4();  // Generate a unique token
    }
    next();
    });

    export default mongoose.model('Booking', bookingSchema);