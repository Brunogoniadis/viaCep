import React from "react";
import{View,Text, TextInput,TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import api from './src/services/api';

export default function App(){
  return(
    <SafeAreaView>
      <Text>
        Primeiro App, primeiro Commit
      </Text>
    </SafeAreaView>

  );
}

const style = StyleSheet.create.apply({
  container: {
    flex:1,
  }

})