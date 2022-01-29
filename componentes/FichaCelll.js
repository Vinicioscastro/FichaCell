import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { CheckBox } from 'react-native-web';


function FichaCelll(props) {
    const nome = props.nome;
        
    return (
        <Text style={{ 
            color: '#FFF',
             fontSize: 55, 
             marginTop: 40 
            }}>{nome}</Text>
            
    )
}

export default FichaCelll
