import {useFetch, UseFetchConst} from 'fetch-use';
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
export const TestScreen = () => {
  const {
    sendRequest: getTodoRequest,
    data: todoData,
    error: todoError,
    destroy: todoDestroy,
  } = useFetch<any>('/todos/1', 'GET', {
    headers: {
      authorization: 'Bearer jwt',
    },
    useErrorView: false,
    useCache: true,
    ttlCache: 60000,
    useLogs: true,
  });
  useEffect(() => {
    UseFetchConst.headers = {
      akifffff: 'a',
      b: 'b',
    };

    // getTodoRequest();
    return () => {
      todoDestroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!todoData) {
      return;
    }
    console.log(todoData);
  }, [todoData]);

  useEffect(() => {
    if (!todoError) {
      return;
    }
    console.log('local error!');
    console.log(todoError);
  }, [todoError]);

  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      padding: 10,
      color: 'white',
    },
  });

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{padding: 50}}>
      <Text>{JSON.stringify(todoData)}</Text>
      <Text>{JSON.stringify(UseFetchConst.headers)}</Text>
      <Text>{JSON.stringify(todoError)}</Text>
      <TouchableOpacity
        onPress={() =>
          getTodoRequest({
            timeoutTtl: {
              duration: 150,
            },
          })
        }>
        <Text style={styles.button}>Send request</Text>
      </TouchableOpacity>
    </View>
  );
};
