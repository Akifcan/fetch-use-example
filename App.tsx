import React from 'react';
import {FetchProvider} from 'fetch-use/src/provider/FetchProvider';
import {Text} from 'react-native';
import {HomeScreen} from './HomeScreen';

const ErrorView = () => {
  return <Text>error</Text>;
};

const App = () => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  return (
    <FetchProvider baseUrl={BASE_URL} errorView={<ErrorView />}>
      <HomeScreen />
    </FetchProvider>
  );
};

export default App;
