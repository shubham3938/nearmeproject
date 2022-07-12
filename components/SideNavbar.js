import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Text, View } from "react-native";

import { AuthContext } from "../Context/authContext";
import BottomNav from "../components/BottomNav";
import GoogleMap from "../components/GoogleMap";
import HomeScreen from "../components/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "../components/About";
import { StatusBar } from "expo-status-bar";

const Drawer = createDrawerNavigator();

function SideNavbar() {
  const { getUser, signOut } = useContext(AuthContext);
  const LogOut = () => {
    signOut();
    // console.log("logout called");
  };
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
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

        headerTintColor: "#8A2EFF", // Menu button icon
        headerTitleStyle: {
          color: "transparent",
          backgroundColor: "transparent",
        }, // header title color
        drawerActiveBackgroundColor: "#8A2EFF",
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "black",

      }}
      drawerContent={(props) => {
        return (
          //logOut logic code start
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              options={{
                drawerIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
                ),
              }}
              onPress={LogOut}
            />
          </DrawerContentScrollView>
          //logOut logic code stop
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomNav}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      {/* <Drawer.Screen name="Map" component={GoogleMap} /> */}
      {/* <Drawer.Screen
        name="Logout"
        component={SignUp}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      /> */}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}

export default SideNavbar;
