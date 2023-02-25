import React, { useState } from "react";
import { Button, View, Vibration } from "react-native";

const App = () => {
  const [isVibratorOn, setIsVibratorOn] = useState(false);

  return (
    <View>
      <Button
        onPress={() => {
          setIsVibratorOn(!isVibratorOn);
          isVibratorOn ? Vibration.vibrate([1000], true) : Vibration.cancel();
        }}
        title={isVibratorOn ? "خاموش" : "روشن"}
      />
    </View>
  );
};

export default App;
