import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    marginTop: 20,
    width: width * 0.8,
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height > 600 ? 20 : 10,
    marginHorizontal: height > 600 ? 20 : 10,
  },
});
