import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Salon from './Components/Salon'
import Services from './Components/Services'
import Booking from './Components/Salonbooking'
import ViewUsers from './Components/ViewUsers'
import Feedback from './Components/Feedback'
// import Salons from './Components/Salons'
import Consultant from './Components/Consultant'
import Assign from './Components/Assign'
import Manage from './Components/Manage'
import Salonregistration from './Components/Salonregistration'
import { Routes,Route } from 'react-router-dom'
import Notification from './Components/Notification'
import Viewconsultant from './Components/Viewconsultant'
import Appointment from './Components/Appointment'
import Manageconsultants from './Components/Manageconsultants'
import Payment from './Components/Payment'
import Salonlogin from './Components/Salonlogin'
import Addbeautician from './Components/Addbeautician'
import Addandmangetimeslots from './Components/Addandmangetimeslots'
import Offers from './Components/Offers'
import Addproducts from './Components/Addproducts'
import Addservices from './Components/Addservices'
import Addservices2 from './Components/Addservices2'
import Salonviewservices from './Components/Salonviewservices'
import Salonbooking from './Components/Salonbooking'
import Adminhome from './Components/Adminhome'
import Seesalons from './Components/Seesalons'
import Viewbookingadmin from './Components/Viewbookingadmin'
import Viewfeedbackadmin from './Components/Viewfeedbackadmin'
import Viewproducts from './Components/Viewproducts'
import Viewbeautician from './Components/Viewbeautician'
import SalonViewFeedback from './Components/SalonViewFeedback'









function App() {

  return (
    <>


    <Routes>


      <Route path="/" element={<Login/>} />

      <Route path="salonregistration" element={<Salonregistration/>} />
      <Route path="notification" element={<Notification/>} />
    
      <Route path="viewconsultant" element={<Viewconsultant/>} />
      <Route path="appointment" element={<Appointment/>} />
      <Route path="assign" element={<Assign/>} />
      <Route path="salonbooking" element={<Salonbooking/>} />
      <Route path="consultant" element={<Consultant/>} />
      <Route path="feedback" element={<Feedback/>} />
      <Route path="manage" element={<Manage/>} />
      <Route path="manageconsultants" element={<Manageconsultants/>} />
      <Route path="payment" element={<Payment/>} />
      <Route path="salonhome" element={<Salon/>} />
      <Route path="salonlogin" element={<Salonlogin/>} />
      {/* <Route path="salons" element={<Salons/>} /> */}
      <Route path="services" element={<Services/>} />
      <Route path="viewconsultant" element={<Viewconsultant/>} />
      <Route path="viewusers" element={<ViewUsers/>} />
      <Route path="addbeautician" element={<Addbeautician/>} />
      <Route path="addandmanagetimeslots" element={<Addandmangetimeslots/>} />
      <Route path="offers" element={<Offers/>} />
      {/* <Route path="login" element={<Login/>}   />   */}
      <Route path="addproducts" element={<Addproducts/>} />
      <Route path="addservices" element={<Addservices/>} />
      <Route path="addservices2" element={<Addservices2/>} />
      <Route path="salonviewservices" element={<Salonviewservices/>}  />
      <Route path="adminhome" element={<Adminhome/>} />
      <Route path="seesalons" element={<Seesalons/>} />
      <Route path="viewbookingadmin" element={<Viewbookingadmin/>} />
      <Route path="viewfeedbackadmin" element={<Viewfeedbackadmin/>} />
      <Route path="viewproducts" element={<Viewproducts/>} />
      <Route path="viewbeautician" element={<Viewbeautician/>} />
    <Route path='/salonviewfeedback' element={<SalonViewFeedback/>}/>

















    </Routes>
    

    </>
  )
}

export default App
