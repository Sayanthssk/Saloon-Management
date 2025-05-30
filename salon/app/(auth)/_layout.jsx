import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Auth_layout = () => {
  return (
   <Stack>
    <Stack.Screen name="SigninScreen"/>
    <Stack.Screen name="Signupscreen"/>
   </Stack>
  )
}

export default Auth_layout

const styles = StyleSheet.create({})