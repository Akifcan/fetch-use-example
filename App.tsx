import React from 'react';
import {FetchProvider} from 'fetch-use/src/provider/FetchProvider';
import {Text, SafeAreaView} from 'react-native';
import {HomeScreen} from './HomeScreen';
import {TestScreen} from './TestScreen';

const ErrorView = () => {
  return (
    <SafeAreaView>
      <Text>ieee</Text>
    </SafeAreaView>
  );
};

const App = () => {
  // const BASE_URL = 'http://localhost:3000';
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  return (
    <FetchProvider baseUrl={BASE_URL} errorView={<ErrorView />}>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <TestScreen />
      </SafeAreaView>
    </FetchProvider>
  );
};

export default App;
