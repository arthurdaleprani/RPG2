import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';



export default function login({RPG}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Logintxt}>LOGIN</Text>
      <Link to={{screen:"resgistro"}}>Registro</Link>
      <Link to ={{screen:"recuperarSenha"}}>Esqueceu a Senha</Link>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    flexDirection: 'column',
    padding: 10,
    margin: 15,
    justifyContent: 'center',
    backgroundColor:'red',
    height:500,
    alignItems:'center'

}});