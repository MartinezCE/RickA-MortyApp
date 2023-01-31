import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 24,
    width: 334,
    height: 115,
    backgroundColor: "#dddce5",
    borderRadius: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
   // fontFamily: "RickMorty"
  },
  containerCard: {
    backgroundColor: "#dddce5",
    flexDirection: "column",
    position: "absolute",
    top: 58,
    left: 8,
  },
  text: {
    // fontFamily: "RickMorty",
    fontSize: 15,
    color: "#2B8CCF"
  },

  textValue: {
    // fontFamily: "RickMorty",
    color: 'black'
  }
});
