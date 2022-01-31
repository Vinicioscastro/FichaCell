import * as React from "react";
import { Button, Text, View, ScrollView } from "react-native";
import FlexDirectionBasics from "../componentes/celular";
import Card from "../componentes/Card";
import { firestore } from "../firebase";
import { useIsFocused } from "@react-navigation/native";

function Home({ navigation }) {
  const isFocused = useIsFocused();
  const [listCelulares, setListCelulares] = React.useState([]);
  async function pegar() {
    const listCelulares = await firestore.collection("celulares").get();
    setListCelulares(
      listCelulares.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      })
    );
  }
  React.useEffect(() => {
    pegar();
  }, [isFocused]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "colun",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <View style={{ flex: 7, flexDirection: "column", width: 400 }}>
        <ScrollView>
          {listCelulares.map((celular) => (
            <Card
              modelo={celular.modelo}
              marca={celular.marca}
              ano={celular.ano}
              processador={celular.processador}
              ram={celular.ram}
              valor={celular.valor}
              descricao={celular.descricao}
              onEdite={() => {
                navigation.push("CadastroAP", { celular });
              }}
              onDelete={async () => {
                await firestore
                  .collection("celulares")
                  .doc(celular.id)
                  .delete();
                await pegar();
              }}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flex: 1,
          margin: 0,
          backgroundColor: "rgba(95, 36, 159, 1)",
          width: 400,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              width: 20,
              backgroundColor: "rgba(95, 36, 159, 1)",
            }}
          >
            <Button
              title="Adicionar"
              onPress={() => navigation.navigate("CadastroAP2")}
            ></Button>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: "rgba(95, 36, 159, 1)",
            }}
          >
            <Button
              title="Sobre"
              onPress={() => navigation.navigate("Sobre")}
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Home;
