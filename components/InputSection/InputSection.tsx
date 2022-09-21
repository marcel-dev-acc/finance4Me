import React, {type PropsWithChildren} from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './InputSection.styles';


type InputSectionProps = {
  title: string,
  value: string,
  handleChange: Dispatch<SetStateAction<string>>,
};

const InputSection = ({
  title,
  value,
  handleChange,
}: InputSectionProps) => {

  return (
    <View style={styles.inputSection}>
      <Text style={styles.title}>{title}:</Text>
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