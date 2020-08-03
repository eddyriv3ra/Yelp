import React, { ReactElement } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./ResultsDetailStyle";

type renderItemType = {
  item: {
    id: string;
    name: string;
    image_url: string;
    rating: number;
    review_count: number;
  };
};

const ResultsDetail = ({ item }: renderItemType): ReactElement => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("ResultsShow", { id: item.id });
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image_url }} />
        <Text style={styles.name}>{item.name}</Text>
        <Text>
          {item.rating} Stars, {item.review_count} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultsDetail;
