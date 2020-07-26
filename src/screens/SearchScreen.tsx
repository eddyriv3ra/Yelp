import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  const onTermSubmit = () => {};
  return (
    <View>
      <SearchBar
        onTermChange={setTerm}
        term={term}
        onTermSubmit={onTermSubmit}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
