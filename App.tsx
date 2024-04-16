import React from 'react';
import {LogBox, StatusBar} from 'react-native';
import Stack from './src/routes/Stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack />
    </SafeAreaProvider>
  );
}

export default App;
