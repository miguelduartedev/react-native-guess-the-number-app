import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary400,
    padding: 24,
    margin: 25,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary400,
    fontSize: 36,
    fontWeight: "bold",
  },
})
