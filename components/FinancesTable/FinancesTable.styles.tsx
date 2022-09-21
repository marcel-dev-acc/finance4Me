import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  table: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    padding: 10,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    width: '33%',
  },
  firstRow: {
    borderTopWidth: 1,
  },
  firstCol: {
    borderLeftWidth: 1,
  },
  tableHeadText: {
    fontWeight: '700',
  },
  colText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
});

export default styles;