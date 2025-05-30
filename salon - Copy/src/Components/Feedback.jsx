// import React from 'react'

// function Feedback() {
//   return (
//     <div>
//           <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">users</th>
//       <th scope="col">Feedback</th>
//       <th scope="col">Star rating</th>
//       <th scope="col">Data</th>
      
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">soorya</th>
//       <td>good</td>
//       <td>***</td>
//       <td>2/11/24</td>
      
    

//     </tr>
   
//   </tbody>
// </table>
      
//     </div>
//   )
// }

// export default Feedback
import React from 'react';

function Feedback() {
  return (
    <>
      {/* Navbar with dark beige color */}
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <a style={styles.navbarBrand} href="#">
            
            
            <span>Salon Management</span>
          </a>
        </div>
      </nav>

      {/* Feedback table */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>User Feedback</h1>

          {/* Table for feedbacks */}
          <table className="table" style={styles.table}>
            <thead>
              <tr>
                <th scope="col">Users</th>
                <th scope="col">Feedback</th>
                <th scope="col">Star Rating</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Soorya</th>
                <td>Good</td>
                <td>***</td>
                <td>2/11/24</td>
              </tr>
            </tbody>
          </table>

          {/* Button */}
          <button style={styles.button}>Add Feedback</button>
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
  navbarImage: {
    marginRight: '10px',
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

export default Feedback;
