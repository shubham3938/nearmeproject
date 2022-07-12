
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import React from 'react';

export default function ContactList() {
    let [error, setError] = useState(undefined);
    let [contacts, setContacts] = useState(undefined);

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers]
                });

                if (data.length > 0) {
                    setContacts(data);
                } else {
                    setError("No contacts found");
                }
            } else {
                setError("Permission to access contacts denied.");
            }
        })();
    }, []);

    let getContactData = (data, property) => {
        if (data) {
            return data.map((data, index) => {
                return (
                    <View key={index} style={styles.mobileNoBox}>
                        <Text style={styles.mobileNoBoxText}>{data.label} : {data[property]}</Text>
                    </View>
                )
            });
        }
    }

    let getContactRows = () => {
        if (contacts !== undefined) {
            return contacts.map((contact, index) => {
                return (
                    <View key={index} style={styles.contact}>
                        <Text style={styles.contactNameBox}>Name : {contact.firstName} {contact.lastName}</Text>
                        {/* {contact.birthday ? <Text>Birthday: {contact.birthday.month}/{contact.birthday.day}/{contact.birthday.year}</Text> : undefined} */}
                        {getContactData(contact.phoneNumbers, 'number')}
                        {/* {getContactData(contact.emails, "email")} */}
                    </View>
                );
            });
        } else {
            return <Text>A waiting contacts...</Text>
        }
    }

    return (
        <View style={styles.container}>
            {/* <Text>Open up App.js to start working on your app!</Text> */}
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.contactList}>
                  {getContactRows()}
                </ScrollView>
                <Text>{error}</Text>
                <StatusBar style="auto" />
            </SafeAreaView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    contact: {
        marginVertical: 8,
        borderWidth:2,
        borderColor:"#8A2EFF",
        borderRadius:5
    },
    contactList: {
        padding: 20
    },
    contactNameBox:{
        backgroundColor:"#8A2EFF",
        color:"white",
        padding:10,
        fontWeight:"bold",

    },
    mobileNoBox:{
        paddingHorizontal:10,
        paddingVertical:4,
        fontWeight:"bold",

    },
    mobileNoBoxText:{
        // fontWeight:"bold"
    }
});


