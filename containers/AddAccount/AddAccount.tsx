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

import InputSection from '../../components/InputSection/InputSection';

import globalStyles from '../../components/GlobalStyles/Global.styles';
import styles from './AddAccount.styles';


const AddAccount = ({ navigation, route }) => {

  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleAccountSubmit = async () => {
    if (!account || !amount) {
      Alert.alert('Please add account name and amount');
      return;
    }
    let transformedAmount: number = 0.00;
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
      // saving error
    }
    if (finances === null) {
      await AsyncStorage.setItem('@finances', JSON.stringify([[account, transformedAmount]]));
    } else {
      const previous = JSON.parse(finances);
      for (let i = 0; i < previous.length; i++) {
        if (account === previous[i][0]) {
          Alert.alert('Account number already present');
          return;          
        }
      }
      await AsyncStorage.setItem('@finances', JSON.stringify([...previous, [account, transformedAmount]]));
    }
    setAccount('');
    setAmount('');
    navigation.navigate('Home');
  };

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
              Add account details
            </Text>
          </View>
          <View>    
            <InputSection title='Account' value={account} handleChange={setAccount} />
            <InputSection title='Amount' value={amount} handleChange={setAmount} />
            <View style={styles.buttonSection}>
              <Button
                title="Add account"
                color='#0000FF'
                onPress={handleAccountSubmit}
              />
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddAccount;