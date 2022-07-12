
import React ,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import InviteUser from '../components/InviteUser';
import ChatUser from '../components/ChatUser';


export default function App() {
    const [phone,setPhone] = useState([
 
       {
        mobile : "8766824323",
       },
       {
        mobile : "7972087877",
       },
       {
        mobile : "9834327741",
       },
       {
        mobile : "9325661017",
       },
       {
        mobile : "9921111253",
       },
    ]);

return (
<FlatList
data = {phone}
keyExtractor={(item, index) => index.toString()}
renderItem = {(element)=>{
return(
    // <Text>{element.item.mobile}</Text>
    <ChatUser phoneNo={element.item.mobile}/>
     
)    
}}
/>



// {/* <ScrollView style={{flexDirection:"column",width:"100%",padding:10,backgroundColor:"white"}}> */}
    // {/* <Text>Chat Screen</Text> */}
    // <InviteUser/>
    // <ChatUser/> 
    // <ChatUser/>
    // <ChatUser/>
    // <InviteUser/>
    // <InviteUser/>
    // <InviteUser/>
 // </ScrollView>  

)
}

// ----------------------------------------------------------------------------------
