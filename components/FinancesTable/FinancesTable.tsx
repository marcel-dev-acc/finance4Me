import React, {type PropsWithChildren} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from './FinancesTable.styles';

type FinancesTableProps = {
  tableData: any,
};

const FinancesTable = ({
  tableData,
}: FinancesTableProps) => {
  let total = 0;
  tableData.forEach(row => {
    total = total + row[1];
  });

  return (
    <View style={styles.table}>
      <View
        style={styles.row}
      >
        <View
          style={{...styles.col, ...styles.firstRow, ...styles.firstCol}}
        >
          <Text
            style={{...styles.colText, ...styles.tableHeadText}}
          >Account</Text>
        </View>
        <View
          style={{...styles.col, ...styles.firstRow}}
        >
          <Text
            style={{...styles.colText, ...styles.tableHeadText}}
          >Amount</Text>
        </View>
        <View
          style={{...styles.col, ...styles.firstRow}}
        >
          <Text
            style={{...styles.colText, ...styles.tableHeadText}}
          >Action</Text>
        </View>
      </View>
      {
        tableData.map((row: any[], index: number) => {
          return (
            <View
              style={styles.row}
              key={row[0]}
            >
              <View
                style={{...styles.col, ...styles.firstCol}}
              >
                <Text
                  style={styles.colText}
                >{row[0]}</Text>
              </View>
              <View
                style={styles.col}
              >
                <Text
                  style={styles.colText}
                >{row[1]}</Text>
              </View>
              <View
                style={styles.col}
              >

              </View>
            </View>
          );
        })
      }
      <View
        style={styles.row}
      >
        <View
          style={{...styles.col, ...styles.firstRow, ...styles.firstCol}}
        >
          <Text
            style={{...styles.colText, ...styles.tableHeadText}}
          >Total:</Text>
        </View>
        <View
          style={{...styles.col, ...styles.firstRow}}
        >
          <Text
            style={{...styles.colText, ...styles.tableHeadText}}
          >{total}</Text>
        </View>
      </View>
    </View>
  );
};

export default FinancesTable;