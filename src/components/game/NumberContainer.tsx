import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

interface INumberContainer {
  children: number;
}

const NumberContainer = ({ children }: INumberContainer) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export { NumberContainer };

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
