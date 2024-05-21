import React from 'react';
import { Text, View } from 'react-native';


export default function Etapas() {
  return(
    <View class="etapas">
        <label class="procedimentos">

        <Text id="1">
            Aplicativo iniciou normalmente.
        </Text>


        <Text id="2">
            O app solicita que a localização do smartphone esteja ligada no primeiro acesso?
        </Text>
   

        <Text id="3">
            Os termos de uso apareceram ao abrir o app pela primeira vez?
        </Text>


        <Text id="4">
            O app pede para desativar os dados móveis?
        </Text>


        <Text id="5">
            O app avisa o usuário sobre a necessidade de ter o smartphone e o aquecedor no mesmo WiFi?
        </Text>


        <Text id="6">
            É possível realizar normalmente um acesso via convite?
        </Text>

        {/* <script></script> */}

        </label>
    </View>
  );
}



