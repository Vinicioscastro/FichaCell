import * as React from "react";
import { Button, View, Text, Image } from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Card(props, { navigation }) {
  const modelo = props.modelo;
  const marca = props.marca;
  const ano = props.ano;
  const processador = props.processador;
  const ram = props.ram;
  const valor = props.valor;
  const descricao = props.descricao;

  return (
    <View style={{ flex: 1, flexDirection: "row", padding: 20 }}>
      <View
        style={{
          flex: 0.2,
          width: 50,
          height: 210,
          backgroundColor: "rgba(95, 36, 159, 1)",
        }}
      ></View>

      <View
        style={{ flex: 2, width: 50, height: 210, backgroundColor: "#FFF" }}
      >
        <Image
          source={require("../src/vinicios.jpeg")}
          style={{
            height: 150,
            width: 100,
            borderRadius: 10,
            flex: 1,
            margin: 20,
          }}
        />
      </View>

      <View
        style={{ flex: 3, width: 50, height: 210, backgroundColor: "#FFF" }}
      >
        <Text style={{ fontSize: 20, marginLeft: 5, marginTop: 7 }}>
          {modelo}
        </Text>
        <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 3 }}>
          {marca} {ano}
        </Text>
        <Text style={{ fontSize: 15, marginLeft: 5, marginTop: 3 }}>
          {processador} {ram} Gb Ram
        </Text>
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            marginTop: 3,
            color: "#FA0707",
          }}
        >
          R$: {valor}
        </Text>
        <Text style={{ fontSize: 12, marginLeft: 5, margin: 7 }}>
          {descricao}{" "}
        </Text>

        <Button
          title="Editar"
          onPress={() => props.onEdite()}
        ></Button>
        <Button
          title="Deletar"
          onPress={() => props.onDelete()}
        ></Button>
      </View>
    </View>
  );
}
