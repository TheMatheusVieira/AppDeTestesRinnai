
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { Button, Header } from "@rneui/base";

export default function Home({ route, etapas }) {
  return(
    <View>
       <Header
       backgroundColor="red"
       barStyle="default"
       centerComponent={{
         text: "RINNAI",
         style: { color: "#fff" }
       }}
       containerStyle={{ width: 'full' }}
       leftComponent={{ icon: "menu", color: "#fff" }}
       placement="left"
       rightComponent={{ icon: "home", color: "#fff" }}
     />

    
      <Text style={styles.etapas}>Teste</Text>

        <View style={styles.btconfere}>
            <Button color="red"> Não confere </Button>
            <Button color="green"> Confere </Button>
        </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  etapas: {
  color: 'black',
  textAlign: 'center',
  fontSize: 17,
  paddingTop: 250,
  paddingBottom: 100,
   },

   btconfere: {
    gap: 40,
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    borderRadius: 5,
   },

   });

