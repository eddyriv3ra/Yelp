import React, { ReactElement } from "react";
import { View, Text, FlatList } from "react-native";
import ResultsDetail from "../ResultsDetail";
import styles from "./ResultsListStyle";

type ResultsListProps = {
  title: string;
  results: any;
};

type renderItemType = {
  item: {
    id: string;
    name: string;
    image_url: string;
    rating: number;
    review_count: number;
  };
};

const ResultsList = ({ title, results }: ResultsListProps): ReactElement => {
  const renderItem = ({ item }: renderItemType) => (
    <ResultsDetail item={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ResultsList;
