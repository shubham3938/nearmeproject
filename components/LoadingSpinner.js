import * as React from "react";

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const LoadingSpinner = (props) => {
  return (
    <View style={{ ...style.center, ...props.style }}>
      <ActivityIndicator size="large"  color="#00ff00" />
    </View>
  );
};
const style = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
export default LoadingSpinner;
