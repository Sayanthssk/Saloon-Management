// import React from 'react'

// function Notification() {
//   return (
//     <div>
//       <tr>
//         <td><button type="button" class="btn btn-secondary">Add offers</button></td>
//         </tr>
//           <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">Date</th>
//       <th scope="col">Description</th>
//       <th scope="col">Offers</th>
//       <th scope="col">Starting Date</th>
//       <th scope="col">Ending Date</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">12/09/24</th>
//       <td>hvfjsdfjjg</td>
//       <td>hair color offer 12 strands for 700</td>
//       <td>12/09/24</td>
//       <td>18/09/24</td>
    

//     </tr>
   
//   </tbody>
// </table>
      
//     </div>
//   )
// }

// export default Notification
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Notification() {
  const [services, setServices] = useState([]); // State to store services and their offers
  const [loading, setLoading] = useState(true); // Loading state
  const salonId = localStorage.getItem("salonobjectid"); // Retrieve salon ID from localStorage

  useEffect(() => {
    // Fetch services with offers from the API
    const fetchServicesWithOffers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/viewsalondata/${salonId}`
        );
       console.log(response);
       
          setServices(response.data.data.services);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching services with offers:", err);
        setLoading(false);
      }
    };

    fetchServicesWithOffers();
  }, [salonId]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <a href="#" style={styles.navBrand}>
            <img
              src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
              alt="Logo"
              width="50"
              height="50"
              style={styles.navImg}
            />
            Salon Management
          </a>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={styles.card}>
          {/* Center the button horizontally at the top */}
          <div style={styles.buttonContainer}>
            <Link to='/offers'>
            <button type="button" style={styles.addOfferButton}>Add offers</button>
            </Link>
          </div>

            {/* Display Offers */}
      <div className="container mt-4">
        <div className="card p-4 shadow-sm">
          <h2 className="text-center mb-4">Service Offers</h2>
          {services.length === 0 ? (
            <p>No services or offers available.</p>
          ) : (
            <ul className="list-group">
              {services.map((service) => (
                <li key={service._id} className="list-group-item">
                  <h5>{service.name}</h5>
                  {service.offers ? (
                    <div>
                      <p>
                        <strong>Discount:</strong> {service.offers.discountPercentage}%
                      </p>
                      <p>
                        <strong>Start Date:</strong> {new Date(service.offers.startDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>End Date:</strong> {new Date(service.offers.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  ) : (
                    <p>No offers available for this service.</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#8a6330b9',
    padding: '10px 20px',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  navBrand: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  navImg: {
    marginRight: '10px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',  // Horizontally centers the card
    alignItems: 'flex-start',  // Aligns content to the top vertically
    minHeight: '100vh',  // Makes sure the container takes the full height of the viewport
    padding: '20px',
    backgroundColor: '#f4f7fc',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '900px',  // Limits the width of the card
    boxSizing: 'border-box',
    marginTop: '20px',  // Optional, adds space above the card
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',  // Horizontally centers the "Add offers" button
    marginBottom: '20px',
  },
  addOfferButton: {
    backgroundColor: '#C6A16D',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    backgroundColor: '#C6A16D',  // Darker beige for header
    color: '#333',
    padding: '12px',
    textAlign: 'center',
  },
  td: {
    padding: '12px',
    textAlign: 'center',
    fontSize: '14px',
  },
  tr: {
    backgroundColor: '#f9f9f9',
    transition: 'background-color 0.3s ease',
  },
};

export default Notification;

