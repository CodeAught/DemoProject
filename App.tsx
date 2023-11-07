/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback} from 'react';
import RootScreens from './src/RootScreens';
import {
  PerformanceProfiler,
  RenderPassReport,
} from '@shopify/react-native-performance';

function App(): JSX.Element {
  const onReportPrepared = useCallback((report: RenderPassReport) => {
    console.log(JSON.stringify(report, null, 3));
  }, []);

  return (
    <PerformanceProfiler onReportPrepared={onReportPrepared}>
      <NavigationContainer>
        <RootScreens />
      </NavigationContainer>
    </PerformanceProfiler>
  );
}

export default App;
