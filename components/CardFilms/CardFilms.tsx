import { FC } from "react";
import { Pressable, Text } from "react-native";
import { View } from "../Themed";
import { styles } from "./syles";

type Props = {
title: string;
episode_id: string;
release_date: string;

};

const CardFilms: FC<Props> = ({  title, episode_id, release_date,  }) => {
return (
    <View  style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.containerCard}>
        <Text style={styles.text}>Episode: <Text style={styles.textValue}>{episode_id}</Text></Text>
        <Text style={styles.text}>Release date: <Text style={styles.textValue}>{release_date}</Text> </Text>
    </View>
    </View>
);
};

export default CardFilms;
