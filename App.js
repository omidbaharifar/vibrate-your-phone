import React, { useState, useEffect } from "react";
import { Button, View, Vibration } from "react-native";

const App = () => {
  const [isVibratorOn, setIsVibratorOn] = useState(false);
  useEffect(() => {
    isVibratorOn ? Vibration.vibrate([1000], true) : Vibration.cancel();
  }, [isVibratorOn]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => {
          setIsVibratorOn(!isVibratorOn);
        }}
        title={isVibratorOn ? "خاموش" : "روشن"}
      />
    </View>
  );
};

export default App;
