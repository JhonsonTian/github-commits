// @flow
import * as React from 'react';
import { View, StatusBar, Platform } from 'react-native';

type Props = {
  backgroundColor: string,
  height?: number,
};

function MyStatusBar({ backgroundColor, height, ...props }: Props) {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <View style={{ backgroundColor, width: '100%', height }} />
      ) : (
        <StatusBar backgroundColor={backgroundColor} {...props} />
      )}
    </>
  );
}

MyStatusBar.defaultProps = {
  height: 20,
};

export default MyStatusBar;
