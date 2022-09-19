import React, {type PropsWithChildren} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import styles from './DataTable.styles';

type ColumnProps = {
  ColumnSize: number,
  ColumnContents: any,
};

const Column = ({
  ColumnSize,
  ColumnContents,
}: ColumnProps) => {
  const localStyles = StyleSheet.create({
    colSize: {
      width: `${ColumnSize}%`,
    },
  });

  return (
    <View
      style={{...styles.col, ...localStyles.colSize}}
    >
      <Text
        style={styles.colText}
      >{ColumnContents}</Text>
    </View>
  );
};

type RowProps = {
  RowContents: any,
};

const Row = ({
  RowContents,
}: RowProps) => {
  const columnSize = Math.floor(100 / RowContents.length);

  return (
    <View
      style={styles.row}
    >
      {RowContents.map((col) => {
        return (
          <Column key={col} ColumnSize={columnSize} ColumnContents={col} />
        );
      })}
    </View>
  );
};

type DataTableProps = {
  TableContents: any
};

const DataTable = ({
  TableContents,
}: DataTableProps) => {

  return (
    <View style={styles.table}>
      {
        TableContents.map((row) => {
          return (
            <Row key={row[0]} RowContents={row}/>
          );
        })
      }
    </View>
  );
};

export default DataTable;