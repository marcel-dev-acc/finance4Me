import React, {type PropsWithChildren} from 'react';
import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Button,
    Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import InputSection from '../../components/InputSection/InputSection';

import globalStyles from '../../components/GlobalStyles/Global.styles';
import styles from './EditAccount.styles';

const EditAccount = ({ navigation, route }) => {

  const [amount, setAmount] = useState('');

  const handleAmountSubmit = async () => {
    if (!amount) {
      Alert.alert('Please add an amount');
      return;
    }
    let transformedAmount = 0.00;
    try {
      transformedAmount = parseFloat(parseFloat(amount).toFixed(2));
      if (transformedAmount > 0) {} else {
        throw new Error();
      }
    } catch (e) {
      Alert.alert('For the amount please enter a number');
      return;
    }
    let finances = null;
    try {
      finances = await AsyncStorage.getItem('@finances');
    } catch (e) {
      Alert.alert(`${e}`);
    }
    const previous = finances !== null ? JSON.parse(finances) : [];
    let newFinances = [];
    previous.forEach((entry) => {
      if (route.params.account === entry[0]) {
        newFinances.push([entry[0], transformedAmount]);
      } else {
        newFinances.push(entry);
      }
    });
    await AsyncStorage.setItem('@finances', JSON.stringify(newFinances));
    navigation.navigate('Home');
  };

  const refreshAmount = async () => {
    let finances = null;
    try {
      finances = await AsyncStorage.getItem('@finances');
    } catch (e) {
      // saving error
    }
    if (finances !== null) {
      const data = JSON.parse(finances);
      data.forEach((entry) => {
        if (route.params.account === entry[0]) setAmount(entry[1].toFixed(2));
      });
    }
  };

  const handleRemoveAccount = async () => {
    let finances = null;
    try {
      finances = await AsyncStorage.getItem('@finances');
    } catch (e) {
      Alert.alert(`${e}`);
    }
    const previous = finances !== null ? JSON.parse(finances) : [];
    let newFinances = [];
    previous.forEach((entry) => {
      if (route.params.account !== entry[0]) {
        newFinances.push(entry);
      }
    });
    await AsyncStorage.setItem('@finances', JSON.stringify(newFinances));
    navigation.navigate('Home');
  };

  useEffect(() => {
    if (!amount) refreshAmount();
  }, []);

  return (
    <SafeAreaView
      style={globalStyles.bodySection}
    >
      <ScrollView>
          <View
            style={styles.sectionNav}
          >
              <Text
                style={styles.navText}
              >
                finance4Me
              </Text>
          </View>
          <View
            style={styles.sectionTitle}
          >
            <Text
              style={styles.titleText}
            >
              Edit account details
            </Text>
          </View>
          <View style={styles.editSection}>
            <Text style={styles.label}>Account: {route.params.account}</Text>
            <InputSection title='Amount' value={amount} handleChange={setAmount} />
            <View style={styles.buttonSection}>
              <Button
                title="Update amount"
                color='#0000FF'
                onPress={handleAmountSubmit}
              />
            </View>
            <View style={styles.buttonSection}>
              <Button
                title="Delete"
                color='#FF5951'
                onPress={handleRemoveAccount}
              />
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAccount;