import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useSearch from '../hooks/useSearch';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchValue, setSearchValue] = useState('pasta');
  const data = useSearch(searchValue);
  console.log(data);
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
      <ResultsList title={'lele'} />
      <ResultsList title={'lala'} />
      <ResultsList title={'lolo'} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
