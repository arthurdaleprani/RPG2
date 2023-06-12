import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/components/pages/login';
import resgistro from './src/components/pages/resgistro';
import dashbord from './src/components/pages/dashbord';
import recuperarSenha from './src/components/pages/recuperarSenha';

const Stack = createNativeStackNavigator();

export default function App() {


  return (

<NavigationContainer>
    <Stack.Navigator>
   
    <Stack.Screen name = 'login' component= {login}
     options={{headerShown :false}}/>
  
   <Stack.Screen name = "registro" component={resgistro}  
   options={{headerShown :false}} />
  
   <Stack.Screen name = "dashbord" component={dashbord}  
   options={{headerShown :false}}/>
   
   <Stack.Screen name = "recuperarSenha" component={recuperarSenha} 
    options={{headerShown :false}}/>
   
    </Stack.Navigator>
    </NavigationContainer>
  );
}
