// import React from 'react'
// import { Form } from 'react-bootstrap'

// function Addbeautician() {
//   return (
//     <>
//      <nav class="navbar bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">
//       <img src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
//       SALON MANAGEMENT    </a>
//   </div>
// </nav>


// <div class="nashfa" >
//         <div class="card" style={{height:"400px"}}>
//             <h1>Add beautician</h1>

//             {/* <div class="divider"></div> */}

//     <form class="space" >
//         <input type="text" placeholder="name"/>   <br />
        
        
//         <Form.Group controlId="formFile" className="mb-3">
//         <Form.Label>Add image</Form.Label>
//         <Form.Control type="file" />
//       </Form.Group>+
    
//         <button type="submit" style={{width:"200px"}}>Add</button> 
//         <div class="sign">
        
//      </div>
//     </form>
//     </div>
//     </div>
      
//     </>
//   )
// }

// export default Addbeautician
// 
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Spinner, Alert } from 'react-bootstrap';

// function AddBeautician() {
//   const [name, setName] = useState('');
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     if (!name || !image) {
//       setError('Please provide all required fields.');
//       setLoading(false);
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('image', image);

//     try {
//       const response = await axios.post('http://localhost:8000/salonhome/addBeautician', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setSuccess('Beautician added successfully!');
//     } catch (err) {
//       setError('Failed to add beautician. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <nav style={styles.navbar}>
//         <div style={styles.navbarContainer}>
//           <a style={styles.navbarBrand} href="#">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//               alt="Logo"
//               width="50"
//               height="50"
//               style={styles.navbarImage}
//             />
//             <span>Salon Management</span>
//           </a>
//         </div>
//       </nav>

//       <div style={styles.container}>
//         <div style={styles.card}>
//           <h1 style={styles.heading}>Add Beautician</h1>

//           {error && <Alert variant="danger">{error}</Alert>}
//           {success && <Alert variant="success">{success}</Alert>}

//           <form style={styles.form} onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Name"
//               style={styles.input}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <br />

//             <Form.Group controlId="formFile" className="mb-3" style={styles.formGroup}>
//               <Form.Label style={styles.label}>Add Image</Form.Label>
//               <Form.Control type="file" style={styles.input} onChange={handleFileChange} />
//             </Form.Group>

//             <button type="submit" style={styles.button} disabled={loading}>
//               {loading ? <Spinner animation="border" size="sm" /> : 'Add'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#8a6330b9',
//     padding: '10px 20px',
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
//     textDecoration: 'none',
//     display: 'flex',
//     alignItems: 'center',
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
//     maxWidth: '400px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '24px',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   input: {
//     width: '80%',
//     padding: '12px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     marginBottom: '10px',
//     outline: 'none',
//     transition: 'border-color 0.3s',
//   },
//   label: {
//     fontSize: '16px',
//     color: '#333',
//     marginBottom: '8px',
//     textAlign: 'left',
//     width: '80%',
//   },
//   formGroup: {
//     width: '80%',
//   },
//   button: {
//     backgroundColor: '#C6A16D',
//     color: '#fff',
//     padding: '12px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     width: '80%',
//   },
// };

// export default AddBeautician;
// import axios, { Axios } from 'axios';
// import React, { useState } from 'react';

// function AddBeautician() {
//   const [name, setBeauticianName] = useState('');
//   const salonId = localStorage.getItem('salonobjectid');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent form from reloading the page
//     try {
//       // Send the beautician name as part of an object in the request body
//       const body = { name };
//       const response = await Axios.post(`http://localhost:8000/salons/${salonId}/beauticians`, body);
//       console.log(response);
//       alert(response.data.message);
//     } catch (error) {
//       console.log('Error in adding beautician:', error);
//     }
//   };

//   return (
//     <>
//       <nav style={styles.navbar}>
//         <div style={styles.navbarContainer}>
//           <a style={styles.navbarBrand} href="#">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//               alt="Logo"
//               width="50"
//               height="50"
//               style={styles.navbarImage}
//             />
//             <span>Salon Management</span>
//           </a>
//         </div>
//       </nav>

//       <div style={styles.container}>
//         <div style={styles.card}>
//           <h1 style={styles.heading}>Add Beautician</h1>

//           <form style={styles.form} onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Beautician name"
//               onChange={(e) => setBeauticianName(e.target.value)}
//               value={name}
//               style={styles.input}
//             />
//             <button type="submit" style={styles.button}>Add Beautician</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#333', // Dark navbar background
//     padding: '10px 20px',
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
//     textDecoration: 'none',
//     display: 'flex',
//     alignItems: 'center',
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
//     maxWidth: '400px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '24px',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   input: {
//     width: '80%',
//     padding: '12px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     marginBottom: '4px', // Decreased the margin to bring the button closer
//     outline: 'none',
//     transition: 'border-color 0.3s',
//   },
//   inputFocus: {
//     borderColor: '#007bff',
//   },
//   button: {
//     backgroundColor: '#C6A16D', // Darker beige color for the button
//     color: '#fff',
//     padding: '12px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     width: '80%',
//     marginTop: '4px', // Reduced margin between input and button
//   },
//   buttonHover: {
//     backgroundColor: '#C19A6B', // Darker beige for hover effect
//   },
// };

// export default AddBeautician;

// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AddBeautician() {
//   const [name, setBeauticianName] = useState('');
//   const [staffImage, setFile] = useState(null);
//   const salonId = localStorage.getItem('salonobjectid');
//   console.log(salonId);
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       if (staffImage) formData.append('staffImage', staffImage);

//       const response = await axios.post(
//         `http://localhost:8000/salons/${salonId}/staffs`,
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       console.log(response);
//       alert(response.data.message);
//       navigate('/salonhome');
//     } catch (error) {
//       console.log('Error in adding beautician:', error);
//     }
//   };

//   return (
//     <>
//       <nav style={styles.navbar}>
//         <div style={styles.navbarContainer}>
//           <a style={styles.navbarBrand} href="#">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//               alt="Logo"
//               width="50"
//               height="50"
//               style={styles.navbarImage}
//             />
//             <span>Salon Management</span>
//           </a>

//           {/* Home Icon */}
//           <a href="/salonhome" style={styles.homeIcon}>
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
//               alt="Home"
//               width="24"
//               height="24"
//             />
//           </a>
//         </div>
//       </nav>

//       <div style={styles.container}>
//         <div style={styles.card}>
//           <h1 style={styles.heading}>Add Beautician</h1>

//           <form style={styles.form} onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Beautician name"
//               onChange={(e) => setBeauticianName(e.target.value)}
//               value={name}
//               style={styles.input}
//             />
//             <input
//               type="file"
//               onChange={handleFileChange}
//               style={styles.fileInput}
//             />
//             <button type="submit" style={styles.button}>
//               Add Beautician
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#333',
//     padding: '10px 20px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   navbarContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//   },
//   navbarBrand: {
//     color: '#fff',
//     fontSize: '20px',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   navbarImage: {
//     marginRight: '10px',
//   },
//   homeIcon: {
//     textDecoration: 'none',
//     cursor: 'pointer',
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
//     maxWidth: '400px',
//     textAlign: 'center',
//   },
//   heading: {
//     fontSize: '24px',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   input: {
//     width: '80%',
//     padding: '12px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     marginBottom: '10px',
//     outline: 'none',
//     transition: 'border-color 0.3s',
//   },
//   fileInput: {
//     width: '80%',
//     marginBottom: '20px',
//     fontSize: '14px',
//   },
//   button: {
//     backgroundColor: '#C6A16D',
//     color: '#fff',
//     padding: '12px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     width: '80%',
//   },
// };

// export default AddBeautician;

import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Make sure Link is imported

function AddBeautician() {
  const [name, setBeauticianName] = useState('');
  const [staffImage, setFile] = useState(null);
  const salonId = localStorage.getItem('salonobjectid');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (staffImage) formData.append('staffImage', staffImage);

      const response = await axios.post(
        `https://saloon-management-server.onrender.com/salons/${salonId}/staffs`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      console.log(response);
      alert(response.data.message);
      navigate('/salonhome');
    } catch (error) {
      console.log('Error in adding beautician:', error);
    }
  };

  return (
    <>
      {/* Updated navbar section */}
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

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Add Beautician</h1>

          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Beautician name"
              onChange={(e) => setBeauticianName(e.target.value)}
              value={name}
              style={styles.input}
            />
            <input
              type="file"
              onChange={handleFileChange}
              style={styles.fileInput}
            />
            <button type="submit" style={styles.button}>
              Add Beautician
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// Styles (no changes needed)
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
    paddingTop: '70px', // To avoid overlapping with the fixed navbar
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  fileInput: {
    width: '80%',
    marginBottom: '20px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#A67C52',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '80%',
  },
};

export default AddBeautician;



