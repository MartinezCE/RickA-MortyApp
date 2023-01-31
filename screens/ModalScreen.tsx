import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text , Image} from "react-native";
import CardPlanet from "../components/CardPlanet/CardPlanet";
import { View } from "../components/Themed";
import { homePlanet } from "../util/api";

export default function ModalScreen() {
  const [planets, setPlanets] = useState<any>([]);
  const route = useRoute();
  const { url, personaje, planet,image } = route?.params as any;
  const navigation = useNavigation();

  const homePlanets = async (url: string) => {
    try {
      const res = await homePlanet(url);
      setPlanets(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    homePlanets(url);
  }, [route?.params]);

  return (
  
      <View style={styles.container}>
      <View style={styles.separator}></View>
      <Text style={styles.title}>{personaje}</Text>
      <Image source={{ uri: image }}  style={{ width: 100, height: 100, resizeMode:"center"}} />
      <View style={styles.containerInfo}>
        {url && planet && (
          <CardPlanet
            name={planet}
            type={planets.type ? planets.type : null}
            dimension={planets.dimension}
          />
        )}
      </View>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
    fontFamily: "RickMorty",
    color: "#226F1F",
  },
  separator: {
    backgroundColor: "#53ABEE",
    width: 100,
    height: 6,
    marginTop: 6,
  },
  containerInfo: {
    backgroundColor: "#53ABEE",
    width: 414,
    height: 581,
    borderRadius: 35,
    marginTop: 10,
    padding: 25,
  },
});
