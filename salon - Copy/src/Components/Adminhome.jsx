// import React from 'react';
// import { Link } from 'react-router-dom'; // Make sure to use react-router for navigation
// import '../css/adminhome.css';

// function AdminHome() {
//   // Sample salon data (name and image)
 

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-container">
//           <a className="navbar-brand" href="#">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//               alt="Logo"
//               width="50"
//               height="50"
//               className="navbar-image"
//             />
//             <span>Salon Management</span>
//           </a>
//         </div>
//       </nav>

//       {/* Page Container */}
//       <div className="page-container">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <div className="sidebar-header">
//             <h2>Admin</h2>
//           </div>
//           <ul className="sidebar-links">
//             <li><Link to="/adminhome">Dashboard</Link></li>
//             <li><Link to="/viewusers">Manage users</Link></li>
//             <li><Link to="/seesalons">Manage salons</Link></li>
           
//             <li><Link to="/viewfeedbackadmin">View Feedback</Link></li>
//             <li><Link to="/">Logout</Link></li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="main-content">
//           <h1 className="page-heading">Salons</h1>
//           {/* <div className="salon-list">
//             {salons.map((salon, index) => (
//               <div key={index} className="salon-item">
//                 <img src={salon.imageUrl} alt={salon.name} className="salon-image" />
//                 <h3 className="salon-name">{salon.name}</h3>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminHome;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../css/adminhome.css"; // Ensure this file contains necessary styling

// function AdminHome() {
//   const [salons, setSalons] = useState([]);

//   useEffect(() => {
//     fetchSalons();
//   }, []);

//   const fetchSalons = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/admin/salons"); // Adjust backend URL
//       console.log(response);
      
//       setSalons(response.data.salons);
//     } catch (error) {
//       console.error("Error fetching salons:", error);
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="navbar-container">
//           <a className="navbar-brand" href="#">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//               alt="Logo"
//               width="50"
//               height="50"
//               className="navbar-image"
//             />
//             <span>Salon Management</span>
//           </a>
//         </div>
//       </nav>

//       {/* Page Container */}
//       <div className="page-container">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <div className="sidebar-header">
//             <h2>Admin</h2>
//           </div>
//           <ul className="sidebar-links">
//             <li><Link to="/adminhome">Dashboard</Link></li>
//             <li><Link to="/viewusers">Manage Users</Link></li>
//             <li><Link to="/seesalons">Manage Salons</Link></li>
//             <li><Link to="/viewfeedbackadmin">View Feedback</Link></li>
//             <li><Link to="/">Logout</Link></li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="main-content">
//           <h1 className="page-heading">Salons</h1>
          
//           {/* Salon Cards */}
//           <div className="salon-card-container">
//             {salons.length > 0 ? (
//               salons.map((salon) => (
//                 <div key={salon._id} className="salon-card">
//                   <img
//                  src=  {`http://localhost:8000/uploads/${salon.image}` || "https://via.placeholder.com/50"}
//                     alt={salon.name}
//                     className="salon-image"
//                   />
//                   <div className="salon-info">
//                     <h3>{salon.salonName
//                     }</h3>
//                     <p>{salon.email}
//                       <br/>
//                       {salon.location
//                       }
//                     </p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p style={{ textAlign: "center" }}>No salons available.</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Styling for the salon cards */}
//       <style>{`
//         .salon-card-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 20px;
//           padding: 20px;
//           justify-items: center;
//         }

//         .salon-card {
//           background: white;
//           border-radius: 10px;
//           overflow: hidden;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           text-align: center;
//           padding: 10px;
//           width: 250px;
//         }

//         .salon-image {
//           width: 100%;
//           height: 150px;
//           object-fit: cover;
//           border-top-left-radius: 10px;
//           border-top-right-radius: 10px;
//         }

//         .salon-info {
//           padding: 10px;
//         }

//         .salon-info h3 {
//           margin: 10px 0;
//         }

//         .salon-info p {
//           color: gray;
//           font-size: 14px;
//         }
//       `}</style>
//     </>
//   );
// }

// export default AdminHome;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/adminhome.css"; // Ensure this file contains necessary styling

function AdminHome() {
  const [salons, setSalons] = useState([]);

  useEffect(() => {
    fetchSalons();
  }, []);

  const fetchSalons = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/salons"); // Adjust backend URL
      console.log(response);
      
      // Filter salons to only include verified ones
      const verifiedSalons = response.data.salons.filter(salon => salon.commonKey.verify === true);
      
      setSalons(verifiedSalons);
    } catch (error) {
      console.error("Error fetching salons:", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-brand" href="#">
            <img
              src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
              alt="Logo"
              width="50"
              height="50"
              className="navbar-image"
            />
            <span>Salon Management</span>
          </a>
        </div>
      </nav>

      {/* Page Container */}
      <div className="page-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <h2>Admin</h2>
          </div>
          <ul className="sidebar-links">
            <li><Link to="/adminhome">Dashboard</Link></li>
            <li><Link to="/viewusers">Manage Users</Link></li>
            <li><Link to="/seesalons">Manage Salons</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <h1 className="page-heading">Verified Salons</h1>
          
          {/* Salon Cards */}
          <div className="salon-card-container">
            {salons.length > 0 ? (
              salons.map((salon) => (
                <div key={salon._id} className="salon-card">
                  <img
                    src={`http://localhost:8000/uploads/${salon.image}` || "https://via.placeholder.com/150"}
                    alt={salon.salonName}
                    className="salon-image"
                  />
                  <div className="salon-info">
                    <h3>{salon.salonName}</h3>
                    <p>{salon.email}<br/>{salon.location}</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>No verified salons available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Styling for the salon cards */}
      <style>{`
        .salon-card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
          justify-items: center;
        }

        .salon-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          padding: 10px;
          width: 250px;
        }

        .salon-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        .salon-info {
          padding: 10px;
        }

        .salon-info h3 {
          margin: 10px 0;
        }

        .salon-info p {
          color: gray;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

export default AdminHome;
