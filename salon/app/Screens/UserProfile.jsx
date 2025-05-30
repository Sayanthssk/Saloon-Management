// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Image } from "react-native";
// import axios from "axios";
// import * as ImagePicker from "expo-image-picker";
// import instance from "../Instance";

// const UserProfile = ({ userId }) => {
//   const [user, setUser] = useState(null);
//   const [username, setUsername] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   const fetchUserDetails = async () => {
//     try {
//       const response = await instance.get(`/user/${userId}`);
//       const userData = response.data;
//       setUser(userData);
//       setUsername(userData.username);
//       setPhonenumber(userData.phonenumber);
//       setImage(userData.image ? { uri: userData.image } : null);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       setError("Failed to load user details.");
//     }
//   };

//   const pickImage = async () => {
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== "granted") {
//       alert("Permission to access images is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0]);
//     }
//   };

//   const handleUpdate = async () => {
//     setLoading(true);
//     setError("");

//     const formData = new FormData();
//     formData.append("username", username);
//     formData.append("phonenumber", phonenumber);

//     if (image && image.uri) {
//       formData.append("image", {
//         uri: image.uri,
//         name: image.uri.split("/").pop(),
//         type: "image/jpeg",
//       });
//     }

//     try {
//       await instance.put(`/userpro/${userId}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
   
      
//       alert("Profile updated successfully!");
//       fetchUserDetails(); 
//     } catch (error) {
//       console.error("Update error:", error);
//       setError("Failed to update profile.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Edit Profile</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         keyboardType="phone-pad"
//         value={phonenumber}
//         onChangeText={setPhonenumber}
//       />

//       <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
//         <Text style={styles.imagePickerText}>
//           {image ? "Change Image" : "Select Profile Image"}
//         </Text>
//       </TouchableOpacity>

//       {image && <Image source={{ uri: image.uri }} style={styles.profileImage} />}

//       {loading ? (
//         <ActivityIndicator size="large" color="#007BFF" />
//       ) : (
//         <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
//           <Text style={styles.updateButtonText}>Update Profile</Text>
//         </TouchableOpacity>
//       )}

//       {error && <Text style={styles.errorText}>{error}</Text>}
//     </View>
//   );
// };

// export default UserProfile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#CCC",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 15,
//     backgroundColor: "#FFF",
//   },
//   imagePicker: {
//     backgroundColor: "#f0f0f0",
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   imagePickerText: {
//     color: "#007BFF",
//     fontSize: 16,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     alignSelf: "center",
//     marginVertical: 10,
//   },
//   updateButton: {
//     backgroundColor: "#007BFF",
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   updateButtonText: {
//     color: "#FFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     fontSize: 16,
//     marginTop: 10,
//   },
// });




// import React, { useEffect, useState } from "react";
// import { StyleSheet, Text, View, TextInput, Image } from "react-native";
// import instance from "../Instance";

// const UserProfile = ({ userId }) => {
//   const [user, setUser] = useState(null);
//   const [username, setUsername] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [image, setImage] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   const fetchUserDetails = async () => {
//     try {
//       const response = await instance.get(`/user/${userId}`);
//       const userData = response.data;
//       setUser(userData);
//       setUsername(userData.username);
//       setPhonenumber(userData.phonenumber);
//       setImage(userData.image ? { uri: userData.image } : null);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//       setError("Failed to load user details.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>User Profile</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         editable={false}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Phone Number"
//         keyboardType="phone-pad"
//         value={phonenumber}
//         editable={false}
//       />

//       {image && <Image source={{ uri: `http://192.168.1.12:8000/uploads/${image.uri}` }} style={styles.profileImage} />}

//       {error && <Text style={styles.errorText}>{error}</Text>}
//     </View>
//   );
// };

// export default UserProfile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#CCC",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     marginBottom: 15,
//     backgroundColor: "#FFF",
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     alignSelf: "center",
//     marginVertical: 10,
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     fontSize: 16,
//     marginTop: 10,
//   },
// });




import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import instance from "../Instance";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await instance.get(`/user/${userId}`);
      const userData = response.data;
      setUser(userData);
      setUsername(userData.username);
      setPhonenumber(userData.phonenumber);
      setImage(userData.image ? { uri: `http://192.168.1.12:8000/uploads/${userData.image}` } : null);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setError("Failed to load user details.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>User Profile</Text>

      <View style={styles.profileCard}>
        {image && <Image source={image} style={styles.profileImage} />}
        <Text style={styles.nameText}>{username}</Text>
        <Text style={styles.phoneText}>{phonenumber}</Text>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  profileCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    width: "100%",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  phoneText: {
    fontSize: 18,
    color: "#666",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
  },
});
