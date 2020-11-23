import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, TouchableWithoutFeedback, Keyboard, Alert, StatusBar } from 'react-native';

import AddWord  from './components/addWord';
import Header from './components/header';
import TodoWord from './components/todoWord';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 0,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
  },
  textHeader: {
    textAlign: 'center',
    paddingTop: 0,
    fontSize: 40,
  },
  textRegular: {
    textAlign:"center",
    fontSize: 20,
    paddingTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  result: {
    padding: 8,
    fontSize: 20
  },
  content: {
    padding: 40,
  },

});

export default function App() {
  const [words, setWord] = useState([
    
  ]);

  const pressHandler = (key) => {
    setWord(prevWords => {
      return prevWords.filter(word => word.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 1){
      setText('');
      setWord(prevWords => {
        return [
          { text, key: Math.random().toString() },
          ...prevWords
        ];
      });
    } else {
      Alert.alert('Error', 'Word must be over 1 character long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };


    return( 
      <View>
      <StatusBar barStyle='light'/>
      <Header/>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.content}>
          <AddWord submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={words}
              renderItem={({ item }) => (
                <TodoWord item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
      </View>
      
    );
  }




