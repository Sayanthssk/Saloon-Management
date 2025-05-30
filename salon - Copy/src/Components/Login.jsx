// import React, { useState } from 'react'
// import '../css/login.css'
// import axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'
// function Login() {
//    const [username,setUserName]=useState('')
//     const [password,setpassword]=useState('')
//     const navigate=useNavigate()

//     const handleSubmit =async(e)=>{
//       e.preventDefault()
//       const body = {username,password}
     
//       try {
//           const response = await axios.post('http://localhost:8000/login',body)
//       console.log(response);
//       const logindata=response.data.login
//       console.log(logindata);
//       if(logindata.role=='salon'){

//         localStorage.setItem('salonLoginId',logindata._id)
//         navigate('/salonhome')
//       }
//       if(logindata.role=="admin"){
//         navigate('/adminhome')
//       } 
//       } catch (error) {
//           console.log(error,'error in service');
//           alert(error.response.data.message)
          
//       }
 
//    }

//   return (
//     <>

// <nav class="navbar bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">
//       <img src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
//       LOGIN PAGE
//     </a>
//   </div>
  
// </nav>




// <div class="nashfa" >
//         <div class="card">
//             <h1>Login</h1>

//             {/* <div class="divider"></div> */}
//             <form class="space" onSubmit={handleSubmit}>
//         <input type="text" placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/>   <br />
//         <input type="text" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/> <br />

    
       
//         <button type="submit">Login</button> 
//         <div class="sign">
//             <Link to={'/salonregistration'}>
//             <p>Not a member? <a href="#">sign Up</a></p>
//             </Link>
//         </div>
//     </form>
    
// </div>

// </div>



      
//     </>
//   )
// }

// export default Login
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const body = { username, password };

//     try {
//       const response = await axios.post('http://localhost:8000/login', body);
//       console.log(response);
//       const logindata = response.data.login;
//       console.log(logindata);
//       if (logindata.role === 'admin') {
//         navigate('/adminhome');
//       }else{
//       if(logindata.verify){
//       if (logindata.role === 'salon') {
//         localStorage.setItem('salonLoginId', logindata._id);
//         navigate('/salonhome');
//       } 

//     }else{
//       alert('salon not verified')
//     }
//   }
//     } catch (error) {
//       console.error(error, 'error in service');
//       alert(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div>
//       <nav style={styles.navbar}>
//         <div style={styles.navbarContainer}>
//           <a href="#" style={styles.navbarBrand}>
//             <img
//               src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
//               alt="Logo"
//               width="50"
//               height="50"
//               style={styles.logo}
//             />
//             LOGIN PAGE
//           </a>
//         </div>
//       </nav>

//       <div style={styles.container}>
//         <div style={styles.card}>
//           <h1 style={styles.heading}>Login</h1>
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <input
//               type="text"
//               placeholder="User Name"
//               onChange={(e) => setUserName(e.target.value)}
//               style={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.input}
//             />
//             <button type="submit" style={styles.button}>Login</button>
//             <div style={styles.signUp}>
//               <Link to="/salonregistration" style={styles.link}>
//                 <p>Not a member? <span style={styles.highlight}>Sign Up</span></p>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   navbar: {
//     backgroundColor: '#8a6330b9',
//     padding: '10px 20px',
//     position: 'fixed',
//     width: '100%',
//     top: 0,
//     zIndex: 1000,
//   },
//   navbarContainer: {
//     display: 'flex',
//     justifyContent: 'center',
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
//   logo: {
//     marginRight: '10px',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f4f7fc',
//     paddingTop: '70px', // Avoid navbar overlap
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
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     marginBottom: '15px',
//     outline: 'none',
//   },
//   button: {
//     backgroundColor: '#A67C52',
//     color: '#fff',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     width: '100%',
//   },
//   signUp: {
//     marginTop: '15px',
//   },
//   link: {
//     textDecoration: 'none',
//   },
//   highlight: {
//     color: '#8a6330b9',
//     fontWeight: 'bold',
//   },
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { username, password };

    try {
      const response = await axios.post('http://localhost:8000/login', body);
      console.log(response);
      const logindata = response.data.login;
      console.log(logindata);
      if (logindata.role === 'admin') {
        navigate('/adminhome');
      } else {
        if (logindata.verify) {
          if (logindata.role === 'salon') {
            localStorage.setItem('salonLoginId', logindata._id);
            navigate('/salonhome');
          }
        } else {
          alert('Salon not verified');
        }
      }
    } catch (error) {
      console.error(error, 'Error in service');
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={styles.background}>
      <nav style={styles.navbar}>
        <div style={styles.navbarContainer}>
          <a href="#" style={styles.navbarBrand}>
            <img
              src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
              alt="Logo"
              width="50"
              height="50"
              style={styles.logo}
            />
          SIGNIN PAGE
          </a>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Login</h1>
          <div style={styles.innerCard}>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
              <button type="submit" style={styles.button}>Login</button>
              <div style={styles.signUp}>
                <Link to="/salonregistration" style={styles.link}>
                  <p>Not a member? <span style={styles.highlight}>Sign Up</span></p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: "url('https://img.freepik.com/premium-photo/empty-hair-salon-studio-luxury-beauty-cosmetic-makeup-product-background-elegant-beauty-salon-interior-ai-generated_1279525-5124.jpg?w=900')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },
  navbar: {
    backgroundColor: '#8a6330b9', // Opaque color
    padding: '5px 20px',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(5px)', // Adds a slight blur effect


  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
  },
  navbarBrand: {
    color: '#fff',
    fontSize: '20px',
    fontWeight: '',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '10px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    paddingTop: '70px',
    position: 'relative',
    zIndex: 1,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  innerCard: {
    backgroundColor: 'rgba(248, 248, 248, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
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
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
    outline: 'none',
  },
  button: {
    backgroundColor: '#A67C52',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  },
  signUp: {
    marginTop: '15px',
  },
  link: {
    textDecoration: 'none',
  },
  highlight: {
    color: '#8a6330b9',
    fontWeight: 'bold',
  },
};

export default Login;


