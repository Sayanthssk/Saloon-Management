// import axios from 'axios'
// import React, { useEffect } from 'react'

// function Salon() {
//   const salonloginid= localStorage.getItem('salonLoginId')
//   const fetchsalon =async()=>{
// const response= await axios.get(`http://localhost:8000/salonhome/${salonloginid}`)
// console.log(response);

//   }
//   useEffect(()=>{
//     fetchsalon()
//   },[])
//   return (
 
//     <>



// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Name</th>
//       <th scope="col">Phone No</th>
//       <th scope="col">place</th>
//       <th scope="col"></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">AK</th>
//       <td>7567578</td>
//       <td>adg</td>
//       <td> <button className='btn btn-success'>Accept</button> <button className='btn btn-danger'>reject</button>  </td>
//     </tr>
   
   
//   </tbody>
// </table>
      
//     </>
//   )
// }

// export default Salon
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Salon.css'



function Salon() {
  const salonloginid = localStorage.getItem('salonLoginId');
  const [salonData, setSalonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSalon = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/salonhome/${salonloginid}`);
      setSalonData(response.data.salonhome);console.log(response);
      localStorage.setItem("salonobjectid",response.data.salonhome._id)
      
      setLoading(false);
    } catch (err) {
      setError('Error fetching salon data');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (salonloginid) {
      fetchSalon();
    } else {
      setError('Salon login ID not found');
      setLoading(false);
    }
  }, [salonloginid]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  

  return (
    <div className="salon-layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="salon-container">
          <div className="salon-info">
            <h2>{salonData.salonName}</h2>
            <img
              src={`http://localhost:8000/uploads/${salonData.image}`}
              alt={salonData.salonName}
              className="salon-image"
            />
            <p><strong>Email:</strong> {salonData.email}</p>
            <p><strong>Contact:</strong> {salonData.contact}</p>
            <p><strong>Location:</strong> {salonData.location}</p>
            <p><strong>Opening Hours:</strong> {salonData.openingHours}</p>
            <p><strong>Closing Hours:</strong> {salonData.closingHours}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

// Sidebar component
const Sidebar = () => {
  return (
    <div className="salonsidebar">
      <div className="salonsidebar-header">
        
      </div>
      <ul className="salonsidebar-links">
        <li><Link>DashBoard</Link></li>
        <li><Link to={'/addservices'}>Service Options</Link></li>
        <li><Link to={'/addbeautician'}>Add Beautician</Link></li>
        <li><Link to={'/viewbeautician'}>View Beautician</Link></li>
        <li><Link to={'/addproducts'}>Add products</Link></li>
        <li><Link to={'/viewproducts'}>View Products</Link></li>
        <li><Link to={'/addservices2'}>Add services</Link></li>
        <li><Link to={'/salonviewservices'}>view services</Link></li>
        <li><Link to={'/salonviewfeedback'}>View feedbacks</Link></li>
        <li><Link to={'/notification'}>Offers</Link></li>
        <li><Link to={'/salonbooking'}>View Booking</Link></li>  
        <li><Link to={'/'}>Logout</Link></li>
  
      </ul>
    </div>
  );
};

// Navbar component
const Navbar = () => {
  return (
    <div className="navbar" style={{ backgroundColor: "#8a6330b9", color: "white", padding: "10px 20px" }}>
      <div className="navbar-left">
        <h2>Salon Management</h2>
      </div>
      <div className="navbar-right">
        <div className="user-info">
          <span>Welcome, Salon Owner</span>
        </div>
      </div>
    </div>
  );
};


export default Salon;

