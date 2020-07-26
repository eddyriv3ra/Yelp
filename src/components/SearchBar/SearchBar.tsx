import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type SearchBarProps = {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
};

const SearchScreen = ({ onTermChange, term, onTermSubmit }: SearchBarProps) => {
  const handleOnChangeText = (newTerm: string): void => {
    onTermChange(newTerm);
  };

  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inoutStyle}
        placeholder="Search"
        value={term}
        onChangeText={handleOnChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inoutStyle: {
    flexGrow: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchScreen;
