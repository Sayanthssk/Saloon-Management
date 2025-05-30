import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="Salonhome" options={{headerShown:false}}/>
        <Stack.Screen name="DetailsSalon"/>
        <Stack.Screen name="Payment"/>
        <Stack.Screen name='AppointmentDetails'/>
        <Stack.Screen name='FeedbackScreen'/>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})