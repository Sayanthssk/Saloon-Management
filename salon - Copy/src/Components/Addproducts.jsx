// // import React, { useState } from 'react'

// // function Addproducts() {
// //    const [Name,setName]=useState('')
// //     const [price,setPrice]=useState('')
// //     const [NoofProducts,setNoofProducts]=useState('')
// //     const [Description,setDescription]=useState('')
// //   return (
// //     <>
// //     <nav class="navbar bg-body-tertiary">
// //   <div class="container-fluid">
// //     <a class="navbar-brand" href="#">
// //       <img src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
// //       Salon management
// //     </a>
// //   </div>
  
// // </nav>




// // <div class="nashfa" >
// //         <div class="card" style={{height:"500px"}}>
// //             <h1>Add New Product</h1>

// //             {/* <div class="divider"></div> */}
// // <form class="space" onSubmit={handleSubmit}>
// //         <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>   <br />
// //         <input type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/> <br />
// //         <input type="text" placeholder="no of products" onChange={(e)=>setNoofProducts(e.target.value)}/><br />
// //         <input type="email" placeholder="description" onChange={(e)=>setDescription(e.target.value)}/> <br />

// //     <form class="space">
// //         <input type="text" placeholder="Name"/>   <br />
// //         <input type="text" placeholder="price"/> <br />
// //         <input type="text" placeholder="No of Products"/> <br />
// //         <input type="text" placeholder="Description"/> <br />

        
// //         <button type="submit">Add Product</button> 
// //         <div class="sign">
          
// //         </div>
// //     </form>
// //     </form>
// // </div>

// // </div>



      
// //     </>
// //   )
// // }

// // export default Addproducts
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './addproduct.css'; // 

// // function Addproducts() {
// //   const [name, setName] = useState('');
// //   const [price, setPrice] = useState('');
// //   const [noOfProducts, setNoofProducts] = useState('');
// //   const [description, setDescription] = useState('');

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent the default form submission behavior (page reload)

// //     const productData = { name, price, noOfProducts, description };

// //     try {
// //       const response = await axios.post('http://localhost:8000/addProduct', productData);
// //       console.log(response);
// //       // You can handle success feedback here (e.g., clearing form fields or displaying a message)
// //     } catch (error) {
// //       console.log('Error adding product:', error);
// //     }
// //   };

// //   return (
// //     <>
// //       <nav className="navbar">
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

// //       <div className="form-container">
// //         <div className="card">
// //           <h1>Add New Product</h1>
// //           <form className="space" onSubmit={handleSubmit}>
// //             <input 
// //               type="text" 
// //               placeholder="Name" 
// //               value={name}
// //               onChange={(e) => setName(e.target.value)} 
// //             /> 
// //             <br />
// //             <input 
// //               type="number" 
// //               placeholder="Price" 
// //               value={price}
// //               onChange={(e) => setPrice(e.target.value)} 
// //             /> 
// //             <br />
// //             <input 
// //               type="number" 
// //               placeholder="No of Products" 
// //               value={noOfProducts}
// //               onChange={(e) => setNoofProducts(e.target.value)} 
// //             /> 
// //             <br />
// //             <input 
// //               type="text" 
// //               placeholder="Description" 
// //               value={description}
// //               onChange={(e) => setDescription(e.target.value)} 
// //             /> 
// //             <br />

// //             <button type="submit" className="submit-btn">Add Product</button>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Addproducts;
// import React, { useState } from 'react';
// import axios from 'axios';

// function Addproducts() {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [count, setNoofProducts] = useState('');
//   const [description, setDescription] = useState('');
//   const salonId=localStorage.getItem("salonobjectid")
//   console.log(salonId);
  

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior (page reload)
//     const body = { 
//       products: [
//         {
//           name,
//           price,
//           count,
//           description
//         }
//       ]
//     };
//     try {
//       console.log('Request body:', body);
//       const response = await axios.post(`http://localhost:8000/salons/${salonId}/products`, body,  { headers: { 'Content-Type': 'application/json' } });
//       console.log(response);
//       // You can handle success feedback here (e.g., clearing form fields or displaying a message)
//       alert(response.data.message)
//     } catch (error) {
//       console.log('Error adding product:', error);
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
//           <h1 style={styles.heading}>Add New Product</h1>
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <input 
//               type="text" 
//               placeholder="Name" 
//               value={name}
//               onChange={(e) => setName(e.target.value)} 
//               style={styles.input} 
//             /> 
//             <br />
//             <input 
//               type="number" 
//               placeholder="Price" 
//               value={price}
//               onChange={(e) => setPrice(e.target.value)} 
//               style={styles.input} 
//             /> 
//             <br />
//             <input 
//               type="number" 
//               placeholder="No of Products" 
//               value={count}
//               onChange={(e) => setNoofProducts(e.target.value)} 
//               style={styles.input} 
//             /> 
//             <br />
//             <input 
//               type="text" 
//               placeholder="Description" 
//               value={description}
//               onChange={(e) => setDescription(e.target.value)} 
//               style={styles.input} 
//             /> 
//             <br />

//             <button type="submit" style={styles.button}>Add Product</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#8a6330b9', // Dark navbar background
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
//   button: {
//     backgroundColor: '#A67C52',  // Darker beige color for button
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

// export default Addproducts;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Addproducts() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [count, setNoofProducts] = useState('');
  const [description, setDescription] = useState('');
  const salonId = localStorage.getItem('salonobjectid');
 const navigate = useNavigate()
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      products: [
        {
          name,
          price,
          count,
          description,
        },
      ],
    };

    try {
      console.log('Request body:', body);
      const response = await axios.post(
        `https://saloon-management-server.onrender.com/salons/${salonId}/products`,
        body,
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response);
      alert(response.data.message);
      navigate('/viewproducts')
    } catch (error) {
      console.log('Error adding product:', error);
    }
  };

  return (
    <>
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
          <Link to="/salonhome" className="home-icon" style={styles.homeIcon}>
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
          <h1 style={styles.heading}>Add New Product</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <br />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
            />
            <br />
            <input
              type="number"
              placeholder="No of Products"
              value={count}
              onChange={(e) => setNoofProducts(e.target.value)}
              style={styles.input}
            />
            <br />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.input}
            />
            <br />

            <button type="submit" style={styles.button}>Add Product</button>
          </form>
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
    textDecoration: 'none',
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
    marginBottom: '10px',
    outline: 'none',
    transition: 'border-color 0.3s',
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

export default Addproducts;


