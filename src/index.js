import * as React from 'react';
import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import MainStack from './navigations/MainStack';

const { width, height } = Dimensions.get('window');

EStyleSheet.build({
  $primaryBlue: '#0B5195',
  $primaryWhite: '#FFFFFF',

  $window: {
    width,
    height,
  },
  $rem: width / 360,
});

export default MainStack;
