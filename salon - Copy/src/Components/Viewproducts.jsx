// // import React from 'react'

// // function Viewproducts() {
// //   return (
// //     <>
// //       {/* Navbar with dark beige color */}
// //     <nav style={styles.navbar}>
// //         <div style={styles.navbarContainer}>
// //           <a style={styles.navbarBrand} href="#">
            
            
// //             <span>Salon Management</span>
// //           </a>
// //         </div>
// //       </nav>

// //       {/* Feedback table */}
// //       <div style={styles.container}>
// //         <div style={styles.card}>
// //           <h1 style={styles.heading}>view products</h1>

// //           {/* Table for feedbacks */}
// //           <table className="table" style={styles.table}>
// //             <thead>
// //               <tr>
// //                 <th scope="col">product name</th>
// //                 <th scope="col">Price</th>
// //                 <th scope="col">No. of Produts</th>
// //                 <th scope="col">Description"</th>
                
                
// //               </tr>
// //             </thead>
// //             <tbody>
// //               <tr>
// //                 <th scope="row">loreal</th>
// //                 <td>100</td>
// //                 <td>3</td>
// //                 <td>shampoo</td>
// //               </tr>
// //             </tbody>
// //           </table>

// //           {/* Button */}
          
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // const styles = {
// //   navbar: {
// //     backgroundColor: '#A67C52', // Darker beige color for navbar background
// //     padding: '10px 20px',
// //     textDecoration: 'none',
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
// //     display: 'flex',
// //     alignItems: 'center',
// //     textDecoration: 'none', // Removed underline from navbar heading
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
// //     maxWidth: '700px',
// //     textAlign: 'center',
// //   },
// //   heading: {
// //     fontSize: '24px',
// //     color: '#333',
// //     marginBottom: '20px',
// //   },
// //   table: {
// //     width: '100%',
// //     borderCollapse: 'collapse',
// //     marginBottom: '20px',
// //     textAlign: 'left',
// //   },
// //   tableTh: {
// //     backgroundColor: '#f2f2f2',
// //     padding: '12px',
// //     border: '1px solid #ddd',
// //     color: '#333',
// //   },
// //   tableTd: {
// //     padding: '12px',
// //     border: '1px solid #ddd',
// //     color: '#333',
// //   },
// //   button: {
// //     backgroundColor: '#A67C52',  // Darker beige color for button
// //     color: '#fff',
// //     padding: '12px 20px',
// //     border: 'none',
// //     borderRadius: '4px',
// //     fontSize: '16px',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s ease',
// //     marginTop: '20px',
// //   },
        

      
    
  
// // }
    
  


// // export default Viewproducts;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Viewproducts() {
//   const [products, setProducts] = useState([]); // State to hold the products
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const salonId = localStorage.getItem('salonobjectid')
//   console.log(salonId);
  

//   useEffect(() => {
//     // Fetch products from the API
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/viewsalondata/${salonId}`); // Make an API call
//         console.log(response);
        
//         setProducts(response.data.data.products); // Set the products data
//         setLoading(false); // Set loading to false after data is fetched
//       } catch (err) {
//         setError('Error fetching products');
//         setLoading(false); // Set loading to false on error
//       }
//     };

//     fetchProducts();
//   }, [salonId]); // Re-fetch if salonid changes

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

//       {/* Feedback table */}
//       <div style={styles.container}>
//         <div style={styles.card}>
//           <h1 style={styles.heading}>View Products</h1>

//           {/* Table for products */}
//           <table className="table" style={styles.table}>
//             <thead>
//               <tr>
//                 <th scope="col">Product Name</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">No. of Products</th>
//                 <th scope="col">Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <tr key={product._id}> {/* Assuming product has a unique _id */}
//                     <th scope="row">{product.name}</th>
//                     <td>{product.price}</td>
//                     <td>{product.count}</td> {/* Assuming quantity is the field for stock */}
//                     <td>{product.description}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4">No products found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Button (if needed) */}
//           <Link to={'/addproducts'}>
//           <button style={styles.button}>Add New Product</button></Link>
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

// export default Viewproducts;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewproducts() {
  const [products, setProducts] = useState([]); // State to hold the products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const salonId = localStorage.getItem('salonobjectid');

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://saloon-management-server.onrender.com/viewsalondata/${salonId}`);
        console.log(response);

        setProducts(response.data.data.products);
        setLoading(false);
      } catch (err) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [salonId]);

  // Show loading or error if applicable
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* Navbar with Home Icon */}
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

      {/* Product Table */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>View Products</h1>

          {/* Table for products */}
          <table className="table" style={styles.table}>
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">No. of Products</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}> {/* Assuming product has a unique _id */}
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.count}</td>
                    <td>{product.description}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No products found</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Add Product Button */}
          <Link to={'/addproducts'}>
            <button style={styles.button}>Add New Product</button>
          </Link>
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
  button: {
    backgroundColor: '#A67C52',  // Darker beige color for button
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
  },
};

export default Viewproducts;
