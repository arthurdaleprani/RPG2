import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function recuperarSenha({ }) {
    return (
      <View style={styles.container}>
        <Text style={styles.Esqtxt}>Esqueceu Sua Senha</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Recuperar Senha</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
