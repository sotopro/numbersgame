import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
  },
});
