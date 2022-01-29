import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login'
import Sobre from './src/Sobre'
import CadastroAP from './src/CadastroAP'
import Home from './src/Home'
import AlterarDeletar from './src/AlterarDeletar';
import CadastrarUSU from './src/CadastroUSU';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginStack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <LoginStack.Navigator initialRouteName="Login" screenOptions={{headerShown: true, headerTintColor: 'blue'}}  >
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Home" component={Home}/>
        <LoginStack.Screen name="Sobre" component={Sobre} />
        <LoginStack.Screen name="CadastrarUSU" component={CadastrarUSU} />
        <LoginStack.Screen name="CadastroAP" component={CadastroAP} />
        <LoginStack.Screen name="AlterarDeletar" component={AlterarDeletar} />
      </LoginStack.Navigator>
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
