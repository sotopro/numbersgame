import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, Button, Alert } from 'react-native';

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

const GameScreen = ({ userOption, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRamdonBetween(1, 100, userOption));
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const onHandleNextGuess = (direction) => {
    console.warn(currentGuess, userOption);
    if (
      (direction === 'lower' && currentGuess < userOption) ||
      (direction === 'greater' && currentGuess > userOption)
    ) {
      Alert.alert('Error', 'La direccion elegida es incorrecta', [
        { text: 'Aceptar', style: 'destructive' },
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRamdonBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds((current) => current + 1);
  };

  useEffect(() => {
    if (currentGuess == userOption) {
      onGameOver(rounds);
    }
  }, [currentGuess, userOption, onGameOver]);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>La suposicion del oponente</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <Button
            title="Menor"
            onPress={() => onHandleNextGuess('lower')}
            color={colors.secondary}
          />
          <Button
            title="Mayor"
            onPress={() => onHandleNextGuess('greater')}
            color={colors.secondary}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
