import { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./syles";

type Props = {
  onPress?: () => void;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

const Card: FC<Props> = ({ onPress, name, status, species, gender, image }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.containerCard}>
        {status === "Alive" ? (
          <View style={styles.statusA} />
        ) : (
          <View style={styles.statusB} />
        )}
        <Text style={styles.text}>{status}-</Text>
        <Text style={styles.text}>{species}-</Text>
        <Text style={styles.text}>{gender}</Text>
      </View>
      <View style={{ position: "absolute", top: 8, left: 220 }}>
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100, borderRadius: 8 }}
        />
      </View>
    </Pressable>
  );
};

export default Card;
