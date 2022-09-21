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
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import FinancesTable from '../../components/FinancesTable/FinancesTable';
import InputSection from '../../components/InputSection/InputSection';

import globalStyles from '../../components/GlobalStyles/Global.styles';
import styles from './Home.styles';


const Home = ({ navigation }) => {

  const [tableData, setTableData] = useState([]);

  const handleClearFinances = async () => {
    try {
      await AsyncStorage.removeItem('@finances');
    } catch (e) {
      // saving error
    }
    setTableData([]);
  };

  const refreshTable = async () => {
    let finances = null;
    try {
      finances = await AsyncStorage.getItem('@finances');
    } catch (e) {
      // saving error
    }
    if (finances !== null) {
      setTableData(JSON.parse(finances));
    }
  };

  useFocusEffect(() => {
    refreshTable();
  });

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
              My finances
            </Text>
          </View>
          <View>
            <FinancesTable tableData={tableData} />
            <View style={styles.buttonSection}>
              <Button
                title="Clear finances"
                color='#0000FF'
                onPress={handleClearFinances}
              />
            </View>
            <View style={styles.buttonSection}>
              <Button
                title="Add account"
                color='#0000FF'
                onPress={() => {
                  navigation.navigate('Add Account');
                }}
              />
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;