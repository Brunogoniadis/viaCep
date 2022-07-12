import React, {useState} from "react";
import{View,Text, TextInput,TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import api from './src/services/api';

export default function App(){
  const [cep, setCep] = useState('');
  
  return(
    <SafeAreaView>
      <View style = {{alignItems: 'center'}}>
        <Text style ={style.text}>Digite o cep Desejado</Text>
        <TextInput
        style={style.input}
        placeholder = "Ex: 9879876"
        value={cep}
        onChangeText={(texto)=>setCep(texto)}
        keyboardType="numeric"
      />

      </View>
      
      <View style={style.areaBtn}>
        <TouchableOpacity style={[style.botao,{backgroundColor: '#1d75cd'}]}>
          <Text style ={style.botaoText}>
            Buscar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.botao, {backgroundColor: 'red'}]}>
          <Text style ={style.botaoText}>
            Limpar
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
  },
  text:{
    marginTop:25,
    marginBottom:15,
    fontSize:25,
    fontWeight: 'bold',
    color: 'black'

  },
  input:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#black',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
    tintColor: 'black'
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:15,
    justifyContent: 'space-around'
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius:5,
  },
  botaoText:{
    fontSize:18,
    color:  'black'
  }

})