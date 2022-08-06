import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import { Card } from '../../components';
import { styles } from './styles';

const GameOver = ({ onRestart, rounds, choice }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/game-over.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Card style={styles.card}>
        <Text style={styles.title}>Intentos: {rounds}</Text>
        <Text style={styles.title}>El numero era: {choice}</Text>
      </Card>
      <Button title="Nuevo juego" onPress={onRestart} />
    </View>
  );
};

export default GameOver;
