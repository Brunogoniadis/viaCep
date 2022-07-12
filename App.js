import React, {useState, useRef} from "react";
import{View,Text, TextInput,TouchableOpacity, StyleSheet, SafeAreaView, Keyboard} from 'react-native';
import api from './src/services/api';

export default function App(){
  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);


  function limpar(){
    setCep(' ');
    inputRef.current.focus();
  }

  async function buscar(){
    if(cep==''){
      alert('Digite um CEP valido');
      setCep('');
      return;
    }

    try{
      const response = await api.get(`/${cep}/json/`);
      console.log(response.data);

      setCepUser(response.data);



      Keyboard.dismiss();
    }catch(error){
      console.log('ERROR: ' + error)
    }


  }

  return(
    <SafeAreaView>
      <View style = {{alignItems: 'center'}}>
        <Text style ={style.text}>Digite o CEP Desejado:</Text>
        <TextInput
        style={style.input}
        placeholder = "Ex: 9879876"
        value={cep}
        onChangeText={(texto)=>setCep(texto)}
        keyboardType="numeric"
        ref={inputRef}
      />

      </View>
      
      <View style={style.areaBtn}>
        <TouchableOpacity style={[style.botao,{backgroundColor: '#1d75cd'}]}
        onPress={buscar}
        >
          <Text style ={style.botaoText}>
            Buscar
          </Text>
        </TouchableOpacity>


        <TouchableOpacity 
        style={[style.botao, {backgroundColor: 'red'}]}
        onPress={ limpar}
        >
          <Text style ={style.botaoText}>
            Limpar
          </Text>
        </TouchableOpacity>

      </View>

      {cepUser &&
        <View style={style.resultado}>
          <Text style={[style.itemText, {mar:15}]}>CEP: {cepUser.cep}</Text>
          <Text style={style.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={style.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={style.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={style.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      }
      

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
    color:  'white'
  },
  resultado:{
    marginTop:50,
    justifyContent:'center',
    alignItems: 'center'
  },
  itemText:{
    fontSize: 22,
    color: 'black'
  }

})