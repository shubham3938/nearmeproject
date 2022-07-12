



import React, { useState } from "react";
import {  StyleSheet, Text, Pressable, View, Image,  } from "react-native";
import { Button } from "react-native-paper";

const InviteUser = () => {

  return (
    <View style={styles.centeredView}>
   
        <View style={{ flexDirection: "row", width: "100%", height: 100,backgroundColor:"white",borderRadius:10 }}>

          <View style={{ backgroundColor: "transparent", margin: 3, flex: 1, }}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "stretch", borderRadius: 60 }}
              source={require('../assets/user.png')}
            />

          </View>
          <View style={{ margin: 3, flex: 3,  justifyContent: "center",alignItems:"stretch" }}>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, textTransform: "uppercase", flex: 1 }}>NAME   : </Text>
              <Text style={{ fontSize: 15, textTransform: "uppercase", flex: 3 }}>Shubham Ashok Shingare</Text>
            </View>

            <View style={{ flexDirection:"row" }}>
              <Text style={{ fontSize: 15, textTransform: "uppercase", flex: 1 }}>Place: </Text>
              <Text style={{ fontSize: 15, textTransform: "uppercase", flex: 3 }}>Kolhapur</Text>
            </View>

          </View>

           <View style={{justifyContent:"center",backgroundColor:"white",borderRadius:10,padding:4}}>
            <Button style={{borderWidth:2,borderColor:"#CCE0FF",borderRadius:50}} 
            onPress={() => {}} >
              Invite</Button>
          </View> 
          
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    margin: 10,
    // backgroundColor:"#CCE0FF",
    // borderColor:"#CCE0FF",
    borderColor:"#8A2EFF",
    borderWidth:2,
    borderRadius:10
  },

  button: {
    borderRadius: 5,
    paddingRight: 10,
    // elevation: 2
  },
 
  textStyle: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  msgButton:{
    width:"100%",
    height:"100%",
  
  }
});

export default InviteUser;




