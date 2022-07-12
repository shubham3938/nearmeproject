import * as React from 'react';
import {useState,useEffect } from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import { Button } from 'react-native-paper';
import baseUrl from '../api/baseUrl';

function Profile(){
    
    const [name,setName]= useState({data:"Shubham Shingare", error:false});
    const [email,setEmail]= useState({data:"shubhamshingare1999@gmail.com", error:false});
    const [mobile,setMobile]= useState({data:"8766824323", error:false});
    // const [password,setPassword]= useState({data:"shubham", error:false});
//-----------------------------------


//-----------------------------------
useEffect(async() => {
    
    
        // try {
          const res = await baseUrl.get("user/about/62cab1a511bb098d76d2ddfb")
          
    // setName({
    //     data:"res.da", 
    //     error:false,
    // })

    // setEmail({
    //     data:"", 
    //     error:false,
    // })

    // setMobile({
    //     data:"", 
    //     error:false,
    // })
          console.log(res.data)
    
        // } catch (E) {
        //   console.log(E)
        // }
      
  },[]);
  

   
//-----------------------------------
      

    return(
        <View style={styles.container}>
            <View style={styles.aboutDataBox}>
                <Text style={styles.aboutDataTitle}>Name   : </Text>
                <Text style={styles.aboutDataValue}>{name.data}</Text>

                <Text style={styles.aboutDataTitle}>Email    :</Text>
                <Text style={styles.aboutDataValue}>{email.data}</Text>

                <Text style={styles.aboutDataTitle}>Mobile  :</Text>
                <Text style={styles.aboutDataValue}>{mobile.data}</Text>

                {/* <Button onPress={()=>{
                    onSubmitMethod(name.data,email.data,mobile.data,password.data)
                }}>Okk</Button> */}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",

    },
    aboutDataBox:{
       width:"90%",
       height:"40%",
       justifyContent:"space-evenly",
       alignItems:"center",
    //    borderWidth:2,
    //    borderColor:"black",
    //    padding:10,
       
    },
    aboutDataTitle:{
        
        // justifyContent:"space-evenly",
        // backgroundColor:"grey",
        width:"100%",
        fontSize:30,
        color:"#8A2EFF",
    },
    aboutDataValue:{
        // backgroundColor:"grey",
        width:"100%",
        fontSize:20,
        color:"black",
    }

});



export default Profile

//========================================================================

// function About() {

//     // const onSubmitMethod = async (currentAddress, currentLatitude, currentLongitude) => {
    
//     //     let body = {
 
//     //     }
//     //     // console.log({body})
    
//     //     try {
//     //       const result = await baseUrl.post("user/signup", body)
//     //       console.log(result.data)
    
//     //     } catch (E) {
//     //       console.log(E)
//     //     }
//     //   }

//     //   onSubmitMethod()

// return (
// <View  style={styles.container}>
//      <View style={styles.maincard}>
//          <View style={styles.infoPart}>
//              <View style={styles.textView}>
//                 <Text style={styles.titleText}>FRESHERS PARTY 2k22</Text>
//              </View>
//              <View style={styles.textView}>
//                  <Text style={styles.contentText}>PASS TYPE :</Text>
//                  <Text style={styles.contentText}>MEAL/ENTRY</Text>
//              </View>
//              <View style={styles.textView}>
//                  <Text style={styles.contentText}>NAME :</Text>
//                  <Text style={styles.contentText}>SHUBHAM SHINGARE</Text>
//              </View>
//          </View>

//          <View style={styles.qrPart}>
//              <View  style={styles.qrcode}>
//                <Image
//                     style={{width:"100%",height:"100%",resizeMode:"stretch",borderRadius:5}}
//                     source={require('../assets/qrcode.png')}
//                />
//              </View>
             
//              <View  style={styles.dateText}>
//                  <Text>DATE : 20/04/2022</Text>
//              </View>
//          </View>
//      </View>
// </View>
// )
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor:"white",

//     },
//    maincard:{
//     flexDirection:"row",
//     backgroundColor:"#6dd5ed",
//     width:"95%",
//     height:250,
//     borderRadius:10,
//     padding:5,
//    },
//    infoPart:{
//     flex:1,
//     height:"100%",
//     // backgroundColor:"red",
//     flexDirection:"column",
//     justifyContent:"space-evenly",
    
//    },
//    qrPart:{
//     flex:1,
//     height:"100%",
//     flexDirection:"column",
//     // backgroundColor:"yellow",
//    },
//    textView:{
//        margin:10,
//     //    backgroundColor:"pink",
    
//    },
//    titleText:{
//        fontSize:20,
//        textTransform:"uppercase",
//        fontWeight:"bold",

//    },
//    contentText:{
//        fontSize:16,
//        textTransform:"uppercase",
//        lineHeight:20,

//    },
//    qrcode:{
//      flex:3,

     
//    },
//    dateText:{
//        flex: 0.5,
//        alignItems:"center",
//        justifyContent:"center",

//    },


// });

// export default About