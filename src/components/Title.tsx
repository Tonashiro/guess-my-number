import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

interface ITitle {
  children: string;
  size: number;
  color: string;
  borderColor: string;
}

const Title = ({ children, size, color, borderColor }: ITitle) => {
  return (
    <View>
      <Text style={styles(size, color, borderColor).title}>{children}</Text>
    </View>
  );
};

const styles = (size: number, color: string, borderColor: string) =>
  StyleSheet.create({
    title: {
      textAlign: "center",
      fontSize: size,
      fontWeight: "bold",
      color: color,
      borderWidth: 2,
      borderColor: borderColor,
      padding: 12,
    },
  });

export default Title;
