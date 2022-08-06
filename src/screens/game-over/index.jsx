import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, Dimensions } from 'react-native';

import { Card } from '../../components';
import { styles } from './styles';

const GameOver = ({ onRestart, rounds, choice }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get('screen');
    console.warn(dim);
    return dim.height >= dim.width;
  };

  useEffect(() => {
    console.log('useEffect');
    Dimensions.addEventListener('change', () => {
      setIsPortrait(onPortrait());
    });
    return () => {
      Dimensions.removeEventListener('change', () => {
        setIsPortrait(true);
      });
    };
  });

  console.log(isPortrait);

  return (
    <View style={isPortrait ? styles.container : styles.containerLandscape}>
      <Image
        source={require('../../../assets/game-over.jpg')}
        style={isPortrait ? styles.image : styles.imageLandscape}
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
