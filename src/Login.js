import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { CheckBox } from 'react-native-web';
import InputC from '../componentes/InputC'
import FichaCelll from '../componentes/FichaCelll'
import TituloC from '../componentes/TituloC'


function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'rgba(95, 36, 159, 1)' }}>


            <TituloC nome='Bem-Vindo'/>

            <FichaCelll nome='FichaCell'/>

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 100, marginStart:-300 }}>Email</Text>
            <InputC nome="Digite seu Email" />
            

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 15, marginStart:-300 }}>Senha</Text>
           
            <InputC nome="Digite sua Senha" modoSenha={true}/>
            

            <Button title='Login'
                onPress={() => navigation.navigate('Home')}
               
            />

            <Button title='Você ainda não tem uma conta? Entre aqui'
                onPress={() => navigation.navigate('CadastrarUSU')}
            />
           
        </View>

    )
}

const style = StyleSheet.create(
    {
        //codigo so css aqui iker
    }
)
export default Login