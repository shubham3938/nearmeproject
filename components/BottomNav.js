import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Chatlist from '../components/Chatlist';
import GoogleMap from '../components/GoogleMap';
import About from '../components/About';
import ChatUser from '../components/ChatUser';
import ContactList from '../components/ContactList';

const Tab = createBottomTabNavigator();

function BottomNav() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor:"white", },  
                // tabBarActiveBackgroundColor:"white",  "#5800FF"  "#8BDB81" #FF7BA9
                tabBarActiveTintColor: "#8A2EFF",
                tabBarInactiveTintColor: "#777777",
                // tabBarActiveBackgroundColor:"#8A2EFF",
                tabBarActiveBackgroundBorderRadius:30,
                tabBarItemStyle: {
                    // borderTopRightRadius: 50,
                    // borderTopLeftRadius: 50,
                    // borderBottomRightRadius: 50,
                    // borderBottomLeftRadius: 50,
                    
                    
                  },
            }}
        >
            <Tab.Screen name="Map" component={GoogleMap}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="earth" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name="Chat" component={Chatlist}

                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat-plus" color={color} size={size} />
                    ),
                }}
            />
           
           <Tab.Screen name="About" component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen name="ContactList" component={ContactList}
                options={{
                    tabBarLabel: 'Contact list',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="phone" color={color} size={size} />
                    ),
                }}
            />
             {/* <Tab.Screen name="whatsapp" component={WhatsappInt}
                options={{
                    tabBarLabel: 'MainScreen',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="login" color={color} size={size} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
}

export default BottomNav