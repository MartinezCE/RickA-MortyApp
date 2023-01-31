import { FC } from "react";
import {  Text } from "react-native";
import { View } from "../Themed";
//import { styles } from "./styles";

type Props = {
  name?: string;
  dimension?:string;
  type:string;
};

const CardPlanet: FC<Props> = ({
  name,
  type,
  dimension,
  
}) => {
  return (
    <View style={{backgroundColor:''}}>
      <Text style={{textAlign:'center',fontSize:15,marginBottom:120,marginTop:40}}>{name}</Text>
      <View style={{backgroundColor:'', alignItems:'center' }}>
        <Text style={{}}>Type: {type}</Text>
        <Text style={{}}>Dimension: {dimension}</Text>
      </View>
    </View>
  );
};

export default CardPlanet;
