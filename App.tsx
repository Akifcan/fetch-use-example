import React from 'react';
import {FetchProvider, useFetchWrapper} from 'fetch-use/src/index';
import {Text, SafeAreaView, Button} from 'react-native';
import {TestScreen} from './TestScreen';

const ErrorView = () => {
  const {setError} = useFetchWrapper();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{margin: 50}}>
      <Text>error view</Text>
      <Button
        onPress={() => {
          setError(false);
        }}
        title="Hide"
      />
    </SafeAreaView>
  );
};

const App = () => {
  const BASE_URL = 'http://localhost:3000';
  // const BASE_URL = 'https://jsonplaceholder.typicode.com';

  return (
    <FetchProvider
      globalError={e => {
        console.log('global error');
        console.log(e);
      }}
      baseUrl={BASE_URL}
      errorView={<ErrorView />}>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <TestScreen />
      </SafeAreaView>
    </FetchProvider>
  );
};

export default App;
