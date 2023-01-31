import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

export interface IButton {
  children: string;
  type: "primary" | "secondary";
  onPress: VoidFunction;
}

const Button = ({ children, type, onPress }: IButton) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [
                styles.pressed,
                styles.buttonInnerContainer,
                type === "primary"
                  ? styles.primaryButton
                  : styles.secondaryButton,
              ]
            : [
                styles.buttonInnerContainer,
                type === "primary"
                  ? styles.primaryButton
                  : styles.secondaryButton,
              ]
        }
        onPress={onPress}
        android_ripple={{
          color: type === "primary" ? colors.primary600 : colors.secondary600,
        }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  primaryButton: {
    backgroundColor: colors.primary500,
  },
  secondaryButton: {
    backgroundColor: "blue",
  },
});
