import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { Card, NumberContainer } from '../../components';
import colors from '../../constants/colors';
import { styles } from './styles';

const generateRamdonBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const ramdonNumber = Math.floor(Math.random() * (max - min)) + min;
  if (ramdonNumber === exclude) {
    return generateRamdonBetween(min, max, exclude);
  } else {
    return ramdonNumber;
  }
};

const GameScreen = ({ userOption }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRamdonBetween(1, 100, userOption));
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>La suposicion del oponente</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <Button title="Menor" onPress={() => null} color={colors.secondary} />
          <Button title="Mayor" onPress={() => null} color={colors.secondary} />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
