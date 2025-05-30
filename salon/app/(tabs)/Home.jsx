import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Salonhome from '../Screens/Salonhome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [userId, setUserId] = useState(null);
  const [username,setusername]= useState()
  const[image,setImage]=useState()


  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        const storedUsername = await AsyncStorage.getItem('username');
        const storedImage = await AsyncStorage.getItem('image');
        if (storedUserId && storedUsername) {
          setUserId(storedUserId);  
          setusername(storedUsername)
          setImage(storedImage)
        } else {
          console.log('No userId found');
        }
      } catch (error) {
        console.error('Error fetching userId from AsyncStorage:', error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <View style={styles.container}>
      {userId ? (
      <Salonhome userId={userId} username={username} image={image} /> 
      ) : (
        <Text>Loading user data...</Text>  
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height:"100%"
  }
 
});

export default Home;