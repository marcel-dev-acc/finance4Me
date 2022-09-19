import React, {type PropsWithChildren} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from 'react-native';

import DataTable from '../../components/DataTable/DataTable';

import globalStyles from '../../components/GlobalStyles/Global.styles';
import styles from './Home.styles';


const Home = () => {
  const tableContents = [
    ['Natwest', 5000.00],
    ['Starling', 2500.00],
  ];
  let total: number = 0;
  tableContents.forEach(row => {
    total = total + row[1];
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
            <DataTable TableContents={[...tableContents, ['Total', total]]} />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;