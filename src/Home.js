import * as React from 'react'
import { Button, Text, View, ScrollView } from 'react-native'
import FlexDirectionBasics from '../componentes/celular'
import Card from '../componentes/Card'



function Home({ navigation }) {
    return (

        <View style={{ flex: 1, flexDirection: 'colun', justifyContent: 'center', alignItems: "center", backgroundColor: '#000' }}>
            
                <View style={{ flex: 7, flexDirection: 'column', width: 400 }}>
                    <ScrollView>
                <Card modelo='Iphone 12 Pro Max' marca='Apple' ano='2020' processador='A14 Bionic' ram= '6' valor='8.754,20' descricao='O aparelho top de linha da gigante apple chega com alguns diferenciais considerando o medelo anterior.'> </Card>
                <Card modelo='Iphone 12 Pro Max' marca='Apple' ano='2020' processador='A14 Bionic' ram= '6' valor='8.754,20' descricao='O aparelho top de linha da gigante apple chega com alguns diferenciais considerando o medelo anterior.'> </Card>
                <Card modelo='Iphone 12 Pro Max' marca='Apple' ano='2020' processador='A14 Bionic' ram= '6' valor='8.754,20' descricao='O aparelho top de linha da gigante apple chega com alguns diferenciais considerando o medelo anterior.'> </Card>
                <Card modelo='Iphone 12 Pro Max' marca='Apple' ano='2020' processador='A14 Bionic' ram= '6' valor='8.754,20' descricao='O aparelho top de linha da gigante apple chega com alguns diferenciais considerando o medelo anterior.'> </Card>
                <Card modelo='Iphone 12 Pro Max' marca='Apple' ano='2020' processador='A14 Bionic' ram= '6' valor='8.754,20' descricao='O aparelho top de linha da gigante apple chega com alguns diferenciais considerando o medelo anterior.'> </Card>
                <Card modelo='Iphone 12 Pro Max' marca='Apple' ano='2020' processador='A14 Bionic' ram= '6' valor='8.754,20' descricao='O aparelho top de linha da gigante apple chega com alguns diferenciais considerando o medelo anterior.'> </Card>
                

                 </ScrollView>
                
            </View>
           
            

            <View style={{ flex: 1, margin: 0, backgroundColor: 'rgba(95, 36, 159, 1)', width: 400 }}>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: "center", backgroundColor: '#000' }}>

                    <View style={{ flex: 1, flexDirection: 'column', width: 20, backgroundColor: 'rgba(95, 36, 159, 1)' }}>
                        <Button title='Adicionar'
                            onPress={() => navigation.navigate('CadastroAP')}
                        ></Button>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'rgba(95, 36, 159, 1)' }}>

                        <Button title='Sobre'
                            onPress={() => navigation.navigate('Sobre')}
                        ></Button>

                    </View>


                </View>

            </View>

            
        </View>







    )
}
export default Home