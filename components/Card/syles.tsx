import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "flex-start",
    padding: 24,
    width: 334,
    height: 115,
    backgroundColor: "#dddce5",
    borderRadius: 10,
    marginBottom: 30,
  },
  text: {
    //fontFamily: "RickMorty",
    fontSize: 12,
    color:'#2B8CCF'
  },
  containerCard:{
    backgroundColor: "#dddce5",
    flexDirection: "row",
    position: "absolute",
    top: 68,
    left: 26,
  },
  title:{ //fontFamily: "RickMorty", 
    fontSize:20,
    marginTop: 20 },
    statusA:{
      borderRadius: 50,
      backgroundColor: "#55CC44",
      width: 8,
      height: 8,
      marginTop: 3.5,
      marginRight: 3,
    
    },
    statusB:{
      borderRadius: 50,
      backgroundColor: "red",
      width: 8,
      height: 8,
      marginTop: 3,
      marginRight: 3,
    }
});
