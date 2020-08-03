import React, { ReactElement } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import useBusinessById from "../hooks/useBusinessById";

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

type routeProps = {
  route: {
    params: {
      id: string;
    };
  };
};

const ResultsShowScreen = ({ route }: routeProps): ReactElement => {
  const { id } = route.params;
  const { photos, name } = useBusinessById(id);

  return (
    <View>
      <Text>{name}</Text>
      <FlatList
        data={photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

export default ResultsShowScreen;
