import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ff7",
    flex: 1,
    justifyContent: "center",
  },
});
