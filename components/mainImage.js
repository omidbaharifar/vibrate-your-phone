import React, { useEffect, useRef } from "react";
import { StyleSheet, Image, Animated } from "react-native";

const MainImage = ({ isVibratorOn }) => {
  const rawSpinValue = useRef(new Animated.Value(-5)).current;
  const finalSpinValue = rawSpinValue.interpolate({
    inputRange: [-5, 5],
    outputRange: ["-5deg", "5deg"],
  });
  const animation = Animated.loop(
    Animated.spring(rawSpinValue, {
      toValue: 5,
      speed: 2000,
      useNativeDriver: true,
    })
  );

  useEffect(() => {
    isVibratorOn ? animation.start() : animation.reset();
  }, [isVibratorOn]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              rotate: finalSpinValue,
            },
          ],
        },
      ]}
    >
      <Image source={require("../assets/moai.png")} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default MainImage;
