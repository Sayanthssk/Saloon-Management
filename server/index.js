import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from "mongoose"
import loginData from "./model/login.js"
import path from 'path';
import multer from "multer"
import bcrypt from "bcryptjs"
import salonData from "./model/Salon.js"
import User from "./model/User.js"
import Booking from "./model/Booking.js"
import Feedback from "./model/Feedback.js"
import { log } from "console"

// import salon from "./model/salon.js"

const server = express()


server.use(cors())

server.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 8000


server.listen( PORT , ()=>{
    console.log("Server started at 8000");
    
})
// mongoose.connect('mongodb+srv://soorya:1234@soorya.av1eb.mongodb.net/?retryWrites=true&w=majority&appName=sooryaSalon/Saloon').then(() => {
//     console.log("Mongo connected");
// }).catch((error) => {
//     console.error('Error while connecting to MongoDB', error.message);
// });
mongoose.connect('mongodb+srv://sayanth:1234@cluster0.gyx3v.mongodb.net/SaloonManagement?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Mongo db connected successfully");

    
}).catch((error)=>{
    console.error('error',error)
})



server.use("/uploads", express.static(path.join(path.resolve(), "uploads"))); // Serve uploaded images

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Name files uniquely with a timestamp
  },
});

const upload = multer({ storage });



server.post(
  "/salonregister",
  upload.single("salonImage"), // Single image upload for salon image only
  async (req, res) => {
    console.log(req.body);

    try {
      const {
        salonName,
        
        email,
        contact,
        location,
        openingHours,
        closingHours,
        password,
        // services,
      } = req.body;

       const salonImage = req.file ? req.file.filename : null; // Save salon image filename

      // Ensure all required fields are provided
      if (
        !salonName ||

        !email ||
        !contact ||
        !location ||
        !password 
        // !services
      ) {
        return res.status(400).json({ message: "All fields are required!" });
      }

      // Ensure an image file is uploaded
      if (!salonImage) {
        return res.status(400).json({ message: "Salon image is required!" });
      }

      // Check if email already exists in login data
      const existingUser = await loginData.findOne({ username: email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "Salon with this email already exists!" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

   

      // Create login data entry
      const login = await loginData.create({
        username: email,
        password: hashedPassword,
        role: "salon",
      });

      // Create salon data entry
      const newSalon = await salonData.create({
        commonKey: login._id,
        salonName,
        email,
        contact,
        location,
        openingHours,
        closingHours,
        // services: parsedServices, // Save parsed services
         image: salonImage, // Save the filename for the salon image
      });

      res
        .status(201)
        .json({ message: "Salon registered successfully!", salon: newSalon });
    } catch (error) {
      console.error("Error registering salon:", error);
      res
        .status(500)
        .json({ message: error.message || "Failed to register salon" });
    }
  }
);
  
server.post('/login', async (req, res) => {
  try {
      console.log(req.body); // Check the request body
      const { username, password } = req.body;

      // Find the user in the database
      const login = await loginData.findOne({ username });
      console.log(login,"info");
      

      // If no user is found
      if (!login) {
          return res.status(400).json({ message: 'User not found' });
      }

      // Compare the entered password with the stored hashed password
      const isMatch = await bcrypt.compare(password, login.password);

      // If passwords don't match
      if (!isMatch) {
          return res.status(400).json({ message: 'Incorrect password' });
      }

      // If login is successful
      res.status(200).json({ message: 'Login successful', login });
  } catch (error) {
      console.error('Error during login:', error.message);
      res.status(500).json({ message: 'An error occurred during login', error: error.message });
  }
});

// get salon home
server.get("/salonhome/:salonid", async (req, res) => {
    const { salonid } = req.params;  // Use 'salonid' from the URL params
    try {
        // Find the salon using the commonKey (or the correct field name)
        const salonhome = await salonData.findOne({ commonKey: salonid });

        // Check if no salon was found
        if (!salonhome) {
            return res.status(400).json({ message: 'Salon not found' });
        }

        // If a salon is found, return it
        console.log(salonhome);
        res.status(200).json({ salonhome });
    } catch (err) {
        console.error("Error fetching salon:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//admin view salon
server.get("/admin/salons", async (req, res) => {
    try {
        // Fetch all salons from the database
        const salons = await salonData.find({}).populate('commonKey')
console.log(salons);

        // Check if no salons exist
        // if (!salons || salons.length === 0) {
        //     return res.status(400).json({ message: 'No salons found' });
        // }

        res.status(200).json({ salons });
    } catch (err) {
        console.error("Error fetching salons:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// to add products
server.post('/salons/:salonId/products', async (req, res) => {
  try {
    const { salonId } = req.params;
    const { products } = req.body; // Array of product objects
console.log(salonId);

    console.log('Received products:', products); // Log the products to verify

    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ message: 'Invalid products data.' });
    }

    const salon = await salonData.findById(salonId);
    console.log(salon);
    
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }

    // Add or update products
    salon.products.push(...products); // Add the new products
    await salon.save();

    res.status(200).json({ message: 'Products added successfully.', products: salon.products });
  } catch (error) {
    console.error('Error adding products:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


// add srvices
server.post('/salons/:salonId/services', async (req, res) => {
  const { salonId } = req.params;
  const { name } = req.body;
console.log('services',salonId,name);

  try {
    // Find the salon by salonId
    const salon = await salonData.findById(salonId);

    // If salon not found, return error
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found' });
    }

    // Create a new service object
    const newService = {
      name: name,
      options: [], // Service options will be added later, if any
      offers: {
        discountPercentage: 0, // Default to no discount
        startDate: null,
        endDate: null,
      },
    };

    // Add the new service to the salon's services array
    salon.services.push(newService);

    // Save the updated salon
    await salon.save();

    // Send a success response
    res.status(201).json({ message: 'Service added successfully', service: newService });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding service', error: err.message });
  }
});
// add staffs
server.post('/salons/:salonId/staffs', upload.single('staffImage'), async (req, res) => {
  try {
    const { salonId } = req.params;
    const { name } = req.body; // Get name from body

    console.log(salonId, 'id for staff add');
    console.log(name);
    console.log(req.file);
    

    if (!name || !req.file) {
      return res.status(400).json({ message: 'Staff name and image are required.' });
    }

    // Find the salon by ID
    const salon = await salonData.findById(salonId);
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }

    // Create the staff object
    const staff = {
      staffName:name,
      staffImage: req.file.path, // Save the image path in the staff object
    };

    // Add new staff member to the salon's staff list
    salon.staffs.push(staff);
    await salon.save();

    res.status(200).json({
      message: 'Staff added successfully.',
      staffs: salon.staffs, // Return updated staff list
    });
  } catch (error) {
    console.error('Error adding staff:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
// getsalon for view services
server.get('/salon/:salonId',async(req,res)=>{
  const{ salonId}= req.params


  try {
    const salon = await salonData.findById(salonId)
    console.log('jhkjhkjh',salon);
    
    res.status(200).json(salon)
  } catch (error) {
    res.status(500).json({message:'errore while fetching',error})
  }

}
)
server.post("/add-service-option", async (req, res) => {
  const { salonId, serviceName, newServiceOption } = req.body;
console.log(serviceName);

  if (!salonId || !serviceName || !newServiceOption) {
    return res.status(400).json({
      message: "salonId, serviceName, and newServiceOption are required.",
    });
  }

  try {
    // Find the salon and update the specific service
    const updatedSalon = await salonData.findOneAndUpdate(
      {
        _id: salonId,
        "services.name": serviceName, // Match the specific service by name
      },
      {
        $push: { "services.$.options": newServiceOption }, // Add the new option to the matched service
      },
      { new: true } // Return the updated document
    );

    if (!updatedSalon) {
      return res.status(404).json({ message: "Salon or service not found." });
    }

    res.status(200).json({
      message: "Service option added successfully.",
      salon: updatedSalon,
    });
  } catch (error) {
    console.error("Error adding service option:", error);
    res.status(500).json({ message: "Internal server error." });
  }
})

// view product
server.get("/viewsalondata/:salonId", async (req, res) => {
  const { salonId } = req.params;  // Use 'salonid' from the URL params
  console.log('view salomn data',salonId);
  
  try {
      // Find the product based on the salonid (ensure you are using the correct field name)
      const salon = await salonData.findById(salonId );
console.log(salon);

      // Check if no product was found
      if (!salon) {
          return res.status(400).json({ message: 'Data not found' });
      }

      // If a product is found, return it
      res.status(200).json({ data: salon });
  } catch (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ message: 'Internal server error' });
  }
});


server.post('/salons/:salonId/services/:serviceId/offers', async (req, res) => {
  const { discountPercentage, startDate, endDate } = req.body;
console.log(req.body);
console.log('salonId',req.params.salonId);
console.log('serviceid',req.params.serviceId);


  try {
    // Validation checks for input
    if (discountPercentage <= 0 || discountPercentage > 100) {
      return res.status(400).json({ message: "Invalid discount percentage." });
    }
    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({ message: "Invalid offer dates." });
    }

    // Fetch the salon and service
    const salon = await salonData.findById(req.params.salonId);
    console.log(salon);
    
    if (!salon) return res.status(400).json({ message: "Salon not found." });

    const service = salon.services.id(req.params.serviceId);
    if (!service) return res.status(400).json({ message: "Service not found." });

    // Add or update the offer
    service.offers = { discountPercentage, startDate, endDate };
    await salon.save();

    res.status(200).json({ message: "Offer added/updated successfully!", service });
  } catch (error) {
    console.error("Error updating offer:", error);
    res.status(500).json({ message: "Server error." });
  }
});
server.put('/verifysalons/:salonId', async (req, res) => {
  const { salonId } = req.params;
  const { verify } = req.body; // Expects `verify` in the request body

  try {
    // Validate the salonId
    if (!mongoose.Types.ObjectId.isValid(salonId)) {
      return res.status(400).json({ message: 'Invalid salon ID.' });
    }

    // Update the `verify` field
    const salon = await loginData.findByIdAndUpdate(
      salonId,
      { verify },
      { new: true } // Return the updated document
    );

    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }

    res.status(200).json({
      message: `Salon ${verify ? 'verified' : 'unverified'} successfully.`,
      salon,
    });
  } catch (error) {
    console.error('Error toggling salon verification:', error);
    res.status(500).json({
      message: 'An error occurred while updating the verification status.',
    });
  }
});



server.post("/userregister", upload.single("image"),async (req, res) => {
  try {
    const { username, password, phonenumber } = req.body;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const image = req.file ? req.file.filename : null;
    // Validate input
    if (!username || !password || !phonenumber) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the username or phone number already exists in User collection
    const existingUser = await User.findOne({
      $or: [{ username }, { phonenumber }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Username or phone number already in use.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    

    // Save to Login collection
    const newLogin = new loginData({
      username,
      password: hashedPassword, // Store the same hashed password
      role: "user",
      image
    });
    await newLogin.save();
    // Save to User collection
    const newUser = new User({
      commonKey:newLogin._id,
      username,
      phonenumber,
      image,
    });
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully.",
      user: { username, phonenumber },
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




async function generateSlots(openingTime, closingTime, services, salonId, stylistId, date) {
  const slots = [];
  let currentTime = openingTime;

  const dateObj = new Date(date);
  const formattedDate = dateObj.toISOString().split('T')[0];

  const now = new Date();
  const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
  const currentDate = now.toISOString().split('T')[0];

  // Return empty slots if the selected date is in the past
  if (formattedDate < currentDate) {
    console.log('Selected date is in the past. No slots will be generated.');
    return slots;
  }

  // Calculate total duration for selected services
  const totalDuration = services.reduce((acc, service) => acc + service.timeRequired, 0);

  // Fetch existing bookings (exclude completed bookings)
  const existingBookings = await Booking.find({
    salonId,
    stylistId,
    date: formattedDate,
    status: { $nin: ['completed'] },
  }).select('slot date status');

  // Map existing bookings to booked time ranges
  const bookedTimeRanges = existingBookings
    .filter(booking => booking.status !== 'canceled') // Exclude canceled bookings
    .map(booking => {
      const [startTime, endTime] = booking.slot.split(' - ').map(timeToMinutes);
      return { start: startTime, end: endTime };
    });

  // Generate slots
  while (currentTime + totalDuration <= closingTime) {
    const slotStart = currentTime;
    const slotEnd = currentTime + totalDuration;

    // Skip slots in the past (only for current date)
    if (formattedDate === currentDate && slotStart < currentTimeInMinutes) {
      currentTime += totalDuration;
      continue;
    }

    // Check for overlaps
    const isOverlapping = bookedTimeRanges.some(range => 
      slotStart < range.end && slotEnd > range.start
    );

    // Add slot if no overlap
    if (!isOverlapping) {
      const startTime = minutesToTime(slotStart);
      const endTime = minutesToTime(slotEnd);
      slots.push(`${startTime} - ${endTime}`);
    }

    // Move to the next slot
    currentTime += totalDuration;
  }

  console.log(`Generated Slots: ${JSON.stringify(slots)}`);
  return slots;
}






function timeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}







server.post('/salons/:salonId/available-slots', async (req, res) => {
  try {
    const { salonId } = req.params;
    const { date, stylistId, serviceNames,optionNames } = req.body;
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    // Fetch salon details
    const Salon = await salonData.findById(salonId);
    if (!Salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }

    // Find the selected stylist
    const stylist = Salon.staffs.find((staff) => staff._id.toString() === stylistId);
    if (!stylist) {
      return res.status(404).json({ message: 'Stylist not found.' });
    }

    // Find the selected services
    // const selectedServices = salon.services.filter(service => serviceNames.includes(service.name));

    // if (selectedServices.length === 0) {
    //   return res.status(404).json({ message: 'Services not found.' });
    // }


    const selectedServices = Salon.services.filter(service => serviceNames.includes(service.name));
    // console.log(selectedServices);
    

  // const selectedOptions= selectedServices.map((item)=>item.options).flat().filter(service=>optionNames.includes(service.name) )

  const selectedOptions= selectedServices.map((item)=>item.options)

  console.log(selectedOptions,"kitttyy");

  const flatOptions = selectedOptions.flat();
console.log(flatOptions,"flatted");

const matchingDetails = flatOptions.filter(option => optionNames.includes(option.name))

console.log(matchingDetails,"got it");


  
    

    if (selectedServices.length === 0) {
      return res.status(404).json({ message: 'Services not found.' });
    }
    
    // Check if the selectedOption exists in any of the options
   
   
   
    

    // Calculate opening and closing times in minutes
    const openingTime = timeToMinutes(Salon.openingHours); // e.g., "09:00" -> 540
    const closingTime = timeToMinutes(Salon.closingHours); // e.g., "21:00" -> 1260


    // Generate available slots for the selected services, checking existing bookings
    const slots = await generateSlots(openingTime, closingTime, matchingDetails, salonId, stylistId, date);


   
    

    // Send the response with available slots and stylist info
    res.status(200).json({
      message: 'Available slots retrieved.',
      stylistName: stylist.name,
      slots,
    });
  } catch (error) {
    console.error('Error retrieving available slots:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});
server.post('/calculate-total', async (req, res) => {
  try {
    const { salonId, serviceNames, productIds } = req.body;

    // Fetch the salon and validate its existence
    const salon = await salonData.findById(salonId);
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }

    // Validate the selected services
    const selectedServices = salon.services.filter(service =>
      serviceNames.includes(service.name)
    );
    const invalidServices = serviceNames.filter(
      serviceName =>
        !selectedServices.some(service => service.name === serviceName)
    );
    if (invalidServices.length > 0) {
      return res
        .status(400)
        .json({ message: `Invalid services: ${invalidServices.join(', ')}` });
    }

    // Calculate the cost of services with discounts
    const currentDate = new Date();
    const serviceCosts = selectedServices.flatMap(service => {
      const discount = service.offers?.discountPercentage || 0;
      const isDiscountActive =
        service.offers?.startDate &&
        service.offers?.endDate &&
        currentDate >= new Date(service.offers.startDate) &&
        currentDate <= new Date(service.offers.endDate);

      return service.options.map(option => {
        const discountedPrice = isDiscountActive
          ? option.price * (1 - discount / 100)
          : option.price;

        return {
          name: service.name,
          originalCost: option.price,
          discountApplied: isDiscountActive ? `${discount}%` : 'No discount',
          cost: discountedPrice,
        };
      });
    });

    // Calculate the total amount from services
    const totalAmountFromServices = serviceCosts.reduce(
      (sum, service) => sum + service.cost,
      0
    );

    // Validate product availability (if any)
    let selectedProducts = [];
    if (productIds && productIds.length > 0) {
      selectedProducts = salon.products.filter(product =>
        productIds.includes(product._id.toString())
      );
      const invalidProducts = productIds.filter(
        productId =>
          !selectedProducts.some(product => product._id.toString() === productId)
      );
      if (invalidProducts.length > 0) {
        return res
          .status(400)
          .json({ message: `Invalid products: ${invalidProducts.join(', ')}` });
      }
    }

    // Calculate the total cost of the selected products
    const productCosts = selectedProducts.map(product => ({
      name: product.name,
      cost: product.price,
    }));
    const totalProductCost = productCosts.reduce(
      (sum, product) => sum + product.cost,
      0
    );

    // Return the detailed breakdown along with the total cost
    res.status(200).json({
      services: serviceCosts,
      products: productCosts,
      totalAmount: totalAmountFromServices + totalProductCost,
      originalServiceCost: serviceCosts.reduce(
        (sum, service) => sum + service.originalCost,
        0
      ),
      totalProductCost,
    });
  } catch (error) {
    console.error('Error calculating total:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});






server.post('/book', async (req, res) => {
  try {
    const { userId, salonId, stylistId, serviceNames, productIds, date, slot } = req.body;

    console.log('Request Body:', req.body);



    const dateObj = new Date(date);
    const formattedDate = dateObj.toISOString().split('T')[0];

    // Step 1: Fetch the salon and validate its existence
    const salon = await salonData.findById(salonId);
    if (!salon) {
      return res.status(404).json({ message: 'Salon not found.' });
    }

    // Step 2: Fetch the stylist and validate their availability
    const stylist = salon.staffs.find(staff => staff._id.toString() === stylistId);
    if (!stylist) {
      return res.status(404).json({ message: 'Stylist not found.' });
    }

    // Step 3: Validate the selected services
    const selectedServices = salon.services.filter(service =>
      serviceNames.includes(service.name)
    );
    const invalidServices = serviceNames.filter(
      serviceName => !selectedServices.some(service => service.name === serviceName)
    );
    if (invalidServices.length > 0) {
      return res
        .status(400)
        .json({ message: `Invalid services: ${invalidServices.join(', ')}` });
    }

    // Step 4: Calculate the total cost of services with discounts
    const currentDate = new Date();
    const serviceCosts = selectedServices.flatMap(service => {
      const discount = service.offers?.discountPercentage || 0;
      const isDiscountActive =
        service.offers?.startDate &&
        service.offers?.endDate &&
        currentDate >= new Date(service.offers.startDate) &&
        currentDate <= new Date(service.offers.endDate);

      return service.options.map(option => ({
        name: service.name,
        cost: isDiscountActive
          ? option.price * (1 - discount / 100) // Apply discount if active
          : option.price, // Regular price if no discount
        originalCost: option.price,
        discountApplied: isDiscountActive ? `${discount}%` : 'No discount',
      }));
    });

    const totalAmountFromServices = serviceCosts.reduce(
      (sum, service) => sum + service.cost,
      0
    );

    // Step 5: Validate product availability (if any)
    let selectedProducts = [];
    if (productIds && productIds.length > 0) {
      selectedProducts = salon.products.filter(product =>
        productIds.includes(product._id.toString())
      );
      if (selectedProducts.length !== productIds.length) {
        return res.status(400).json({ message: 'Some products are invalid.' });
      }
    }

    // Calculate the total cost of the selected products
    const productCosts = selectedProducts.map(product => ({
      name: product.name,
      cost: product.price,
    }));
    const totalProductCost = productCosts.reduce(
      (sum, product) => sum + product.cost,
      0
    );

    // Step 6: Check if the selected time slot is available
    const existingBooking = await Booking.findOne({
      salonId,
      stylistId,
      date: formattedDate,
      slot,
      status: { $ne: 'completed' },
    });
    if (existingBooking) {
      return res.status(400).json({ message: 'Selected time slot is already booked.' });
    }

    // Step 7: Create a new booking
    const newBooking = new Booking({
      userId,
      salonId,
      stylistId,
      serviceNames,
      productIds,
      date: formattedDate,
      slot,
      totalAmount: totalAmountFromServices + totalProductCost, // Total cost including services and products
    });

    // Step 8: Save the booking to the database
    await newBooking.save();

    // Step 9: Return the response
    res.status(201).json({
      message: 'Booking created successfully.',
      bookingId: newBooking._id,
      services: serviceCosts,
      products: productCosts,
      totalAmount: newBooking.totalAmount,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});


server.get('/bookings/:userId', async (req, res) => {
  try {
    // Extract the userId from the request parameters
    const { userId } = req.params;

  
    const bookings = await Booking.find({ userId })
      .populate('salonId')  
      .exec();

    // Check if bookings were found
    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user.' });
    }

    // Send the bookings data as a response
    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
});



server.get('/bookers/:SalonId', async (req, res) => {
  console.log(req.params.SalonId);
  try {
    // Extract the userId from the request parameters
    const { SalonId } = req.params;

  
    const bookings = await Booking.find({salonId: SalonId }).populate('userId')
     
      // .exec();
console.log(bookings);

    // Check if bookings were found
    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user.' });
    }

    // Send the bookings data as a response
    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
});
server.put('/bookings/cancel/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the booking by ID
    const booking = await Booking.findById(id);

    // If booking not found, return an error
    if (!booking) {
      return res.status(404).json({ message: 'Appointment not found.' });
    }

    // Check if the appointment is already canceled or completed
    if (booking.status === 'canceled') {
      return res.status(400).json({ message: 'Appointment is already canceled.' });
    }
    if (booking.status === 'completed') {
      return res.status(400).json({ message: 'Completed appointments cannot be canceled.' });
    }

    // Get the current date and time
    const currentDate = new Date();

    // Check if the appointment date and time have passed
    const appointmentDate = new Date(booking.date); // Booking date
    const [hours, minutes] = booking.slot.split(':'); // Extract hours and minutes from slot (e.g., "10:30")
    appointmentDate.setHours(parseInt(hours));
    appointmentDate.setMinutes(parseInt(minutes));

    if (currentDate > appointmentDate) {
      return res
        .status(400)
        .json({ message: 'Appointment cannot be canceled as the date and time have already passed.' });
    }

    // Update the status to 'canceled'
    booking.status = 'canceled';
    await booking.save();

    return res.status(200).json({ message: 'Appointment canceled successfully.', booking });
  } catch (error) {
    console.error('Error canceling appointment:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

// server.post('/feedback', async (req, res) => {
//   try {


//     console.log(req.body);
    
//    console.log(req.body.salonId);
   
    
//     const { salonId, email, rating, comment , userId , bookingId } = req.body;

//     console.log('====================================');
//     console.log(email);
//     console.log('====================================');

//     // Ensure all required fields are provided
//     if (!salonId || !rating) {
//       return res.status(400).json({ message: 'Salon ID and rating are required.' });
//     }

//     // Create new feedback record
//     const feedback = new Feedback({
//       salonId,
//       email,
//       rating,
//       comment,
//       userId,
//       bookingId
//     });

//     await feedback.save();
//     res.status(201).json({ message: 'Feedback submitted successfully.' });
//   } catch (error) {
//     console.error('Error submitting feedback:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });
server.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find user from User collection
    const user = await User.findOne({ commonKey: id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find login data from Login collection
    const LoginData = await loginData.findById(id);

    res.status(200).json({
      username: user.username,
      phonenumber: user.phonenumber,
      image: user.image,
      role: LoginData?.role || "user",
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



server.put("/userpro/:id", upload.single("image"), async (req, res) => {
  try {
    console.log(req.params);
    
    const { id } = req.params;
    const { username, phonenumber } = req.body;
    const image = req.file ? req.file.filename : null;

    

    // Check if user exists
    const user = await User.findOne({ commonKey: id });

    console.log(user,"gdgd");
    

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update User collection
    user.username = username || user.username;
    user.phonenumber = phonenumber || user.phonenumber;
    if (image) user.image = image;
    await user.save();

    // Update Login collection
    await loginData.findByIdAndUpdate(id, { username, image });

    res.status(200).json({ message: "User details updated successfully." });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



server.post("/feedback", async (req, res) => {
  try {
    const { salonId, email, rating, comment, userId, bookingId } = req.body;

    console.log("Received Feedback:", req.body.salonId._id);

    if (!salonId || !rating) {
      return res.status(400).json({ message: "Salon ID and rating are required." });
    }

    const feedback = new Feedback({ salonId:salonId._id, email, rating, comment, userId, bookingId });
    await feedback.save();

    res.status(201).json({ message: "Feedback submitted successfully." });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


//  salon get feed back

server.get("/feedback/:salonId", async (req, res) => {
  try {
    const { salonId } = req.params;
console.log(salonId);

    if (!salonId) {
      return res.status(400).json({ message: "Salon ID is required." });
    }

    // Fetch feedback based on salonId
    const feedbackList = await Feedback.find({ salonId }).sort({ createdAt: -1 });

    // if (feedbackList.length === 0) {
    //   return res.status().json({ message: "No feedback found for this salon." });
    // }

    res.status(200).json(feedbackList);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// get all users for admin
server.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database

  

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
