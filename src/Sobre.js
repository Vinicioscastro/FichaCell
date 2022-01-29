import * as React from "react";
import { Button, Text, View, Image, Linking  } from "react-native";

function Sobre({ navigation }) {
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>


            <Image source={require('./vinicios.jpeg')} style={{
                marginTop: 80,
                height: 230,
                width: 200,
                borderRadius: 55
            }} />

            <Text style={{ fontSize: 23, color: 'rgba(95, 36, 159, 1)', marginTop: 50 }}>Desenvolvedor</Text>

            <Text
                style={{
                    margin: 20,
                    fontSize: 18,
                    textAlign: 'center',
                    
                }}
            >Iker Vinícios Castro, 22 anos, Aluno do IFMA Campus Caxias, Estudante do Curso de Ciência da Computação
            </Text>

            <Text style={{ fontSize: 23, color: 'rgba(95, 36, 159, 1)', marginVertical: 18 }}>Siga</Text>

            <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('https://www.instagram.com/iker_vinicios_castro/')}>
                Instagram
            </Text>
            <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('https://www.github.com/vinicioscastro/')}>
                GitHub
            </Text>
            <Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('https://br.linkedin.com/in/vinicios-castro-999b0a192')}>
                Linkedin
            </Text>
            
            

            <Button title="Volta para tela de inicio"
                onPress={() => navigation.navigate('Home')}
            ></Button>
        </View>
    )
}

export default Sobre