import * as React from 'react';

import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import baseUrl from '../api/baseUrl';
import {useState} from 'react';

export default function SignUp({navigation}) {
const [username,setUsername] = useState({data:"", error:false}); 
const [email,setEmail] = useState({data:"", error:false}); 
const [mobile,setMobile] = useState({data:"", error:false});
const [password,setPassword] = useState({data:"", error:false});



const onSubmitMethod = async(username_from_client,email_from_client,mobile_from_client,password_from_client) =>
{ 
// console.log
let body  = 
{
    name:username_from_client,
    email:email_from_client,
    phone:mobile_from_client,
    password:password_from_client
}
console.log({body})
try
{
  
    // post method
    const result = await baseUrl.post("user/signup",body)
    console.log(result.data)
    navigation.push('SideNavbar');
    alert("Your account successfully created.");
    
}catch(E){
    //show Error in toast 
    alert("Dear user","Something went wrong with you.");
    console.log(E)
}
}


const validate = (text) => {
//   console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    setEmail( {data:text,error:true} )
    return false;
  }
  else { 
    // setEmail(text)
    console.log("Email is Correct");
    setEmail( {data:text,error:false} )
  }
}

    return (

        <ScrollView style={styles.scrollbox} >
            <View style={styles.container} >

                <View style={styles.loginbox}>
                    <TextInput
                        //   label="Password"
                        // placeholderTextColor={"black"}
                        placeholder='Username'
                        textAlign="center"
                        right={<TextInput.Icon name="face" />}
                        style={styles.inputbox}
                        onChangeText={(text) => setUsername( {data:text,error:false})}

                    />

                    <TextInput
                        placeholder='Email'
                        textAlign="center"
                        right={<TextInput.Icon name="email" />}
                        style={styles.inputbox}
                        keyboardType="email-address"

                        onChangeText={(text) => setEmail( {data:text,error:false})}
                        value={email.data}

                        error={email.error}

                    />

                    <TextInput
                        placeholder='Mobile'
                        textAlign="center"
                        right={<TextInput.Icon name="phone" />}
                        style={styles.inputbox}
                        keyboardType="numeric"
                        maxLength={10}
                        onChangeText={(text) => setMobile( {data:text,error:false})}
                    />

                    <TextInput
                        placeholder='Password'
                        textAlign="center"
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
                        style={styles.inputbox}
                        maxLength={8}
                        onChangeText={(text) => setPassword( {data:text,error:false})}
                

                    />

                    <Button icon="" mode="contained" style={styles.submitbtn}
                     onPress={() => {
                        onSubmitMethod(username.data,email.data,mobile.data,password.data)
                        // console.log({email});
                        // navigation.push('SideNavbar')}
                     }}>
                        Submit
                    </Button>

                    <View style={styles.signinBox}>
                    <Text>Already registered?</Text>
                    <Button onPress={() =>
                         {
                            console.log("SignIn.js")
                            navigation.push('SignIn');}} style={styles.signInbtn}>Sign In</Button>
                    </View>

                </View>
            </View>
        </ScrollView>
    );

                         }
const styles = StyleSheet.create({
    scrollbox:{
        backgroundColor:"white",
    },
    container: {
        flex: 1,
        // backgroundColor: '#6A67CE',
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        paddingTop:"10%",
        
       

    },
    loginbox: {
        width: "90%",
        // borderWidth: 5,
        borderColor:"#8A2EFF",
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
     
    },
    inputbox: {
        marginBottom: 5,
        backgroundColor: "transparent",
        justifyContent: "center",
        color:"red",
        

    },
    submitbtn: {
        marginTop: 15,
        backgroundColor:"#8A2EFF"
    },
    signInbtn:{
        color:"#8A2EFF"
    },
    signinBox:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        marginTop:10,
    }
});






