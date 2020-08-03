import React, { useState, FunctionComponent } from "react";
import { ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useSearch from "../hooks/useSearch";

const SearchScreen: FunctionComponent = () => {
  const [term, setTerm] = useState("");
  const [searchValue, setSearchValue] = useState("pasta");
  const { businesses = [] } = useSearch(searchValue);

  const filterResultsByPrice = (price: string) =>
    businesses.filter((business) => {
      return business.price === price;
    });

  const onTermSubmit = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={onTermSubmit}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
