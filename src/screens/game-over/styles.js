import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLandscape: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.6,
    height: height * 0.35,
  },
  imageLandscape: {
    width: width * 0.5,
    height: height * 0.25,
  },
  card: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    paddingVertical: 5,
  },
});
