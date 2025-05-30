// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function SalonViewFeedback() {
//   // Get salonId from URL
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//      const salonId =localStorage.getItem('salonobjectid')
//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/feedback/${salonId}`);
//         console.log(response);
        
//         setFeedbacks(response.data);
//       } catch (err) {
//         setError('Failed to load feedback.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeedback();
//   }, [salonId]);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>

//       {loading && <p>Loading feedback...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {!loading && !error && feedbacks.length === 0 && <p>No feedback available.</p>}

//       <div className="space-y-4">
//         {feedbacks.map((feedback) => (
//           <div key={feedback._id} className="p-4 border rounded-lg shadow-md">
//             <p><strong>Email:</strong> {feedback.email || 'Anonymous'}</p>
//             <p><strong>Rating:</strong> {feedback.rating} ⭐</p>
//             <p><strong>Comment:</strong> {feedback.comment || 'No comment provided'}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SalonViewFeedback;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SalonViewFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const salonId = localStorage.getItem('salonobjectid');

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`https://saloon-management-server.onrender.com/feedback/${salonId}`);
        console.log(response);
        setFeedbacks(response.data);
      } catch (err) {
        setError('Failed to load feedback.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [salonId]);

  return (
    <>
      {/* Navbar Section */}
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

      {/* Main Content */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Customer Feedback</h2>

          {loading && <p>Loading feedback...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading && !error && feedbacks.length === 0 && <p>No feedback available.</p>}

          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div key={feedback._id} style={styles.feedbackCard}>
                <p><strong>Email:</strong> {feedback.email || 'Anonymous'}</p>
                <p><strong>Rating:</strong> {feedback.rating} ⭐</p>
                <p><strong>Comment:</strong> {feedback.comment || 'No comment provided'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Styles
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
    minHeight: '100vh',
    backgroundColor: '#f4f7fc',
    paddingTop: '70px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  feedbackCard: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  },
};

export default SalonViewFeedback;
