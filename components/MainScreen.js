import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';



const MainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.BtnBox}>
                <View>
                    {/* <Image
                        style={styles.tinyLogo}
                        source={require('@expo/snack-static/react-native-logo.png')}
                    /> */}
                </View>
                <View style={styles.btnView}>
                    <Button style={styles.btnStyle} onPress={() => {navigation.push('SignIn');}}>
                        Sign In
                    </Button>
                </View>
                <View style={styles.btnView}>
                    <Button style={styles.btnStyle} textColor="white" onPress={() => {navigation.push('SignUp');}} >
                        Create account
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",

    },
    BtnBox: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",


    },
    btnView: {
        margin: 10,
        width: "90%"
    },
    btnStyle: {
        color: "white",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#8A2EFF",
        color: "white",
    },
})