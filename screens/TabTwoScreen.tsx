import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import CardFilms from "../components/CardFilms/CardFilms";
import { View } from "../components/Themed";
import { films } from "../util/api";

export default function TabTwoScreen() {
  const [data, setData] = useState<any[]>([]);

   const fetchData= async()=> {
      const response = await films();
      setData(response?.data.results);
    };
  useEffect(()=>{
    fetchData();
  },[])

  return (
    
      <View style={styles.container}>
      <Text style={styles.title}>Films</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((index) => {
          console.log(index,'data')
          return (
            <CardFilms
              key={index.id}
              title={index.name}
              episode_id={index.episode}
              release_date={index.air_date}
            />
          );
        })}
      </ScrollView>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1C1E22",
  },
  title: {
    color: "#FEE300",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    fontFamily: "RickMorty",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
