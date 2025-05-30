// import React from 'react'

// function Viewbeautician() {
//   return (
//     <>
//     {/* Navbar with dark beige color */}
//     <nav style={styles.navbar}>
//         <div style={styles.navbarContainer}>
//           <a style={styles.navbarBrand} href="#">
            
            
//             <span>Salon Management</span>
//           </a>
//         </div>
//       </nav>

//       {/* Feedback table */}
//       <div style={styles.container}>
//         <div style={styles.card}>
//           <h1 style={styles.heading}>View beautician</h1>

//           {/* Table for feedbacks */}
//           <table className="table" style={styles.table}>
//             <thead>
//               <tr>
//                 <th scope="col">Name</th>
//                 <th scope="col"></th>
                
                
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">Soorya</th>
//                 <td>Good</td>
//                 <td>***</td>
//                 <td>2/11/24</td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Button */}
          
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#A67C52', // Darker beige color for navbar background
//     padding: '10px 20px',
//     textDecoration: 'none',
//   },
//   navbarContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   navbarBrand: {
//     color: '#fff',
//     fontSize: '20px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//     textDecoration: 'none', // Removed underline from navbar heading
//   },
//   navbarImage: {
//     marginRight: '10px',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f4f7fc',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '700px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '24px',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginBottom: '20px',
//     textAlign: 'left',
//   },
//   tableTh: {
//     backgroundColor: '#f2f2f2',
//     padding: '12px',
//     border: '1px solid #ddd',
//     color: '#333',
//   },
//   tableTd: {
//     padding: '12px',
//     border: '1px solid #ddd',
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#A67C52',  // Darker beige color for button
//     color: '#fff',
//     padding: '12px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     marginTop: '20px',
//   },
        

      
    
  
// }
      
    
  


// export default Viewbeautician;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Viewbeautician() {
//   const [beauticians, setBeauticians] = useState([]); // State for beauticians
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const salonId = localStorage.getItem('salonobjectid'); // Retrieve salon ID from localStorage

//   useEffect(() => {
//     // Fetch beauticians from the API
//     const fetchBeauticians = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/viewsalondata/${salonId}`);
//         console.log(response);

//         // Check if the API response contains the expected `staffs` array
       
//           setBeauticians(response.data.data.staffs);
       
//         setLoading(false);
//       } catch (err) {
//         setError('Error fetching beauticians');
//         setLoading(false);
//       }
//     };

//     fetchBeauticians();
//   }, [salonId]);

//   // Show loading or error if applicable
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       {/* Navbar with dark beige color */}
//       <nav style={styles.navbar}>
//         <div style={styles.navbarContainer}>
//           <a style={styles.navbarBrand} href="#">
//             <span>Salon Management</span>
//           </a>
//         </div>
//       </nav>

//       {/* Beautician table */}
//       <div style={styles.container}>
//         <div style={styles.card}>
//           <h1 style={styles.heading}>View Beauticians</h1>

//           {/* Table for beauticians */}
//           <table className="table" style={styles.table}>
//             <thead>
//               <tr>
//                 <th scope="col">Photo</th>
//                 <th scope="col">Name</th>
              
//               </tr>
//             </thead>
//             <tbody>
//               {beauticians.length > 0 ? (
//                 beauticians.map((beautician, index) => (
//                   <tr key={index}>
//                     <td>
//                       <img
//                         src={`http://localhost:8000/${beautician.staffImage}`} // Default placeholder image
//                         alt={`${beautician.name}'s profile`}
//                         style={styles.image}
//                       />
//                     </td>
//                     <td>{beautician.staffName || 'N/A'}</td>
                  
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4">No beauticians available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#A67C52', // Darker beige color for navbar background
//     padding: '10px 20px',
//     textDecoration: 'none',
//   },
//   navbarContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   navbarBrand: {
//     color: '#fff',
//     fontSize: '20px',
//     fontWeight: 'bold',
//     display: 'flex',
//     alignItems: 'center',
//     textDecoration: 'none', // Removed underline from navbar heading
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f4f7fc',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '700px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '24px',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginBottom: '20px',
//     textAlign: 'left',
//   },
//   image: {
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%', // Circular image
//     objectFit: 'cover',
//   },
//   tableTh: {
//     backgroundColor: '#f2f2f2',
//     padding: '12px',
//     border: '1px solid #ddd',
//     color: '#333',
//   },
//   tableTd: {
//     padding: '12px',
//     border: '1px solid #ddd',
//     color: '#333',
//   },
// };

// export default Viewbeautician;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Viewbeautician() {
  const [beauticians, setBeauticians] = useState([]); // State for beauticians
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const salonId = localStorage.getItem('salonobjectid'); // Retrieve salon ID from localStorage

  useEffect(() => {
    // Fetch beauticians from the API
    const fetchBeauticians = async () => {
      try {
        const response = await axios.get(`https://saloon-management-server.onrender.com/viewsalondata/${salonId}`);
        console.log(response);

        // Check if the API response contains the expected `staffs` array
        setBeauticians(response.data.data.staffs);
        setLoading(false);
      } catch (err) {
        setError('Error fetching beauticians');
        setLoading(false);
      }
    };

    fetchBeauticians();
  }, [salonId]);

  // Show loading or error if applicable
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* Navbar with home icon */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <a style={styles.navbarBrand} href="#">
            <span>Salon Management</span>
          </a>
          <Link to="/salonhome" style={styles.homeIcon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
              alt="Home Icon"
              width="30"
              height="30"
            />
          </Link>
        </div>
      </nav>

      {/* Beautician table */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>View Beauticians</h1>

          {/* Table for beauticians */}
          <table className="table" style={styles.table}>
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
              {beauticians.length > 0 ? (
                beauticians.map((beautician, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={`https://saloon-management-server.onrender.com/${beautician.staffImage}`} // Default placeholder image
                        alt={`${beautician.name}'s profile`}
                        style={styles.image}
                      />
                    </td>
                    <td>{beautician.staffName || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">No beauticians available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#A67C52', // Darker beige color for navbar background
    padding: '10px 20px',
    textDecoration: 'none',
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navbarBrand: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none', // Removed underline from navbar heading
  },
  homeIcon: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '700px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    textAlign: 'left',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '50%', // Circular image
    objectFit: 'cover',
  },
  tableTh: {
    backgroundColor: '#f2f2f2',
    padding: '12px',
    border: '1px solid #ddd',
    color: '#333',
  },
  tableTd: {
    padding: '12px',
    border: '1px solid #ddd',
    color: '#333',
  },
};

export default Viewbeautician;

