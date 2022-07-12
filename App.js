import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {SignUp,MainScreen,SignIn,SideNavbar,ChatUser, WhatsappInt} from './components/routers/index'
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
return (
        <NavigationContainer>
        <Stack.Navigator>
                      <Stack.Screen name="Main Screen" component={MainScreen} />
                      <Stack.Screen name="SignIn" component={SignIn} />
                      <Stack.Screen name="SignUp" component={SignUp} />
                      <Stack.Screen name="SideNavbar" component={SideNavbar}   
                      options={{headerShown:false}}
                      />


        </Stack.Navigator>
        </NavigationContainer>

    
        // <SideNavbar/>
    
)
}
