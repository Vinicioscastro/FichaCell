import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { CheckBox } from 'react-native-web';


function TituloC(props) {
    const nome = props.nome;
    return (
        <Text style={{ color: '#000', fontSize: 16, marginTop: 20 }}>{nome}</Text>
            
    )
}

export default TituloC
