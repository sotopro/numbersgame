import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from './components';
import GameScreen from './screens/game-screen';
import StartGame from './screens/start-game';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Thin': require('../assets/fonts/Lato-Thin.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  });

  const title = !userNumber ? 'Adivina el numero' : 'Inicio de Juego';
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  if (!loaded) {
    return null;
  }

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen userOption={userNumber} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} />
      {content}
    </SafeAreaView>
  );
}
