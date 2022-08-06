import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: colors.text,
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: 'Lato-Bold',
  },
  card: {
    flex: 1,
    flexGrow: 0.25,
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 14,
    color: colors.text,
    paddingVertical: 5,
    fontFamily: 'Lato-Regular',
  },
  input: {
    width: '100%',
    maxWidth: 110,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  summaryContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  summaryText: {},
});
