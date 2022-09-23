import React, {type PropsWithChildren} from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './InputSection.styles';

const InputSection = ({
  title,
  value,
  handleChange,
}) => {

  return (
    <View style={styles.inputSection}>
      <Text style={styles.label}>{title}:</Text>
      <TextInput
        style={styles.input}
        onChangeText={
          (eventText) => {
            handleChange(eventText);
          }
        }
        value={value}
      />
    </View>
  );
};

export default InputSection;