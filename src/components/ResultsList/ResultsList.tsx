import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import styles from "./ResultsListStyle";

type ResultsListProps = {
  title: string;
};

const ResultsList = ({ title }: ResultsListProps): ReactElement => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ResultsList;
