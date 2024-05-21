import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Inicial({ navigation }) {
return (  
<View style={styles.container}>
<Text>Rinnai</Text>
<Button color='red' 
title="Iniciar" 
onPress={() => navigation.navigate('Home')}/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
 },
 });