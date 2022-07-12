import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, Button } from 'react-native-paper';

import baseUrl from '../api/baseUrl';

export default function SignIn({navigation}) {
    const [email,setEmail] = useState({data:"", error:false});
    const [password,setPassword] = useState({data:"", error:false});

const onSubmitMethod = async(email_from_client,password_from_client) =>
{ 
    // console.log
    let body  = 
    {
        email:email_from_client.data,
        password:password_from_client.data
    }
    // console.log({body})
    try
    {
        //baseUrl = "http://www.facebook.com/api" +"/login"
        //baseUrl = "http://www.facebook.com/api/login"
        const result = await baseUrl.post("user/login",body)
        console.log(result.data)
        navigation.push('SideNavbar')
        //show success in toast ;
        alert("Dear user","You've logged in successfully");
    }catch(E){
        console.log(E)
        alert("Dear user","Please enter correct email or password");
        // alert("Please enter correct email or password")
    }
}

const validate = (text) => {
  console.log(text);
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
                        placeholder='Email'
                        textAlign="center"
                        right={<TextInput.Icon name="email" />}
                        style={styles.inputbox}
                        keyboardType="email-address"

                        onChangeText={(text) => validate(text)}
                        value={email.data}

                        error={email.error}

                    />

                    {/* <TextInput
                        placeholder='Mobile'
                        textAlign="center"
                        right={<TextInput.Icon name="phone" />}
                        style={styles.inputbox}
                        keyboardType="numeric"
                        maxLength={10}
                    /> */}

                    <TextInput
                        placeholder='Password'
                        textAlign="center"
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}
                        style={styles.inputbox}
                        maxLength={8}
                        onChangeText={(text) => setPassword({data:text,error:false})}

                    />

                    <Button icon="" mode="contained" style={styles.submitbtn}
                     onPress={()=>{
                        // console.log({email})
                        onSubmitMethod(email,password)}}>
                        Submit
                    </Button>

                    <View style={styles.signinBox}>
                    <Text>Already not registered?</Text>
                    <Button
                     onPress={() => {navigation.push('SignUp')}}
                     style={styles.signInbtn}>Create account</Button>
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






