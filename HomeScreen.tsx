import React, {FC, useEffect, useState} from 'react';
import {useFetch} from 'fetch-use/src/hooks/useFetch';
import {View, Text, TouchableOpacity} from 'react-native';

interface TodoProps {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const HomeScreen: FC = () => {
  const {
    sendRequest: getTodoRequest,
    data: todoData,
    error: todoError,
    destroy: todoDestroy,
  } = useFetch<TodoProps[]>('/todos/1', 'GET', {
    headers: {
      authorization: 'Bearer jwt',
    },
    useErrorView: false,
    useCache: true,
  });

  const {
    sendRequest: getPostRequest,
    data: postData,
    isLoading: postLoading,
    error: postError,
    destroy: postDestroy,
  } = useFetch<PostProps[]>('/', 'POST', {
    useErrorView: false,
    useCache: true,
    ttlCache: 60000,
  });

  const [vals] = useState<any>([]);

  useEffect(() => {
    // getTodoRequest();

    getPostRequest({
      body: {name: 'akif', last: 'kara'},
      contentType: 'application/json', //application/json | multipart/form-data
      params: {id: 20}, //if needed not required
    });

    return () => {
      todoDestroy();
      postDestroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!todoError) {
      return;
    }
    console.log(todoError);
  }, [todoError]);

  useEffect(() => {
    if (!todoData) {
      return;
    }
    console.log(todoData);
  }, [todoData]);

  useEffect(() => {
    if (!postError) {
      return;
    }
    console.log(postError);
  }, [postError]);

  useEffect(() => {
    if (!postData) {
      return;
    }
    console.log(postData);
    // setVals((prev: any) => [...prev, postData.map((x: any) => x.id)]);
  }, [postData]);

  return (
    <View>
      <Text>{JSON.stringify(todoData)}</Text>
      <Text>{JSON.stringify(todoError)}</Text>
      <TouchableOpacity onPress={() => getTodoRequest()}>
        <Text>ok</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getPostRequest()}>
        <Text>post</Text>
      </TouchableOpacity>
      {postLoading && <Text>Post loading!</Text>}
      <Text>{JSON.stringify(vals.length)}</Text>
      <Text>{JSON.stringify(postError)}</Text>
    </View>
  );
};
