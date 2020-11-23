import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 0,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
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
  }

});

export default function App() {

  const [name, setName] = useState('Name');
  
  
  
  return (
    <SafeAreaView>
    <View style={styles.container}>
     <StatusBar style="dark" />
    <Text style={styles.textHeader}>CollectWords</Text>
    <Text style={styles.textRegular}>Enter a name</Text>
    <TextInput 
      placeholder='Type a name' 
      style={styles.input}
      onChangeText={(value) => setName(value)} />
     <Text style={styles.result}>{name}</Text>
    </View>
    </SafeAreaView>
  );
}


