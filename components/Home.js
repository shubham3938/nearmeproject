import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View , Image} from "react-native";
import { Button } from "react-native-paper";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalbox}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}


            <View style={{flexDirection:"row",width:"100%",justifyContent:"flex-end"}}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>X</Text>
            </Pressable>

            </View>
             
            <View style={{margin:3,width:"100%",padding:10,justifyContent:"center",}}>
            
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:1}}>NAME    : </Text>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:3}}>Shubham Ashok Shingare</Text>
            </View>

            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:1}}>CLASS   : </Text>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:3}}>Third year</Text>
            </View>
           
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:1}}>PRN NO : </Text>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:3}}>2019087997</Text>
            </View>
            

          </View>
       
          <View style={{flexDirection:"row",padding:5}}>
             <Button icon="check" mode="contained" onPress={() => console.log('Pressed')} style={{flex:1,textTransform:"uppercase"}}>
                Accept
             </Button>
            
            <Button icon="close" mode="contained" onPress={() => console.log('Pressed')} style={{flex:1,textTransform:"uppercase"}}>
                reject
            </Button>

          </View>

   {/* Hide modal btn with function */}

            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <View style={{flexDirection:"row",width:"100%",height:100,backgroundColor:"red"}}>
          <View style={{backgroundColor:"yellow",margin:3,flex:1}}>
            <Image
               style={{width:"100%",height:"100%",resizeMode:"stretch",}}
               source={require('../assets/user.png')}
            />

          </View>
          <View style={{backgroundColor:"yellow",margin:3,flex:3,padding:10,justifyContent:"center",}}>
            
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:1}}>NAME   : </Text>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:3}}>Shubham Ashok Shingare</Text>
            </View>

            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:1}}>CLASS : </Text>
              <Text style={{fontSize:15,textTransform:"uppercase",flex:3}}>Third year</Text>
            </View>

            

          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 50,
  },
  modalbox:{
    justifyContent: "center",
    // alignItems: "center",
    top:"40%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 5,
    paddingRight: 10,
    // elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    // backgroundColor: "#2196F3",
    // backgroundColor:"red",
  },
  textStyle: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Home;

