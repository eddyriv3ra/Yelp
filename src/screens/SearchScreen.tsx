import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchValue, setSearchValue] = useState("pasta");
  const data = useSearch(searchValue);
  console.log("data", data);
  // console.log("isError", isError);

  const onTermSubmit = (term: string) => {
    setSearchValue(term);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={onTermSubmit}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
