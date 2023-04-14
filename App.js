import React, {useEffect} from 'react';
import {
  Alert,
  Platform,
  BackHandler,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import Container from './common/components/container';
import Heading, {styles} from './common/components/heading';
import RNRestart from './node_modules/react-native-restart/src/index';
console.warn = () => {};
const App = () => {
  let backHandleAlertShow = false;

  const handleBackButton = () => {
    if (!backHandleAlertShow) {
      backHandleAlertShow = true;
      Alert.alert(
        'Thông báo',
        'Bạn muốn thoát khỏi ứng dụng',
        [
          {
            text: 'ĐÓNG',
            onPress: () => {
              backHandleAlertShow = false;
            },
          },
          {
            text: 'THOÁT',
            onPress: () => {
              RNExitApp.exitApp();
              backHandleAlertShow = false;
            },
          },
        ],
        {cancelable: true},
      );
    }

    if (backHandleAlertShow) {
      backHandleAlertShow = false;
    }
    return true;
  };
  useEffect(() => {
    if (Platform?.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    }
  }, []);

  return (
    <>
      <View style={styles.heading}>
        <Image
          source={require('./common/images/logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.containerNew}
          onPress={() => {
            RNRestart.Restart();
          }}>
          <Text style={styles.containerTitle}>Chơi mới</Text>
        </TouchableOpacity>
      </View>
      <Container startTiles={4} size={4} />
    </>
  );
};

export default App;
