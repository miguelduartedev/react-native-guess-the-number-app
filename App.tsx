import { StyleSheet, ImageBackground } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import GameScreen from "./screens/GameScreen"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#020024", "#00d4ff"]}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.78,
  },
})
