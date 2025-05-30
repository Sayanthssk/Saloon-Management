// import React from 'react'

// function ViewUsers() {
//   return (
//     <div>
//       <div>
//         <table class="table">
//     <thead>
//       <tr>
//         <th scope="col">name</th>
//         <th scope="col">phone number</th>
//         <th scope="col">Email id</th>
//         <th scope="col"></th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th scope="row">soorya</th>
//         <td>243532524</td>
//         <td>soorya@gmail.com</td>
//       </tr>
     
//     </tbody>
//   </table>
//     </div>
//     </div>
//   )
// }

// export default ViewUsers
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://saloon-management-server.onrender.com/users"); // Adjust backend URL if needed
      console.log(response);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>USERS</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>UserName</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>
                  <img
                    src={`https://saloon-management-server.onrender.com/uploads/${user.image}` || "https://via.placeholder.com/50"}
                    alt={user.username}
                    className="profile-image"
                  />
                </td>
                <td>{user.username}</td>
                <td>{user.phonenumber}</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No users found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }

        .table {
          width: 80%;
          margin: 50px auto;
          border-collapse: collapse;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .table th, .table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .table th {
          background-color: #A67C52;
          color: black;
          font-size: 18px;
        }

        .table td {
          font-size: 16px;
          color: #333;
        }

        .table tr:hover {
          background-color: #f1f1f1;
        }

        .profile-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }

        .view-button {
          padding: 8px 16px;
          background-color: #A67C52;
          color: black;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .view-button:hover {
          background-color: #e0e0b0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}

export default ViewUsers;
