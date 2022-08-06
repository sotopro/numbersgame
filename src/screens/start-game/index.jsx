import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Header, Card, Input } from '../../components';
import colors from '../../constants/colors';
import { styles } from './styles';

const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const onNumberChange = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header title="Adivina el numero" />
        <Text style={styles.title}>Comenzar juego</Text>
        <Card style={styles.card}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Elija un numero</Text>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={onNumberChange}
              value={enteredValue}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Confirmar" onPress={() => null} color={colors.secondary} />
            <Button title="Limpiar" onPress={() => null} color={colors.cancelButton} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
