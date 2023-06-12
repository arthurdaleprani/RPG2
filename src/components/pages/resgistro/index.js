import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function resgistro({ }) {
    return (
      <View style={styles.container}>
        <Text style={styles.Reg}>Registro</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Registrar</Text>
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