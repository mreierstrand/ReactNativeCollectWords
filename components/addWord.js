import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, } from 'react-native';

export default function AddWord({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Type a word to add'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='grey' onPress={() => submitHandler(text)} title='Add word'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});