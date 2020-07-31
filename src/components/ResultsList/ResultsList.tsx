import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ResultsListProps = {
  title: string;
};

const ResultsList = ({ title }: ResultsListProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
