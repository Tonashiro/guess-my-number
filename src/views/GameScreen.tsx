import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { colors } from "../constants/colors";
import Title from "../components/atoms/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import Button from "../components/atoms/Button";
import { useEffect } from "react";

function generateRandomNumber(
  min: number,
  max: number,
  exclude: number
): number {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}

interface IGameScreen {
  userNumber: number;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }: IGameScreen) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      <Title size={24} color={colors.accent500} borderColor={colors.accent500}>
        Opponent's Guess
      </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>
        <Button type="primary" onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </Button>
        <Button type="primary" onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </Button>
      </View>
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
