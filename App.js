import { StyleSheet, Text, View } from "react-native";

import React from 'react';
// import {View,Text,StyleSheet} from 'react-native';
import {SignUp,MainScreen,SignIn,SideNavbar,ChatUser, WhatsappInt} from './components/routers/index'
// import { createStackNavigator } from '@react-navigation/stack';


import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./Context/authContext";
// import { Provider as AuthProvider } from "./state/studentList";
import { Provider as LoadingProvider } from "./state/Loading";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import React from "react";
import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();
const App = () => {
  const initialLoginState = { userToken: null };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
        };
      case "LOGIN":
        return {
          ...prevState,
          userToken: action.token,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userToken: null,
        };
      case "REGISTER":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      default:
        return prevState;
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = foundUser.token;
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({
          type: "LOGIN",
          token: userToken,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {}
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      getUser: () => {
        try {
          // await AsyncStorage.removeItem('userToken');
          dispatch({ type: "GETUSER" });
        } catch (e) {
          console.log(e);
        }
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    []
  );
  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator>
          {loginState.userToken !== null ? (
            <Stack.Group>
              <Stack.Screen
                name="SideNavbar"
                component={SideNavbar}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="Main Screen" component={MainScreen} />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>

    // <SideNavbar/>
  );
};
export default () => {
  return (
    <LoadingProvider>
      <App />
    </LoadingProvider>
  );
};
