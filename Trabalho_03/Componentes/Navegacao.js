import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';
import Formulario from './Formulario';

const Stack = createNativeStackNavigator();

function Navegacao(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />      
      <Stack.Screen name='Formulario' component={Formulario} />
    </Stack.Navigator>
  )
}

export default Navegacao;