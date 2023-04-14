import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Dimensions from '../utils/dimensions';
import RNRestart from '../../node_modules/react-native-restart/src/index';
import colors from './colors';

export const styles = StyleSheet.create({
  heading: {
    paddingTop: Dimensions.size['12'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.CS_BACK_GROUND,
  },
  headingTitle: {
    fontSize: Dimensions.size['12'],
    color: '#776E65',
    fontWeight: 'bold',
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  container: {
    backgroundColor: '#EBAF65',
    paddingLeft: Dimensions.size['5'],
    paddingRight: Dimensions.size['5'],
    paddingTop: Dimensions.size['2'],
    paddingBottom: Dimensions.size['2'],
    borderRadius: Dimensions.size['2'],
    marginLeft: Dimensions.size['2'],
    flexDirection: 'column',
    alignItems: 'center',
    width: '45%',
  },
  containerTitle: {
    color: '#7A2827',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Dimensions.size['3'],
  },
  containerValue: {
    color: '#fff',
    textAlign: 'center',
    fontSize: Dimensions.size['6'],
    fontWeight: 'bold',
  },
  containerNew: {
    backgroundColor: '#EBAF65',
    padding: Dimensions.size['5'],
    borderRadius: Dimensions.size['2'],
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginBottom: 20,
  },
  image: {
    width: '50%',
    height: 130,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
  },
});

const Heading = props => {
  const restart = () => {
    RNRestart.Restart();
  };
  return (
    <>
      <View style={styles.scores}>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>Điểm hiện tại</Text>
          <Text style={styles.containerValue}>{props.score}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.containerTitle}>Điểm cao</Text>
          <Text style={styles.containerValue}>{props.best}</Text>
        </View>
      </View>
    </>
  );
};

export default Heading;
