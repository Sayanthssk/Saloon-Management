// import React, { useState, useEffect } from 'react';

// function ViewServices() {
//   // Simulate the data of salon services
//   const [services, setServices] = useState([]);

//   // Simulate fetching services data (can be replaced by an API call)
//   useEffect(() => {
//     // Sample data for services
//     const fetchedServices = [
//       {
//         service: 'Haircut',
//         optionName: 'Men\'s Cut',
//         price: '20',
//         timeRequired: '30',
//         gender: 'Male'
//       },
//       {
//         service: 'Haircut',
//         optionName: 'Women\'s Cut',
//         price: '30',
//         timeRequired: '40',
//         gender: 'Female'
//       },
//       {
//         service: 'Massage',
//         optionName: 'Full Body Massage',
//         price: '50',
//         timeRequired: '60',
//         gender: 'Both'
//       },
//       {
//         service: 'Facial',
//         optionName: 'Anti-aging Facial',
//         price: '40',
//         timeRequired: '45',
//         gender: 'Both'
//       },
//     ];

//     // Set the fetched services
//     setServices(fetchedServices);
//   }, []);

//   return (
//     <>
//       <nav class="navbar bg-body-tertiary">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             <img src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
//             Salon management
//           </a>
//         </div>
//       </nav>

//       <div class="nashfa">
//         <div class="card" style={{ height: "500px" }}>
//           <h1>View Services</h1>
//           <div className="services-list">
//             {services.length === 0 ? (
//               <p>No services available</p>
//             ) : (
//               services.map((service, index) => (
//                 <div key={index} className="service-item">
//                   <h3>{service.service}</h3>
//                   <p><strong>Option Name:</strong> {service.optionName}</p>
//                   <p><strong>Price:</strong> ${service.price}</p>
//                   <p><strong>Time Required:</strong> {service.timeRequired} minutes</p>
//                   <p><strong>Gender:</strong> {service.gender}</p>
//                   <hr />
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ViewServices;

// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function ViewServices() {
//   // Simulate the data of salon services
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const salonId = localStorage.getItem('salonobjectid')
//   console.log('viewservices salonId',salonId);
  

//   // Simulate fetching services data (can be replaced by an API call)
//   useEffect(() => {
//     // Sample data for services
//     const fetchedService = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/viewsalondata/${salonId}`); // Make an API call
//         console.log(response);
        
//         setServices(response.data.data.services); // Set the products data
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (err) {
//         setError('Error fetching products');
//         setLoading(false); // Set loading to false on error
//       }
//     };

//     fetchedService();
//   }, [salonId]); // Re-fetch if salonid changes

//   // Show loading or error if applicable
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   //   const fetchedServices = [
//   //     {
//   //       service: '',
//   //       optionName: '',
//   //       price: '',
//   //       timeRequired: '',
//   //       gender: ''
//   //     },
      
      
//   //     {
//   //       service: 'Facial',
//   //       optionName: 'Anti-aging Facial',
//   //       price: '40',
//   //       timeRequired: '45',
//   //       gender: 'Both'
//   //     },
//   //   ];

//   //   // Set the fetched services
//   //   setServices(fetchedServices);
//   // }, []);

//   return (
//     <>
//     <nav style={styles.navbar}>
//       <div style={styles.navContainer}>
//         <a href="#" style={styles.navBrand}>
//           <img
//             src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//             alt="Logo"
//             width="50"
//             height="50"
//             style={styles.navImg}
//           />
//           Salon Management
//         </a>
//       </div>
//     </nav>

//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.heading}>View Services</h1>
//         <div style={styles.servicesList}>
//           {services.length === 0 ? (
//             <p>No services available</p>
//           ) : (
//             services.map((service, index) => (
//               <div key={index} style={styles.serviceItem}>
//                 <h3 style={styles.serviceName}>{service.name}</h3>
//                 {/* <p><strong>Options:</strong></p> */}
//                 {service.options.length === 0 ? (
//                   <p style={styles.serviceDetail}>No options available</p>
//                 ) : (
//                   service.options.map((option, idx) => (
//                     <div key={idx} style={styles.optionDetail}>
//                       <p style={styles.serviceDetail}><strong>Name:</strong><strong> {option.name}</strong></p>
//                       <p style={styles.serviceDetail}><strong>Price:</strong> ${option.price}</p>
//                       <p style={styles.serviceDetail}><strong>Time:</strong> {option.timeRequired} min</p>
//                       <p style={styles.serviceDetail}><strong>Gender:</strong> {option.gender}</p>
//                     </div>
//                   ))
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   </>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#8a6330b9',
//     padding: '8px 20px', // Reduced padding
//   },
//   navContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   navBrand: {
//     color: '#fff',
//     fontSize: '18px', // Smaller font size
//     fontWeight: 'bold',
//     textDecoration: 'none',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   navImg: {
//     marginRight: '10px',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',  // Full height of the viewport
//     backgroundColor: '#f4f7fc',
//     padding: '0 20px',  // Adding horizontal padding for responsiveness
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '15px',  // Reduced padding
//     borderRadius: '8px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '500px',  // Reduced width for compact design
//     minHeight: '300px', // Reduced height
//     boxSizing: 'border-box',
//     margin: '10px',
//   },
//   heading: {
//     fontSize: '18px',  // Smaller heading size
//     color: '#333',
//     marginBottom: '10px',
//   },
//   servicesList: {
//     marginTop: '10px',
//     textAlign: 'left',
//   },
//   serviceItem: {
//     backgroundColor: '#f9f9f9',
//     padding: '8px',  // Reduced padding
//     marginBottom: '10px',
//     borderRadius: '6px',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//   },
//   serviceName: {
//     fontSize: '16px',  // Reduced font size
//     color: '#333',
//     marginBottom: '5px',
//   },
//   serviceDetail: {
//     fontSize: '12px',  // Reduced font size
//     color: '#555',
//     marginBottom: '5px',
//   },
// };

// export default ViewServices;

import axios from 'axios';
import React, { useState, useEffect } from 'react';

function ViewServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const salonId = localStorage.getItem('salonobjectid');
  console.log('viewservices salonId', salonId);

  useEffect(() => {
    const fetchedService = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/viewsalondata/${salonId}`);
        console.log(response);
        setServices(response.data.data.services);
        setLoading(false);
      } catch (err) {
        setError('Error fetching services');
        setLoading(false);
      }
    };
    fetchedService();
  }, [salonId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
          <h1 style={styles.heading}>View Services</h1>
          <div style={styles.servicesList}>
            {services.length === 0 ? (
              <p>No services available</p>
            ) : (
              services.map((service, index) => (
                <div key={index} style={styles.serviceItem}>
                  <h3 style={styles.serviceName}>{service.name}</h3>
                  {service.options.length === 0 ? (
                    <p style={styles.serviceDetail}>No options available</p>
                  ) : (
                    service.options.map((option, idx) => (
                      <div key={idx} style={styles.optionDetail}>
                        <p style={styles.serviceDetail}><strong>Name:</strong> {option.name}</p>
                        <p style={styles.serviceDetail}><strong>Price:</strong> ${option.price}</p>
                        <p style={styles.serviceDetail}><strong>Time:</strong> {option.timeRequired} min</p>
                        <p style={styles.serviceDetail}><strong>Gender:</strong> {option.gender}</p>
                      </div>
                    ))
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#8a6330b9',
    padding: '8px 20px',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',
    padding: '80px 20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    minHeight: '300px',
    boxSizing: 'border-box',
    margin: '10px',
  },
  heading: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  servicesList: {
    marginTop: '10px',
    textAlign: 'left',
  },
  serviceItem: {
    backgroundColor: '#f9f9f9',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  serviceName: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '5px',
  },
  serviceDetail: {
    fontSize: '12px',
    color: '#555',
    marginBottom: '5px',
  },
};

export default ViewServices;
