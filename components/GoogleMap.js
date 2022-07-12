import * as Location from "expo-location";

import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import React, { useEffect, useState } from "react";

import baseUrl from "../api/baseUrl";

export default function GoogleMap() {
  // ----------------------------------- MapView-Start -------------------------------------

  const [pin, setPin] = React.useState({
    latitude: 0.0,
    longitude: 0.0,
  });
  const [locations, setLocations] = useState([]);

  // locationId
  const [locId, setLocId] = React.useState("62cab1a511bb098d76d2ddfb");

  // address
  const [addr, setAddre] = React.useState({ data: "pune" });

  // location coordinates object

  const onSubmitMethod = async (
    currentAddress,
    currentLatitude,
    currentLongitude
  ) => {
    let body = {
      LocationId: locId,
      address: currentAddress,
      latitude: currentLatitude,
      longitude: currentLongitude,
      // location: coordinates
    };
    //  console.log({body});

    try {
      const result = await baseUrl.post("locats", body);
      const resultArray = await baseUrl.get("locats");
      setLocations(resultArray.data.data);
    } catch (E) {
      // console.log(E)
    }
  };

  const onUserLocationChange = async (
    currentAddress,
    currentLatitude,
    currentLongitude
  ) => {
    //   setCoordinates({
    //     latitude: currentLatitude,
    //     longitude: currentLongitude,
    //  })

    let body = {
      LocationId: locId,
      address: currentAddress,
      latitude: currentLatitude,
      longitude: currentLongitude,
      // location: coordinates
    };
    // console.log('user location changed');
    //  console.log(body);

    try {
      const result = await baseUrl.patch("locats", body);
      // console.log(result.data)
    } catch (E) {
      // console.log(E)
    }
  };

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      } else {
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);

        setPin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        // console.log({pin});
        onSubmitMethod(addr.data, pin.latitude, pin.longitude);
      }
    })();
  }, []);

  // ----------------------------------- MapView-End ----------------------------------------

  // ------------------------------------ Map-Type-Start -------------------------------------

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const [maptypes, setMapTypes] = React.useState({ maptypes: "standard" });

  // ------------------------------------ Map-Type-End -------------------------------------
  const [data, setData] = useState([
    { name: "Harshg", latitude: 16.717165923077122, longitude: 74.17114830875 },
    {
      name: "Shubham",
      latitude: 16.717165923077122,
      longitude: 74.17114830875,
    },
    { name: "Asif", latitude: 16.717165923077122, longitude: 74.17114830875 },
  ]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType={maptypes.maptypes}
        region={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          // console.log("onUserLocationChange",e.nativeEvent.coordinate);
          // setPin({
          //   latitude: e.nativeEvent.coordinate.latitude,
          //   longitude: e.nativeEvent.coordinate.longitude
          // })
          // //------------
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });

          console.log(pin);
          onUserLocationChange(addr.data, pin.latitude, pin.longitude);

          // ===============================================

          // ===============================================
        }}
      >
        <Marker coordinate={pin} title={"You"} />
        {console.log(locations)}
        {locations.map((item, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={item.name}
          />
        ))}

        <MapView.Circle
          center={{
            latitude: pin.latitude,
            longitude: pin.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          radius={10000} // In meter
          strokeWidth={2}
          strokeColor="#3399ff"
          // fillColor="#80bfff"
          fillColor="transparent"
        />
      </MapView>

      {/* // ------------------------------------ Map-Type-Start ------------------------------------- */}

      <Provider>
        <Portal>
          <FAB.Group
            fabStyle={{ backgroundColor: "white" }}
            open={open}
            icon={open ? "minus" : "eye"}
            actions={[
              {
                icon: "road",
                label: "Satelite view",
                color: "#8A2EFF",
                style: { backgroundColor: "white" },
                onPress: () => {
                  console.log("Pressed email"),
                    setMapTypes({ maptypes: "hybrid" });
                  // console.log({ maptypes })
                },
              },
              {
                icon: "earth",
                label: "Standard view",
                color: "#8A2EFF",
                style: { backgroundColor: "white" },
                onPress: () => {
                  setMapTypes({ maptypes: "standard" });
                  // console.log({ maptypes })
                },
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>

      {/* // ------------------------------------ Map-Type-End ------------------------------------- */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // alignSelf: 'stretch',
    height: "100%",
  },
});
