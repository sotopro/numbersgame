import { SafeAreaView, View } from 'react-native';

import StartGame from './screens/start-game';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartGame />
    </SafeAreaView>
  );
}
