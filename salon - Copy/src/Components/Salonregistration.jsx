// import axios from 'axios';
// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';


// function Salonregistration() {
//   const [salonName,setSalonName]=useState('')
//   const [location,setSalonPlace]=useState('')
//   const [contact,setmobile]=useState('')
//   const [email,setemail]=useState('')
//   const [openingHours,setopening]=useState('')
//   const [closingHours,setclosing]=useState('')
//   const [password,setpassword]=useState('')
//   const [image,setimage]=useState('')
  

// const handleSubmit= async(e)=>{
//   e.preventDefault()
//     const salonFormData=new FormData();
//   salonFormData.append('salonName', salonName);
//   salonFormData.append('email', email);
//   salonFormData.append('contact', contact);
//   salonFormData.append('location', location);
//   salonFormData.append('openingHours', openingHours);
//   salonFormData.append('closingHours', closingHours);
//   salonFormData.append('image', image);
//   salonFormData.append('password', password);
// console.log(salonFormData)
//   try {
//     const response = await axios.post('http://localhost:8000/salonregister',
//       salonFormData,
//       {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       }
//     );
//     console.log(response);
//     alert(response.data.message);
//     setSuccess(response.data.message || 'Salon registered successfully!');
//   } catch (err) {
//     console.error('Error:', err.response?.data || err);
//     // setError(err.response?.data?.message || 'Failed to register the salon. Please try again.');
//   }

// }
//   return (
//     <>
//         <nav class="navbar bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">
//       <img src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
//       LOGIN PAGE
//     </a>
//   </div>
// </nav>


// <div class="nashfa" >
//         <div class="card" style={{height:"500px"}}>
//             <h1>Registration</h1>

//             {/* <div class="divider"></div> */}

//     <form class="space" onSubmit={handleSubmit}>
//         <input type="text" placeholder="Salon name" onChange={(e)=>setSalonName(e.target.value)}/>   <br />
//         <input type="text" placeholder="Place" onChange={(e)=>setSalonPlace(e.target.value)}/> <br />
//         <input type="text" placeholder="contact number" onChange={(e)=>setmobile(e.target.value)}/><br />
//         <input type="email" placeholder="email id" onChange={(e)=>setemail(e.target.value)}/> <br />
//         <input type="time" placeholder="opening hour" onChange={(e)=>setopening(e.target.value)}/> <br />        
//         <input type="time" placeholder="closing hour" onChange={(e)=>setclosing(e.target.value)}/> <br />
//         <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/> <br /> 
       
//         <Form.Group controlId="formFile" className="mb-3">
//         <Form.Label>Default file input example</Form.Label>
//         <Form.Control type="file" onChange={(e)=>setimage(e.target.value)}/> <br />
    
//       </Form.Group>
//         <a href="#" id="aa">forgot password ?</a> <br />
//         <button type="submit" style={{width:"200px"}}>Registration</button> 
//         <div class="sign">
        
//      </div>
//     </form>
//     </div>
//     </div>
//     </>
      
//   )
// }

// export default Salonregistration


// import axios from 'axios';
// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for basic styling
// import { useNavigate } from 'react-router-dom';


// function Salonregistration() {
//   const [salonName, setSalonName] = useState('');
//   const [location, setSalonPlace] = useState('');
//   const [contact, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [openingHours, setOpening] = useState('');
//   const [closingHours, setClosing] = useState('');
//   const [password, setPassword] = useState('');
//   const [salonImage, setImage] = useState(null);
//  const navigate = useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a new FormData object
//     const salonFormData = new FormData();
//     salonFormData.append('salonName', salonName);
//     salonFormData.append('email', email);
//     salonFormData.append('contact', contact);
//     salonFormData.append('location', location);
//     salonFormData.append('openingHours', openingHours);
//     salonFormData.append('closingHours', closingHours);
//     salonFormData.append('password', password);

//     // Append the image file (if available)
//     if (salonImage) {
//       salonFormData.append('salonImage', salonImage);  // Image file is appended here
//     }

//     try {
//       const response = await axios.post('http://localhost:8000/salonregister', salonFormData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert(response.data.message);  // Display success message
//       navigate('/')
//     } catch (err) {
//       console.error('Error:', err.response?.data || err);
//     }
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//               alt="Logo"
//               width="50"
//               height="50"
//               className="d-inline-block align-text-top"
//             />
//             Salon Registration
//           </a>
//         </div>
//       </nav>

//       <div className="container mt-5">
//         <div className="card shadow-lg p-4 rounded">
//           <h2 className="text-center mb-4">Salon Registration</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Salon Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter salon name"
//                 onChange={(e) => setSalonName(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Location</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter location"
//                 onChange={(e) => setSalonPlace(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Contact Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Enter contact number"
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Opening Hour</label>
//               <input
//                 type="time"
//                 className="form-control"
//                 onChange={(e) => setOpening(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Closing Hour</label>
//               <input
//                 type="time"
//                 className="form-control"
//                 onChange={(e) => setClosing(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Upload Salon Image</label>
//               <Form.Control
//                 type="file"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary w-100 mt-4">
//               Register Salon
//             </button>
//           </form>
//         </div>
//       </div>

//       <footer className="text-center mt-5">
//         <p>&copy; 2024 Salon Management. All Rights Reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default Salonregistration;

import axios from 'axios';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for basic styling
import { useNavigate } from 'react-router-dom';

function Salonregistration() {
  const [salonName, setSalonName] = useState('');
  const [location, setSalonPlace] = useState('');
  const [contact, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [openingHours, setOpening] = useState('');
  const [closingHours, setClosing] = useState('');
  const [password, setPassword] = useState('');
  const [salonImage, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!salonName) newErrors.salonName = 'Salon name is required';
    if (!location) newErrors.location = 'Location is required';
    if (!contact || !/^\d{10}$/.test(contact)) newErrors.contact = 'Valid contact number is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!openingHours) newErrors.openingHours = 'Opening hours are required';
    if (!closingHours) newErrors.closingHours = 'Closing hours are required';
    if (!password) newErrors.password = 'Password is required';
    if (!salonImage) newErrors.salonImage = 'Salon image is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop submission if form is invalid
    }

    // Create a new FormData object
    const salonFormData = new FormData();
    salonFormData.append('salonName', salonName);
    salonFormData.append('email', email);
    salonFormData.append('contact', contact);
    salonFormData.append('location', location);
    salonFormData.append('openingHours', openingHours);
    salonFormData.append('closingHours', closingHours);
    salonFormData.append('password', password);

    // Append the image file (if available)
    if (salonImage) {
      salonFormData.append('salonImage', salonImage);  // Image file is appended here
    }

    try {
      const response = await axios.post('http://localhost:8000/salonregister', salonFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.message);  // Display success message
      navigate('/');
    } catch (err) {
      console.error('Error:', err.response?.data || err);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{ paddingTop: '0rem', backgroundColor:'#A67C52', paddingBottom: '0.2rem' }}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
      <img
        src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
        alt="Logo"
        width="50"
        height="50"
        className="d-inline-block align-text-top"
      />
      Salon Registration
    </a>
  </div>
</nav>

      <div className="container mt-5">
        <div className="card shadow-lg p-4 rounded pt-5">
          <h2 className="text-center mb-4">Salon Registration</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Salon Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter salon name"
                onChange={(e) => setSalonName(e.target.value)}
              />
              {errors.salonName && <small className="text-danger">{errors.salonName}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter location"
                onChange={(e) => setSalonPlace(e.target.value)}
              />
              {errors.location && <small className="text-danger">{errors.location}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter contact number"
                onChange={(e) => setMobile(e.target.value)}
              />
              {errors.contact && <small className="text-danger">{errors.contact}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Opening Hour</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => setOpening(e.target.value)}
              />
              {errors.openingHours && <small className="text-danger">{errors.openingHours}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Closing Hour</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => setClosing(e.target.value)}
              />
              {errors.closingHours && <small className="text-danger">{errors.closingHours}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <small className="text-danger">{errors.password}</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Upload Salon Image</label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              {errors.salonImage && <small className="text-danger">{errors.salonImage}</small>}
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4">
              Register Salon
            </button>
          </form>
        </div>
      </div>

      <footer className="text-center mt-5">
        <p>&copy; 2024 Salon Management. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Salonregistration;

