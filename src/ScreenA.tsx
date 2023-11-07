import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {useStartProfiler} from '@shopify/react-native-performance';

const ScreenA = () => {
  const startNavigationTTITimer = useStartProfiler();

  const {navigate} = useNavigation();

  const clickHandler = (uiEvent: any) => {
    startNavigationTTITimer({
      source: 'ScreenA',
      uiEvent,
    });

    navigate('ScreenB');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darker} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}
        style={{backgroundColor: Colors.darker}}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={clickHandler} style={styles.button}>
            <Text style={{fontSize: 16}}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: 200,
  },
});
