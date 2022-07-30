import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { Header, Card } from '../../components';
import colors from '../../constants/colors';
import { styles } from './styles';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      <Text style={styles.title}>Comenzar juego</Text>
      <Card style={styles.card}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Elija un numero</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Confirmar" onPress={() => null} color={colors.secondary} />
          <Button title="Limpiar" onPress={() => null} color={colors.cancelButton} />
        </View>
      </Card>
    </View>
  );
};

export default StartGame;
