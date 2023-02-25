import React, { useState, useEffect } from "react";
import { Button, View, Vibration } from "react-native";
import PowerButton from "./components/powerButton";

const App = () => {
  const [isVibratorOn, setIsVibratorOn] = useState(false);
  useEffect(() => {
    isVibratorOn ? Vibration.vibrate([1000], true) : Vibration.cancel();
  }, [isVibratorOn]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

export default App;
