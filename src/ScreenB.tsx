import {
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PerformanceMeasureView} from '@shopify/react-native-performance';

let LazyModule: any;

const ScreenB = () => {
  const [loader, setLoader] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      LazyModule = require('./ComponentA').default;
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <PerformanceMeasureView interactive screenName="ScreenB">
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.darker} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.container}
          style={{backgroundColor: Colors.darker}}>
          <View style={{flex: 1}}>
            {loader ? <ActivityIndicator /> : <LazyModule />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </PerformanceMeasureView>
  );
};

export default ScreenB;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});
