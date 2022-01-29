import * as React from "react";
import { Button, View, Text, ScrollView } from "react-native";
import InputC from "../componentes/InputC";
import TituloC from "../componentes/TituloC";
import { firestore } from "../firebase";

function CadastroAP({ navigation, route }) {
  const celular = route.params.celular;

  const [modelo, setModelo] = React.useState(celular.modelo || "");
  const [marca, setMarca] = React.useState(celular.marca || "");
  const [ano, setAno] = React.useState(celular.ano || "");
  const [processador, setProcessador] = React.useState(
    celular.processador || ""
  );
  const [ram, setRam] = React.useState(celular.ram || "");
  const [valor, setValor] = React.useState(celular.valor || "");
  const [descricao, setDescricao] = React.useState(celular.descricao || "");

  function cadastrar() {
    if (celular.id) {
      firestore
        .collection("celulares")
        .doc(celular.id)
        .set({ modelo, marca, ano, processador, ram, valor, descricao })
        .then(() => navigation.push("Home"))
        .catch(() => console.log("erro"));
    } else {
      firestore
        .collection("celulares")
        .add({ modelo, marca, ano, processador, ram, valor, descricao })
        .then(() => navigation.push("Home"))
        .catch(() => console.log("erro"));
    }
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Tela de Cadastro Aparelho</Text>
      <ScrollView>
        <Text
          style={{
            color: "#000",
            fontSize: 16,
            marginTop: 50,
            marginStart: 10,
          }}
        >
          Nome
        </Text>
        <InputC
          nome="Nome do Dispositivo"
          value={modelo}
          onChange={setModelo}
        />

        <Text
          style={{ color: "#000", fontSize: 16, marginTop: 0, marginStart: 10 }}
        >
          Marca
        </Text>
        <InputC nome="Marca do Dispositivo" value={marca} onChange={setMarca} />

        <Text
          style={{ color: "#000", fontSize: 16, marginTop: 0, marginStart: 10 }}
        >
          Ano de Lançamento
        </Text>
        <InputC nome="ano do Dispositivo" value={ano} onChange={setAno} />

        <Text
          style={{ color: "#000", fontSize: 16, marginTop: 0, marginStart: 10 }}
        >
          Processador
        </Text>
        <InputC
          nome="Processador do Dispositivo"
          value={processador}
          onChange={setProcessador}
        />

        <Text
          style={{ color: "#000", fontSize: 16, marginTop: 0, marginStart: 10 }}
        >
          Mémoria Ram
        </Text>
        <InputC
          nome="Memoria Ram do Dispositivo"
          value={ram}
          onChange={setRam}
        />

        <Text
          style={{ color: "#000", fontSize: 16, marginTop: 0, marginStart: 10 }}
        >
          Valor
        </Text>
        <InputC nome="Valor do Dispositivo" value={valor} onChange={setValor} />

        <Text
          style={{ color: "#000", fontSize: 16, marginTop: 0, marginStart: 10 }}
        >
          Descrição
        </Text>
        <InputC
          nome="Descrição do Dispositivo"
          value={descricao}
          onChange={setDescricao}
        />
      </ScrollView>

      <Button title="Salvar" onPress={() => cadastrar()}></Button>

      <Button
        title="Voltar Home"
        onPress={() => navigation.navigate("Sobre")}
      ></Button>
    </View>
  );
}
export default CadastroAP;
