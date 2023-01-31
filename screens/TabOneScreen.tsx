import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { useFonts } from "expo-font";
import Card from "../components/Card/Card";
import { useEffect, useState } from "react";
import { characters } from "../util/api";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [fontsLoaded] = useFonts({
    RickMorty: require("../assets/fonts/RM_schwifty.ttf"),
    RM: require("../assets/fonts/RickMorty.ttf"),
  });
  const [data, setData] = useState<any[]>([]);
  const allCharacters = async () => {
    const res = await characters()
    setData(res)
  }
  useEffect(() => {
    allCharacters()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select a character</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {data.map((index) => {
            return (
              <Card
                key={index.id}
                onPress={() =>
                  navigation.navigate("Modal", {
                    url: index.origin.url,
                    personaje: index.name,
                    planet: index.origin.name,
                    origin: index.origin,
                    image: index.image,
                  } as any)
                }
                name={index.name}
                status={index.status}
                species={index.species}
                gender={index.gender}
                image={index.image}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    color: "#35A9B1",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    fontFamily: "RickMorty",
  },

});
