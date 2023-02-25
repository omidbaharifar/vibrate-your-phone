import React, { useState, useEffect } from "react";
import { Button, View, Vibration, StyleSheet } from "react-native";
import PowerButton from "./components/powerButton";

const App = () => {
  const [isVibratorOn, setIsVibratorOn] = useState(false);
  useEffect(() => {
    isVibratorOn ? Vibration.vibrate([1000], true) : Vibration.cancel();
  }, [isVibratorOn]);

  return (
    <View style={styles.container}>
      <View>
        <PowerButton
          onPress={() => {
            setIsVibratorOn(!isVibratorOn);
          }}
          isVibratorOn={isVibratorOn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

export default App;
