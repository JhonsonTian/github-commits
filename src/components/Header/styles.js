// @flow

import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $white: '$primaryWhite',
  $size: '$rem',
  container: {
    height: 50,
    width: '100%',
    backgroundColor: '$primaryBlue',
    flexDirection: 'row',
  },
  side: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '23rem',
    color: '$primaryWhite',
  },
  logoutText: {
    fontSize: '14rem',
    color: '$primaryWhite',
  },
});
