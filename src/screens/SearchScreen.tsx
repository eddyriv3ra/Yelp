import React, { useState, FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useSearch from "../hooks/useSearch";

const SearchScreen: FunctionComponent = () => {
  const [term, setTerm] = useState("");
  const [searchValue, setSearchValue] = useState("pasta");
  const { businesses } = useSearch(searchValue);
  console.log(businesses);
  // console.log("isError", isError);ñ¡

  const onTermSubmit = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={onTermSubmit}
      />
      <Text>Search Screen</Text>
      <ResultsList title="lele" />
      <ResultsList title="lala" />
      <ResultsList title="lolo" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
