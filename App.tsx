import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import { StatusBar } from "expo-status-bar";
import { StartGame } from "./src/views/StartGame";
import { GameScreen } from "./src/views/GameScreen";
import { colors } from "./src/constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  function selectedNumberHandler(selectedNumber: string) {
    setUserNumber(parseInt(selectedNumber));
  }

  let screen = <StartGame onConfirmed={selectedNumberHandler} />;

  if (!!userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[colors.primary800, colors.accent500]}
      style={styles.root}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./src/assets/background-dices.png")}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.root}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
