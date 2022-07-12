import { StatusBar } from 'expo-status-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from '../components/Home';
import SettingsScreen from './Profile';
import GoogleMap from '../components/GoogleMap';
import SignUp from './SignUp';
import BottomNav from '../components/BottomNav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();

function SideNavbar() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"

        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
            headerShown: false,
            // paddingTop:10,
          },

          headerStyle: {
            // backgroundColor: "transparent",
            height: 60,

          },

          headerTintColor: '#8A2EFF',    // Menu button icon 
          headerTitleStyle: { color: 'transparent',backgroundColor:"transparent" }, // header title color
          drawerActiveBackgroundColor: '#8A2EFF',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'black',
          // overlayColor: 'transparent',
          // drawerInactiveBackgroundColor: "white",
          //   labelStyle:{
          //     marginLeft:5
          //   }

        }}>
        <Drawer.Screen name="Home" component={BottomNav}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen name="Profile" component={SettingsScreen} 
                  options={{
                    drawerIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                  }}
                  />
        {/* <Drawer.Screen name="Map" component={GoogleMap} /> */}
        <Drawer.Screen name="SignUp" component={SignUp} 
                  options={{
                    drawerIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="login" color={color} size={size} />
                    ),
                    
                  }}
                  />
      </Drawer.Navigator>
    // </NavigationContainer>

  );
}

export default SideNavbar