import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { CheckBox } from 'react-native-web';


function InputC({nome, modoSenha}) {
    

    return (
            

            <TextInput
                placeholder = {nome}
                secureTextEntry = {modoSenha}
                style={{
                    backgroundColor: '#fff',
                    marginTop: 15,
                    margin: 10,
                    height: 40,
                    width: 350,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                }}
            ></TextInput>
    )
}

export default InputC
