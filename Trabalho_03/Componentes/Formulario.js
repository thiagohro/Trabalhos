import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {AutenticaContext} from './ContextoLoja';


export default function Home(){  

  const {pegaPedido} = useContext(AutenticaContext);

  const navigation = useNavigation();
  
 const produtos =[
                ];

const [codigoProduto,setCodigoProduto] = useState('');
const [descricaoProduto,setDescricaoProduto] = useState('');
const [precoProduto,setPrecoProduto] = useState('');
const [quantidadeProduto,setQuantidadeProduto] = useState('');
const [lista, setLista] = useState(produtos);

const addProduto = () => {

  pegaPedido(codigoProduto, descricaoProduto, precoProduto, quantidadeProduto);

  if(codigoProduto == '' || descricaoProduto == '' || precoProduto == '' || quantidadeProduto == '' || indice != -1)
  {
    return;
  } 


setLista ( (lista) => [
      ...lista, { codigo: codigoProduto, descricao: descricaoProduto, preco: precoProduto, qtd: quantidadeProduto}
     ]);


  limparInput();

  navigation.navigate('Home');

}

const editaProduto = () => {
  setLista(lista.map((produto) =>
    produto.codigo == codigoProduto
      ?{...produto, descricao: descricaoProduto, preco: precoProduto, qtd: quantidadeProduto}
      :{...produto}
  ));  
  limparInput();
}//fecha cost


const indice = lista.findIndex( 
  (item) => item.codigo == codigoProduto
  );

  const apagaProduto = () => {
    setLista([
      ...produtos.slice(0, indice),
      ...produtos.slice(indice + 1, produtos.length)
    ])
    limparInput();
  }


 
    
 

function limparInput()
{
  return setCodigoProduto(''), setDescricaoProduto(''), setPrecoProduto(''), setQuantidadeProduto('');
}

  return (

    <View style={styles.container}>
    <View>

    {/*INPUT*/}
       <TextInput
      style={styles.entrada}
      value={codigoProduto}
      placeholder='Código'
      onChangeText={(valor) => {setCodigoProduto(valor)}}
      keyboardType='numeric'
      />
      <TextInput
      style={styles.entrada}
      placeholder='Descrição'
      value={descricaoProduto}
      onChangeText={(valor) => {setDescricaoProduto(valor)}}
      />
      <TextInput
      style={styles.entrada}
      value={precoProduto}
      placeholder='Preço'
      onChangeText={(valor) => {setPrecoProduto(valor)}}
      keyboardType='numeric'
      />
      <TextInput
      style={styles.entrada}
      value={quantidadeProduto}
      placeholder='Quantidade'
      onChangeText={(valor) => {setQuantidadeProduto(valor)}}
      keyboardType='numeric'
      />
    </View>

    <View style={styles.botaoContainer}>
    {/*BUTTONS*/}
    <TouchableOpacity
    style={styles.botao} onPress={addProduto} > 
      <Text style={styles.textoBotao}  >Adcionar</Text>
    </TouchableOpacity>

    </View>    

    <FlatList
    data={lista}
    renderItem={({item}) => (
      <Text style={styles.item}> {item.codigo + ' - ' + item.descricao + ' - ' + item.preco + ' - ' + item.qtd}</Text>
    )}
    />


  <FlatList
    data={produtos}
    />

  </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF',
    padding: 8,
    marginTop: 20,
  },
  entrada: {
    textAlign: 'center',
    borderWidth: 2,
    marginBottom: 5,
    borderRadius: 5,
    fontSize: 20,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    marginBottom: 5,
    borderRadius: 20,
    fontSize: 20,
  },
  textoBotao: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  },
  item: {
    marginBottom: 1,
    fontSize: 16,
    color: 'blue'
  }
});