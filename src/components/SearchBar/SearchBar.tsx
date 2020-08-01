import React, { ReactElement } from "react";
import { View, TextInput } from "react-native";
import { Icon } from "expo";
import styles from "./SearchBarStyles";

type SearchBarProps = {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: (term: string) => void;
};

const SearchScreen = ({
  onTermChange,
  term,
  onTermSubmit,
}: SearchBarProps): ReactElement => {
  const handleOnChangeText = (newTerm: string): void => {
    onTermChange(newTerm);
  };

  const handleOnTermSubmit = () => {
    onTermSubmit(term);
  };

  return (
    <View style={styles.backgroundStyle}>
      <Icon.Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inoutStyle}
        placeholder="Search"
        value={term}
        onChangeText={handleOnChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={handleOnTermSubmit}
      />
    </View>
  );
};

export default SearchScreen;
