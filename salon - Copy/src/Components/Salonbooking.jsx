// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Salonbooking() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the salon ID from localStorage
//   const salonId = localStorage.getItem('salonobjectid');
//   console.log(salonId);

//   // Fetch bookings from the server
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/bookers/${salonId}`);
//         console.log(response);
        
//         setBookings(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching bookings:', err);
//         setError('Failed to fetch bookings.');
//         setLoading(false);
//       }
//     };

//     if (salonId) {
//       fetchBookings();
//     } else {
//       setError('Salon ID is missing.');
//       setLoading(false);
//     }
//   }, [salonId]);

//   // Render loading, error, or bookings
//   if (loading) {
//     return <p>Loading bookings...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h2>Salon Bookings</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Beautician</th>
//             <th scope="col">Service Name</th>
//             <th scope="col">Date</th>
//             <th scope="col">Status</th>
//             <th scope="col">User</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <tr key={booking._id}>
//                 <td>{booking.serviceNames || 'N/A'}</td>
//                 <td>{booking.serviceName || 'N/A'}</td>
//                 <td>{new Date(booking.date).toLocaleDateString() || 'N/A'}</td>
//                 <td>{booking.status || 'N/A'}</td>
//                 <td>{booking.user || 'N/A'}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No bookings available.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Salonbooking;



//import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Salonbooking() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const salonId = localStorage.getItem('salonobjectid'); // Retrieve salon ID from localStorage

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/bookers/${salonId}`); // API call to fetch bookings
//         console.log(response);
        
        
//         setBookings(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching bookings:', err);
//         setError('Failed to fetch bookings.');
//         setLoading(false);
//       }
//     };

//     if (salonId) {
//       fetchBookings();
//     } else {
//       setError('Salon ID is missing.');
//       setLoading(false);
//     }
//   }, [salonId]);

//   if (loading) {
//     return <p>Loading bookings...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h2>Salon Bookings</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Beautician (Stylist ID)</th>
//             <th scope="col">Service Name(s)</th>
//             <th scope="col">Date</th>
//             <th scope='col'>Slot</th>
//             <th scope="col">User ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <tr key={booking._id}>
//                 <td>{booking.stylistId || 'N/A'}</td>
//                 <td>
//                   {booking.serviceNames && booking.serviceNames.length > 0
//                     ? booking.serviceNames.join(', ')
//                     : 'N/A'}
//                 </td>
//                 <td>
//                   {booking.date
//                     ? new Date(booking.date).toLocaleDateString()
//                     : 'N/A'}
//                 </td>
//                     <td>{booking.slot}</td>
//                 <td>{booking.userId.username || 'N/A'}</td>

//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No bookings available.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Salonbooking;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Salonbooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const salonId = localStorage.getItem('salonobjectid');
console.log(salonId);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`https://saloon-management-server.onrender.com/bookers/${salonId}`);
        console.log(response);
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError('Failed to fetch bookings.');
        setLoading(false);
      }
    };

    if (salonId) {
      fetchBookings();
    } else {
      setError('Salon ID is missing.');
      setLoading(false);
    }
  }, [salonId]);

  if (loading) {
    return <p>Loading bookings...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {/* Navbar Section */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <Link to="/salonhome" style={styles.navbarBrand}>
            Salon Management
          </Link>
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

      {/* Main Content */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Salon Bookings</h2>
          <table className="table" style={styles.table}>
            <thead>
              <tr>
                <th scope="col">Beautician (Stylist ID)</th>
                <th scope="col">Service Name(s)</th>
                <th scope="col">Date</th>
                <th scope="col">Slot</th>
                <th scope="col">User ID</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.stylistId || 'N/A'}</td>
                    <td>
                      {booking.serviceNames && booking.serviceNames.length > 0
                        ? booking.serviceNames.join(', ')
                        : 'N/A'}
                    </td>
                    <td>
                      {booking.date
                        ? new Date(booking.date).toLocaleDateString()
                        : 'N/A'}
                    </td>
                    <td>{booking.slot}</td>
                    <td>{booking.userId?.username || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No bookings available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// Styles
const styles = {
  navbar: {
    backgroundColor: '#8a6330b9',
    padding: '10px 20px',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
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
    textDecoration: 'none',
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
    paddingTop: '70px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '800px',
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
};

export default Salonbooking;
