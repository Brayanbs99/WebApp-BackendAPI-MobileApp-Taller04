import { React, useState } from "react";
import Clock from "./components/Clock";
import { StyleSheet, View, Button, StatusBar } from "react-native";

const App = () =>{
    const [on, setOn]= useState(false);
    const toggleClock = () => {
        setOn(!on);
    };
    return (
        <View style={styles.container}>
          {on && <Clock/>}
          <Button 
            title={`Turn clock ${on? 'OFF': 'ON'}`}
            onPress= {toggleClock}
            />
          <StatusBar style="auto" />
        </View>
      );
}

styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default App;