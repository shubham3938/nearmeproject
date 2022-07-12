
import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import InviteUser from '../components/InviteUser';
import ChatUser from '../components/ChatUser';

export default function App() {
return (
<ScrollView style={{flexDirection:"column",width:"100%",padding:10,backgroundColor:"white"}}>
    {/* <Text>Chat Screen</Text> */}
    <InviteUser/>
    <ChatUser/> 
    <ChatUser/>
    <ChatUser/>
    <InviteUser/>
    <InviteUser/>
    <InviteUser/>
</ScrollView>

)
}

// ----------------------------------------------------------------------------------
