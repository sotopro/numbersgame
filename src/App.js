import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from './components';
import GameScreen from './screens/game-screen';
import StartGame from './screens/start-game';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const title = !userNumber ? 'Adivina el numero' : 'Inicio de Juego';
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} />
      {content}
    </SafeAreaView>
  );
}
