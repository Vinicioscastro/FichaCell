import * as React from 'react'
import { Button, Text, View } from 'react-native'
import TituloC from '../componentes/TituloC'
import FichaCelll from '../componentes/FichaCelll'
import InputC from '../componentes/InputC'


function CadastrarUSU({navigation}){
    return(
        <View style={{  flex: 1, alignItems:"center", backgroundColor: 'rgba(95, 36, 159, 1)'}}>
           
            <TituloC nome='Faça seu Cadastro'/>
            <FichaCelll nome='FichaCell'/>

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 50, marginStart:-300 }}>Nome</Text>
            <InputC nome="Digite seu Nome" />

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 15, marginStart:-300 }}>Email</Text>
            <InputC nome="Digite seu Email" />

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 15, marginStart:-300 }}>Senha</Text>
            <InputC nome="Digite sua Senha" modoSenha={true}/>

            <Text style={{ color: '#fff', fontSize: 16, marginTop: 15, marginStart:-220}}>Confirme a Senha</Text>
            <InputC nome="Confirme a senha" modoSenha={true} />
            
            <Button title='Salvar'
            //onPress={() => navigation.navigate('Login')}
            onPress={()=> console.log(nome)}
            />

        </View>
    )
}
export default CadastrarUSU