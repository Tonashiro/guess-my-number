import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title size={24} color={colors.accent500} borderColor={colors.accent500}>
        Opponent's Guess
      </Title>
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
      </View>
      {/* + */}
      {/* - */}
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export { GameScreen };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    padding: "5%",
  },
});
