import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from './components';
import GameOver from './screens/game-over';
import GameScreen from './screens/game-screen';
import StartGame from './screens/start-game';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [loaded] = useFonts({
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Black': require('../assets/fonts/Lato-Black.ttf'),
    'Lato-Thin': require('../assets/fonts/Lato-Thin.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  });

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const onRestartGame = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  if (!loaded) {
    return null;
  }

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userOption={userNumber} onGameOver={onGameOver} />;
  } else if (guessRounds > 0) {
    content = <GameOver choice={userNumber} rounds={guessRounds} onRestart={onRestartGame} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina el numero" />
      {content}
    </SafeAreaView>
  );
}
