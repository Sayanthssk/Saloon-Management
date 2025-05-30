// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Tabs } from 'expo-router'

// const tab_layout = () => {
//   return (
//   <Tabs>
//     <Tabs.Screen name="Home"/>
//   </Tabs>
//   )
// }

// export default tab_layout

// const styles = StyleSheet.create({})
// import { StyleSheet } from 'react-native';
// import React from 'react';
// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Import the icon library

// const TabLayout = () => {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         name="Home"
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//           tabBarLabel: 'Home',
//         }}
//       />
//     </Tabs>
//   );
// };

// export default TabLayout;

// const styles = StyleSheet.create({});
// import { StyleSheet } from 'react-native';
// import React from 'react';
// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Import the icon library

// const TabLayout = () => {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarStyle: { backgroundColor: '#A67C52' }, // Brown color for the tab bar
//         tabBarActiveTintColor: 'white', // White for active tab icons and labels
//         tabBarInactiveTintColor: '#f4e6d1', // Lighter brown for inactive tabs
//       }}
//     >
//       <Tabs.Screen
//         name="Home"
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//           tabBarLabel: 'Home',
//         }}
//       />
// <Tabs.Screen
//         name="Appointments"
        
//       />
     

//     </Tabs>
//   );
// };

// export default TabLayout;

// const styles = StyleSheet.create({});
import { StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import the icon library

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#A67C52' }, // Brown color for the tab bar
        tabBarActiveTintColor: 'white', // White for active tab icons and labels
        tabBarInactiveTintColor: '#f4e6d1', // Lighter brown for inactive tabs
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="Appointments"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          tabBarLabel: 'Appointments',
        }}
      />
<Tabs.Screen
  name="profile"
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="contacts" color={color} size={size} />
    ),
    tabBarLabel: 'Profile',
  }}
/>
       


    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});

