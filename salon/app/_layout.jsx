import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import {SalonProvider} from './salonContext'
import {BookingProvider} from './BookingContext'
import {AppointmentProvider} from './AppointmentContext';

const _Rootlayout = () => {
  return (
<SalonProvider>
  <BookingProvider>
    <AppointmentProvider>
   <Stack>
    <Stack.Screen name="index"  options={{headerShown:false}} />
    <Stack.Screen name="(auth)" options={{headerShown:false}}/>
    <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
    <Stack.Screen name="Screens" options={{headerShown:false}}/>
   </Stack>
   </AppointmentProvider>
   </BookingProvider>
   </SalonProvider>

  )
}

export default _Rootlayout

const styles = StyleSheet.create({})