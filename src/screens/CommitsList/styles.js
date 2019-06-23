// @flow
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $blue: '$primaryBlue',
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listContainer: {
    paddingVertical: '10rem',
    width: '$window.width',
  },
});
