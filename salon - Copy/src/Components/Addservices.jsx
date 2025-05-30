// // import axios from 'axios';
// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';

// // function Addservices() {
// //   const [services, setServices] = useState([]); // To store the list of services
// //   const [selectservice, setSelectService] = useState(''); // Selected service from dropdown
// //   const [optionname, setOptioName] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [timerequired, setTimeRequired] = useState('');
// //   const [gender, setGender] = useState('');
// //   const salonId = localStorage.getItem("salonobjectid");
// //   // console.log(salonId);

// //   // Fetch salon details and populate services
// //   const fetchSalon = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:8000/salon/${salonId}`);
// //       console.log(response.data);
// //       setServices(response.data.services || []); // Assuming "services" is an array in the response
// //     } catch (error) {
// //       console.error("Error fetching salon data:", error);
// //     }
// //   };

// //   const handleSubmit = async(e) => {
// //     e.preventDefault();
// //     // Handle the form submission logic here (like sending data to the server)
// //     console.log({
// //       selectservice,
// //       optionname,
// //       price,
// //       timerequired,
// //       gender
// //     });
  
// //     const response =await axios.post('http://localhost:8000/add-service-option', {
// //       salonId,
// //       serviceName: serviceId,
// //       newServiceOption: {
// //         name: optionName,
// //         price: parseFloat(price),
// //         timeRequired: parseInt(timeRequired, 10),
// //         gender,
// //       },
// //     });
// //     console.log(response);
    
      
// //   };
   
    
// //   useEffect(() => {
// //     fetchSalon();
// //   }, []);

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
// //           <h1 style={styles.heading}>Add New Service</h1>
// //           <form onSubmit={handleSubmit} style={styles.form}>
// //             {/* Dropdown for Selecting Service */}
// //             <select 
// //               value={selectservice}
// //               onChange={(e) => setSelectService(e.target.value)}
// //               style={styles.input}
// //             >
// //               <option value="" disabled>Select Service</option>
// //               {services.map((service) => (
// //                 <option key={service._id} value={service.name}>
// //                   {service.name}
// //                 </option>
// //               ))}
// //             </select>
// //             <br />
            
// //             <input 
// //               type="text" 
// //               placeholder="Option Name" 
// //               value={optionname}
// //               onChange={(e) => setOptioName(e.target.value)} 
// //               style={styles.input} 
// //             /> 
// //             <br />
// //             <input 
// //               type="text" 
// //               placeholder="Price" 
// //               value={price}
// //               onChange={(e) => setPrice(e.target.value)} 
// //               style={styles.input} 
// //             />
// //             <br />
// //             <input 
// //               type="text" 
// //               placeholder="Time Required (minutes)" 
// //               value={timerequired}
// //               onChange={(e) => setTimeRequired(e.target.value)} 
// //               style={styles.input} 
// //             /> 
// //             <br />

// //             <label style={styles.label}>Gender</label> 
// //             <br />
// //             <div style={styles.radioGroup}>
// //               <input type="radio" name="gender" onChange={(e) => setGender(e.target.value)}/> Female  
// //              <input type="radio" name="gender" onChange={(e) => setGender(e.target.value)}/> Male  
// //             </div>
// //             <br />

// //             <button type="submit" style={styles.button}>Add Option</button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// // Corrected and Enhanced Component
// // 
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Addservices() {
  const [services, setServices] = useState([]);
  const [selectService, setSelectService] = useState('');
  const [optionName, setOptionName] = useState('');
  const [price, setPrice] = useState('');
  const [timeRequired, setTimeRequired] = useState('');
  const [gender, setGender] = useState('');
  const salonId = localStorage.getItem("salonobjectid");

  useEffect(() => {
    const fetchSalon = async () => {
      try {
        const response = await axios.get(`https://saloon-management-server.onrender.com/salon/${salonId}`);
        setServices(response.data.services || []);
      } catch (error) {
        console.error("Error fetching salon data:", error);
      }
    };
    fetchSalon();
  }, [salonId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://saloon-management-server.onrender.com/add-service-option', {
        salonId,
        serviceName: selectService,
        newServiceOption: {
          name: optionName,
          price: parseFloat(price),
          timeRequired: parseInt(timeRequired, 10),
          gender,
        },
      });
      console.log("Service option added:", response.data);
    } catch (error) {
      console.error("Error adding service option:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <div style={styles.navbarBrand}>
            <h2>Salon Management</h2>
          </div>
          <Link to="/salonhome" className="home-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
              alt="Home Icon"
              style={styles.navbarImage}
              width="30"
              height="30"
            />
          </Link>
        </div>
      </div>

      <div style={styles.card}>
        <h1 style={styles.heading}>Add New Service</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <select
            value={selectService}
            onChange={(e) => setSelectService(e.target.value)}
            style={styles.input}
          >
            <option value="" disabled>Select Service</option>
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Option Name"
            value={optionName}
            onChange={(e) => setOptionName(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Time Required (minutes)"
            value={timeRequired}
            onChange={(e) => setTimeRequired(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Gender</label>
          <div style={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
          </div>

          <button type="submit" style={styles.button}>Add Option</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#8a6330b9',
    padding: '10px 20px',
    textDecoration: 'none',
  
    width:"100%"
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
    textDecoration: 'none',
  },
  navbarImage: {
    marginRight: '10px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
    marginTop: '20px',
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
  label: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '5px',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: '15px',
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

export default Addservices;


