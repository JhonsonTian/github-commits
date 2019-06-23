// @flow
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $blue: '$primaryBlue',
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: '80%',
    height: 50,
    paddingHorizontal: '10rem',
    marginTop: '100rem',
  },
  button: {
    width: '80%',
    height: 50,
    marginTop: '20rem',
    backgroundColor: '$primaryBlue',
  },
  activityIndicator: {
    marginTop: '120rem',
  },
});
