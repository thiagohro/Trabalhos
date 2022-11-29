import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {AutenticaContext} from './ContextoLoja';
import {useNavigation} from '@react-navigation/native';


  
export default function Home(){  
  const navigation = useNavigation();
  const {nome} = useContext(AutenticaContext);
  const {email} = useContext(AutenticaContext);  

  
const {meusPedidos} = useContext(AutenticaContext);

function addForm(){
  navigation.navigate('Formulario');
  
}

  return(
    <View style={styles.container}>               
      
      <FlatList
        data={meusPedidos}
        renderItem={({item}) => (
          <TouchableOpacity  onPress={()=>alert(item.cod + ' - ' + item.desc + ' - ' + item.prec + ' - ' + item.qtd)}>
          <Text style={styles.item}> {item.cod + ' - ' + item.desc + ' - ' + item.prec + ' - ' + item.qtd}</Text></TouchableOpacity>
    )}
    />
      
      <TouchableOpacity 
        style={styles.botao}
        onPress={addForm}>
        <Text style={styles.textoBotao}>+</Text>
      </TouchableOpacity>

      
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  botao: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 5,
    borderRadius:50,
    width: '20%',
    position: "absolute", bottom: 0, alignSelf: "flex-end"
  },

  textoBotao: {
    color: 'white',
    fontSize: 30,
    lineHeight: 45, 
  },

    item:{   
    marginBottom: 1,
    fontSize: 16,
    textAlign: 'center',
    alignContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //width: 250,
    //flex:0.1, borderWidth:1, height:20,

  },

})