// import React from 'react'

// function Assign() {
//   return (
//     <div><table class="table">
//     <thead>
//       <tr>
//         <th scope="col">Service name</th>
//         <th scope="col">Beautician</th>
//         <th scope="col">User</th>
//         <th scope="col"></th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">soorya</th>
//         <td>243532524</td>
//         <td>chevayur</td>
      
//         <td><button type="button" class="btn btn-secondary">Assign</button></td>
//       </tr>
     
//     </tbody>
//   </table>

      
//     </div>
//   )
// }

// export default Assign
// import React from 'react';

// function Assign() {
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Assign Beautician</h2>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>Service name</th>
//             <th style={styles.th}>Beautician</th>
//             <th style={styles.th}>User</th>
//             <th style={styles.th}></th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr style={styles.tr}>
//             <th scope="row" style={styles.td}>Facial</th>
//             <td style={styles.td}>Rihana</td>
//             <td style={styles.td}>Edlin</td>
//             <td>
//               <button style={styles.btn}>Assign</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '1000px',
//     margin: '0 auto',
//     backgroundColor: '#fff',
//     padding: '30px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     fontSize: '24px',
//     color: '#333',
//     marginBottom: '20px',
//     textAlign: 'center',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '20px',
//     borderRadius: '8px',
//     overflow: 'hidden',
//   },
//   th: {
//     backgroundColor: '#D2B48C',  // Darker beige color for table header
//     color: '#333',
//     padding: '12px',
//     textAlign: 'center',
//   },
//   td: {
//     padding: '12px',
//     textAlign: 'center',
//     fontSize: '14px',
//   },
//   tr: {
//     backgroundColor: '#f9f9f9',
//     transition: 'background-color 0.3s ease',
//   },
//   trHover: {
//     backgroundColor: '#e2e6ea',
//   },
//   btn: {
//     backgroundColor: '#D2B48C',  // Darker beige color for button
//     color: 'white',
//     padding: '8px 16px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'background-color 0.3s ease',
//   },
//   btnHover: {
//     backgroundColor: '#C19A6B',  // Even darker beige for hover effect
//   },
// };

// export default Assign;
import React from 'react';

function Assign() {
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
        </div>
      </nav>

      <div style={styles.container}>
        <h2 style={styles.heading}>Assign Beautician</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Service name</th>
              <th style={styles.th}>Beautician</th>
              <th style={styles.th}>User</th>
              <th style={styles.th}></th>
            </tr>
          </thead>
          <tbody>
            <tr style={styles.tr}>
              <th scope="row" style={styles.td}>Facial</th>
              <td style={styles.td}>Rihana</td>
              <td style={styles.td}>Edlin</td>
              <td>
                <button style={styles.btn}>Assign</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#8a6330b9', // Dark navbar background
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
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    backgroundColor: '#C6A16D',  // Darker beige color for table header
    color: '#333',
    padding: '12px',
    textAlign: 'center',
  },
  td: {
    padding: '12px',
    textAlign: 'center',
    fontSize: '14px',
  },
  tr: {
    backgroundColor: '#f9f9f9',
    transition: 'background-color 0.3s ease',
  },
  trHover: {
    backgroundColor: '#e2e6ea',
  },
  btn: {
    backgroundColor: '#C6A16D',  // Darker beige color for button
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
  btnHover: {
    backgroundColor: '#C6A16D',  // Even darker beige for hover effect
  },
};

export default Assign;


