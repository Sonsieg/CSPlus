import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import RNRestart from 'react-native-restart'; // Import package from node modules

const {width} = Dimensions.get('window');

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(238, 228, 218, 0.5)',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: width - 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  won: {
    fontSize: 60,
    color: '#776E65',
    textAlign: 'center',
  },
  over: {
    fontSize: 60,
    color: '#776E65',
    textAlign: 'center',
  },
  lower: {
    height: 120,
  },
  keepGoingContainer: {
    height: 40,
    backgroundColor: '#8f7a66',
    borderRadius: 3,
    paddingHorizontal: 15,
  },
  keepGoing: {
    fontSize: 24,
    color: '#f9f6f2',
    textAlign: 'center',
  },
  tryAgainContainer: {
    height: 40,
    backgroundColor: '#7A2827',
    borderRadius: 3,
    paddingHorizontal: 15,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
  tryAgain: {
    fontSize: 24,
    color: '#f9f6f2',
    textAlign: 'center',
  },
};

class GameMessage extends Component {
  genMessage() {
    if (this.props.won) {
      return (
        <View style={styles.row}>
          <Text style={styles.won}>Bạn chiến thắng !</Text>
          <View style={styles.lower}>
            <TouchableOpacity onPress={this.props.onKeepGoing}>
              <View style={styles.keepGoingContainer}>
                <Text style={styles.keepGoing}>Tiếp tục</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (this.props.over) {
      return (
        <View style={styles.row}>
          <Text style={styles.over}>Trò chơi kết thúc!</Text>
          <View style={styles.lower}>
            <TouchableOpacity onPress={this.props.onTryAagin}>
              <View style={styles.tryAgainContainer}>
                <Text style={styles.tryAgain}>Thử lại</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return <View />;
  }

  render() {
    const message = this.genMessage();
    const containerStyle =
      this.props.won || this.props.over
        ? {width: width - 40, height: width - 40}
        : {width: 0, height: 0};
    return <View style={[styles.container, containerStyle]}>{message}</View>;
  }
}

export default GameMessage;
