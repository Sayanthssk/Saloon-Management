// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Seesalons() {
//   const [salons, setSalons] = useState([]);
  
//   // Inline styles for table and other elements
//   const tableStyles = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '20px',
//   };

//   const thStyles = {
//     padding: '12px 15px',
//     textAlign: 'left',
//     borderBottom: '1px solid #ddd',
//     backgroundColor: '#8a6330b9', // Beige color for table header
//     color: '#333',
//     fontSize: '16px',
//   };

//   const tdStyles = {
//     padding: '12px 15px',
//     textAlign: 'left',
//     borderBottom: '1px solid #ddd',
//     fontSize: '14px',
//     color: '#333',
//   };

//   const buttonStyles = {
//     padding: '8px 16px',
//     fontSize: '14px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginRight: '10px',
//     backgroundColor: '#8a6330b9', // Beige color for buttons
//     color: 'black',
//   };

//   // Fetch salons data
//   const fetchSalons = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/admin/salons');
//       console.log(response);
      
//       setSalons(response.data.salons); // Assuming the API returns an array of salons
//     } catch (error) {
//       console.error('Error fetching salons data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchSalons();
//   }, []);

//   const handleAccept = (salonId) => {
//     console.log('Accepted salon with ID:', salonId);
//     // You can add an API call or any other action for "Accept" here
//   };

//   const handleDelete = (salonId) => {
//     console.log('Deleted salon with ID:', salonId);
//     // You can add an API call or any other action for "Delete" here
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Salon Management</h2>
//       <table style={tableStyles}>
//         <thead>
//           <tr>
//             <th style={thStyles}>Salon Name</th>
//             <th style={thStyles}>Email</th>
//             <th style={thStyles}>Contact Number</th>
//             <th style={thStyles}>Opening & Closing Hour</th>
//             <th style={thStyles}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salons.length > 0 ? (
//             salons.map((salon) => (
//               <tr key={salon._id}>
//                 <td style={tdStyles}>{salon.salonName}</td>
//                 <td style={tdStyles}>{salon.email}</td>
//                 <td style={tdStyles}>{salon.contact}</td>
//                 <td style={tdStyles}>
//                   {salon.openingHours} - {salon.closingHours}
//                 </td>
//                 <td style={tdStyles}>
//                   <button
//                     style={buttonStyles}
//                     onClick={() => handleAccept(salon._id)}
//                   >
//                     Accept
//                   </button>
//                   <button
//                     style={{ ...buttonStyles, backgroundColor: '#f44336' }}
//                     onClick={() => handleDelete(salon._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" style={tdStyles}>No salons available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Seesalons;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Seesalons() {
  const [salons, setSalons] = useState([]);

  // Inline styles for table and other elements
  const tableStyles = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyles = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#8a6330b9', // Beige color for table header
    color: '#333',
    fontSize: '16px',
  };

  const tdStyles = {
    padding: '12px 15px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    fontSize: '14px',
    color: '#333',
  };

  const buttonStyles = {
    padding: '8px 16px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    backgroundColor: '#8a6330b9', // Beige color for buttons
    color: 'black',
  };

  // Fetch salons data
  const fetchSalons = async () => {
    try {
      const response = await axios.get('https://saloon-management-server.onrender.com/admin/salons');
      console.log(response);
      
      setSalons(response.data.salons);
    } catch (error) {
      console.error('Error fetching salons data:', error);
    }
  };

  useEffect(() => {
    fetchSalons();
  }, []);

  // Handle Verify/Unverify toggle
  const toggleVerify = async (salonId, currentVerify) => {
    try {
      const response = await axios.put(
        `https://saloon-management-server.onrender.com/verifysalons/${salonId}`,
        { verify: !currentVerify } // Sending `false` if currentVerify is `true`
      );
      console.log(response.data.message);
      alert(response.data.message)
      setSalons((prevSalons) =>
        prevSalons.map((salon) =>
          salon._id === salonId ? { ...salon, verify: !currentVerify } : salon
        )
      );
      fetchSalons()
    } catch (error) {
      console.error('Error toggling verification:', error);
    }
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h2>Salon Management</h2>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Salon Name</th>
            <th style={thStyles}>Email</th>
            <th style={thStyles}>Contact Number</th>
            <th style={thStyles}>Opening & Closing Hour</th>
            <th style={thStyles}>Verification</th>
          </tr>
        </thead>
        <tbody>
          {salons.length > 0 ? (
            salons.map((salon) => (
              <tr key={salon._id}>
                <td style={tdStyles}>{salon.salonName}</td>
                <td style={tdStyles}>{salon.email}</td>
                <td style={tdStyles}>{salon.contact}</td>
                <td style={tdStyles}>
                  {salon.openingHours} - {salon.closingHours}
                </td>
                <td style={tdStyles}>
                  <button
                    style={buttonStyles}
                    onClick={() => toggleVerify(salon.commonKey._id, salon.commonKey.verify)}
                  >
                    {salon.commonKey.verify ? 'Unverify' : 'Verify'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={tdStyles}>
                No salons available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Seesalons;
