// // // import axios from 'axios';
// // import React, { useState } from 'react';

// // function Addservices2() {
// //   const [name, setServiceName] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent form from reloading the page
// //     try {
// //       // Send the service name as part of an object in the request body
// //       const body = { name }; 
// //       const response = await axios.post('http://localhost:8000/addService', body);
// //       console.log(response);
// //     } catch (error) {
// //       console.log('Error in adding service:', error);
// //     }
// //   };

// //   return (
// //     <>
// //       <nav className="navbar bg-body-tertiary">
// //         <div className="container-fluid">
// //           <a className="navbar-brand" href="#">
// //             <img 
// //               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" 
// //               alt="Logo" 
// //               width="50" 
// //               height="50" 
// //               className="d-inline-block align-text-top" 
// //             />
// //             Salon management
// //           </a>
// //         </div>
// //       </nav>

// //       <div className="nashfa">
// //         <div className="card" style={{ height: '300px' }}>
// //           <h1>Add Services</h1>

// //           <form className="space" onSubmit={handleSubmit}>
// //             <input 
// //               type="text" 
// //               placeholder="Service name" 
// //               onChange={(e) => setServiceName(e.target.value)} 
// //               value={name} 
// //             /> 
// //             <br />
// //             <button type="submit" style={{ width: '200px' }}>Add Service</button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Addservices2;
// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Addservices2() {
// //   const [name, setServiceName] = useState('');
// //   const salonId=localStorage.getItem("salonobjectid")
// // const navigate = useNavigate()
// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent form from reloading the page
// //     try {
// //       // Send the service name as part of an object in the request body
// //       const body = { name }; 
// //       const response = await axios.post(`http://localhost:8000/salons/${salonId}/services`, body);
// //       console.log(response);
// //       alert(response.data.message)
// //       navigate('/salonviewservices')
// //     } catch (error) {
// //       console.log('Error in adding service:', error);
// //     }
// //   };

// //   return (
// //     <>
// //       <nav style={styles.navbar}>
// //         <div style={styles.navbarContainer}>
// //           <a style={styles.navbarBrand} href="#">
// //             <img 
// //               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" 
// //               alt="Logo" 
// //               width="50" 
// //               height="50" 
// //               style={styles.navbarImage} 
// //             />
// //             <span>Salon Management</span>
// //           </a>
// //         </div>
// //       </nav>

// //       <div style={styles.container}>
// //         <div style={styles.card}>
// //           <h1 style={styles.heading}>Add Services</h1>

// //           <form style={styles.form} onSubmit={handleSubmit}>
// //             <input 
// //               type="text" 
// //               placeholder="Service name" 
// //               onChange={(e) => setServiceName(e.target.value)} 
// //               value={name} 
// //               style={styles.input} 
// //             />
// //             <button type="submit" style={styles.button}>Add Service</button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // const styles = {
// //   navbar: {
// //     backgroundColor: '#333', // Dark navbar background
// //     padding: '10px 20px',
// //   },
// //   navbarContainer: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   navbarBrand: {
// //     color: '#fff',
// //     fontSize: '20px',
// //     fontWeight: 'bold',
// //     textDecoration: 'none',
// //     display: 'flex',
// //     alignItems: 'center',
// //   },
// //   navbarImage: {
// //     marginRight: '10px',
// //   },
// //   container: {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     height: '100vh',
// //     backgroundColor: '#f4f7fc',
// //   },
// //   card: {
// //     backgroundColor: '#fff',
// //     padding: '30px',
// //     borderRadius: '8px',
// //     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// //     width: '100%',
// //     maxWidth: '400px',
// //     textAlign: 'center',
// //   },
// //   heading: {
// //     fontSize: '24px',
// //     color: '#333',
// //     marginBottom: '20px',
// //   },
// //   form: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //   },
// //   input: {
// //     width: '80%',
// //     padding: '12px',
// //     fontSize: '16px',
// //     borderRadius: '4px',
// //     border: '1px solid #ccc',
// //     marginBottom: '4px', // Decreased the margin to bring the button closer
// //     outline: 'none',
// //     transition: 'border-color 0.3s',
// //   },
// //   inputFocus: {
// //     borderColor: '#007bff',
// //   },
// //   button: {
// //     backgroundColor: '#C6A16D',  // Darker beige color for the button
// //     color: '#fff',
// //     padding: '12px 20px',
// //     border: 'none',
// //     borderRadius: '4px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s ease',
// //     width: '80%',
// //     marginTop: '4px', // Reduced margin between input and button
// //   },
// //   buttonHover: {
// //     backgroundColor: '#C19A6B',  // Darker beige for hover effect
// //   },
// // };

// // export default Addservices2;
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Addservices2() {
  const [name, setServiceName] = useState('');
  const salonId = localStorage.getItem('salonobjectid');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    try {
      const body = { name };
      const response = await axios.post(`http://localhost:8000/salons/${salonId}/services`, body);
      console.log(response);
      alert(response.data.message);
      navigate('/salonviewservices');
    } catch (error) {
      console.log('Error in adding service:', error);
    }
  };

  return (
    <>
      {/* Navbar with Home Icon */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <a style={styles.navbarBrand} href="#">
            <img 
              src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" 
              alt="Logo" 
              width="50" 
              height="50" 
              style={styles.navbarImage} 
            />
            <span>Salon Management</span>
          </a>
          <Link to="/salonhome" style={styles.homeIcon}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt="Home Icon"
              width="30"
              height="30"
            />
          </Link>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Add Services</h1>

          <form style={styles.form} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Service name" 
              onChange={(e) => setServiceName(e.target.value)} 
              value={name} 
              style={styles.input} 
            />
            <button type="submit" style={styles.button}>Add Service</button>
          </form>
        </div>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#A67C52', // Dark beige color for navbar
    padding: '10px 20px',
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
    display: 'flex',
    alignItems: 'center',
  },
  navbarImage: {
    marginRight: '10px',
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
    marginBottom: '4px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    backgroundColor: '#A67C52', // Matching button color
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '80%',
    marginTop: '4px',
  },
};

export default Addservices2;



