// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const SigninScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Add login functionality here (e.g., API call)
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   const handleForgotPassword = () => {
//     // Navigate to forgot password logic or screen
//     console.log('Forgot Password pressed');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Login</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity onPress={handleForgotPassword}>
//           <Text style={styles.forgotPassword}>Forgot Password?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SigninScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4f6fc', // Light background color
//   },
//   card: {
//     width: '90%',
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5, // For Android shadow
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   forgotPassword: {
//     color: '#1e90ff',
//     textAlign: 'right',
//     marginBottom: 20,
//     fontSize: 14,
//   },
//   button: {
//     backgroundColor: '#1e90ff',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// // import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const SigninScreen = () => {
//     // const router = useRouter();
    
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

  

//   const handleForgotPassword = () => {
//     console.log('Forgot Password pressed');
//   };

//   // const handleSignUp = () => {
   
//   //   router.navigate('Signupscreen');
//   // };
//   const handleLogin = async () => {
//     try {
//         const response = await axios.post("http://192.168.1.201:8000/salonlogin", {
//             username,
//             password
//         });
//         console.log('====================================');
//         console.log(response);
//         console.log('====================================');

//         if (response.data.message=="Login successful!") {

//             await AsyncStorage.setItem('userId', response.data.login._id);
//             await AsyncStorage.setItem('username', response.data.login.username);
//             await AsyncStorage.setItem('image', response.data.login.image);
//             alert(response.data.message);
          
           
//         } else {
//             alert('Login failed');
//         }
//     } catch (error) {
//         console.error("Error during login:", error);
//     }
// };
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.title}>Login</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

       
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         {/* Sign Up Link */}
//         <TouchableOpacity onPress={handleSignUp}>
//           <Text style={styles.signUp}>Not a user? Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SigninScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f4f6fc',
//   },
//   card: {
//     width: '90%',
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   forgotPassword: {
//     color: 'black',
//     textAlign: 'right',
//     marginBottom: 20,
//     fontSize: 14,
//   },
//   button: {
//     backgroundColor: '#A67C52',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   signUp: {
//     color: 'black',
//     textAlign: 'center',
//     fontSize: 14,
//     marginTop: 10,
//   },
// });

// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const SigninScreen = () => {
//     const router = useRouter();
    
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleForgotPassword = () => {
//         console.log('Forgot Password pressed');
//     };

//     const handleSignUp = () => {
//         router.push('Signupscreen'); // Corrected navigation
//     };

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post("http://192.168.1.201:8000/login", {
//                 username,
//                 password
//             });
// console.log(response.data);

//             if (response.data.message === "Login successful") {
//                 // Storing data in AsyncStorage
//                 await AsyncStorage.setItem('userId', response.data.login._id);
//                 await AsyncStorage.setItem('username', response.data.login.username);
//                 await AsyncStorage.setItem('image', response.data.login.image);
                
//                 alert(response.data.message);
//                 router.replace("Home");
//             } else {
//                 alert('Login failed');
//             }
//         } catch (error) {
//             console.error("Error during login:", error);
//             alert('An error occurred during login. Please try again.');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.card}>
//                 <Text style={styles.title}>Login</Text>

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Username"
//                     value={username}
//                     onChangeText={setUsername}
//                 />

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Password"
//                     secureTextEntry
//                     value={password}
//                     onChangeText={setPassword}
//                 />

//                 <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                     <Text style={styles.buttonText}>Login</Text>
//                 </TouchableOpacity>

//                 {/* Sign Up Link */}
//                 <TouchableOpacity onPress={handleSignUp}>
//                     <Text style={styles.signUp}>Not a user? Sign Up</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// export default SigninScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f4f6fc',
//     },
//     card: {
//         width: '90%',
//         padding: 20,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 5,
//         elevation: 5,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#333',
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     input: {
//         height: 50,
//         borderColor: '#ddd',
//         borderWidth: 1,
//         borderRadius: 8,
//         paddingHorizontal: 15,
//         marginBottom: 15,
//         fontSize: 16,
//         backgroundColor: '#f9f9f9',
//     },
//     button: {
//         backgroundColor: '#A67C52',
//         paddingVertical: 15,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginBottom: 15,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     signUp: {
//         color: 'black',
//         textAlign: 'center',
//         fontSize: 14,
//         marginTop: 10,
//     },
// });


import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../Instance';


const SigninScreen = () => {
    const router = useRouter();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPassword = () => {
        console.log('Forgot Password pressed');
    };

    const handleSignUp = () => {
        router.push('Signupscreen'); // Corrected navigation
    };

    const handleLogin = async () => {
        try {
            const response = await instance.post("/login", {
                username,
                password
            });
            console.log(response.data);

            if (response.data.message === "Login successful") {

                await AsyncStorage.setItem('userId', response.data.login._id);
                await AsyncStorage.setItem('username', response.data.login.username);
                  await AsyncStorage.setItem('image', response.data.login.image);
                
                alert(response.data.message);
                router.replace("Home");
            } else {
                alert('Login failed');
            }
        } catch (error) {
            console.error("Error during login:", error.response.data.message);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <TouchableOpacity onPress={handleSignUp}>
                    <Text style={styles.signUp}>Not a user? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f6fc',
    },
    card: {
        width: '90%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: '#A67C52',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signUp: {
        color: 'black',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
    },
});
