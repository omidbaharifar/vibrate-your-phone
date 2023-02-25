import React, { useState, useEffect } from "react";
import { View, Vibration, StyleSheet, Platform } from "react-native";
import PowerButton from "./components/powerButton";
import MainImage from "./components/mainImage";

const App = () => {
  const [isVibratorOn, setIsVibratorOn] = useState(false);

  useEffect(() => {
    isVibratorOn
      ? Vibration.vibrate(Platform.OS === "android" ? [0, 10000] : [1000], true)
      : Vibration.cancel();
  }, [isVibratorOn]);

  return (
    <View style={styles.container}>
      <MainImage isVibratorOn={isVibratorOn} />
      <PowerButton
        onPress={() => {
          setIsVibratorOn(!isVibratorOn);
        }}
        isVibratorOn={isVibratorOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

export default App;
