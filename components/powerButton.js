import React from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const PowerButton = ({ onPress, isVibratorOn }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isVibratorOn && styles.container__vibratorIsOn]}
    >
      <View>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          style={[styles.icon, isVibratorOn && styles.icon__vibratorIsOn]}
        >
          <Path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
          />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ff9800",
    borderRadius: 9999,
    padding: 10,
  },
  container__vibratorIsOn: {
    backgroundColor: "#ff9800",
  },
  icon: {
    width: 80,
    height: 80,
    color: "#ff9800",
  },
  icon__vibratorIsOn: {
    color: "#000",
  },
});

export default PowerButton;
