import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import InputC from '../componentes/InputC'
import TituloC from '../componentes/TituloC';

function CadastroAP({ navigation }) {
    return (



        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text>Tela de Cadastro Aparelho</Text>
            <ScrollView>
                <Text style={{ color: '#000', fontSize: 16, marginTop: 50, marginStart: 10}}>Nome</Text>
                <InputC nome="Nome do Dispositivo" />

                <Text style={{ color: '#000', fontSize: 16, marginTop: 0, marginStart: 10 }}>Marca</Text>
                <InputC nome="Marca do Dispositivo" />

                <Text style={{ color: '#000', fontSize: 16, marginTop: 0, marginStart: 10 }}>Ano de Lançamento</Text>
                <InputC nome="ano do Dispositivo" />

                <Text style={{ color: '#000', fontSize: 16, marginTop: 0, marginStart: 10 }}>Processador</Text>
                <InputC nome="Processador do Dispositivo" />

                <Text style={{ color: '#000', fontSize: 16, marginTop: 0, marginStart: 10 }}>Mémoria Ram</Text>
                <InputC nome="Memoria Ram do Dispositivo" />

                <Text style={{ color: '#000', fontSize: 16, marginTop: 0, marginStart: 10 }}>Valor</Text>
                <InputC nome="Valor do Dispositivo" />

                <Text style={{ color: '#000', fontSize: 16, marginTop: 0, marginStart: 10 }}>Descrição</Text>
                <InputC nome="Descrição do Dispositivo" />

            </ScrollView>

            <Button title='Salvar'
                onPress={() => navigation.navigate('Home')}>
            </Button>

            <Button title='Voltar Home'
                onPress={() => navigation.navigate('Sobre')}>
            </Button>


        </View >





    )
}
export default CadastroAP