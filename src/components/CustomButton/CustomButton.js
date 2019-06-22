// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
  text: string,
  textSize?: number,
  onPress: Function,
  enablePress?: boolean,
  width?: number,
  height?: number,
  backgroundColor?: string,
  textColor?: string,
  style?: Object,
  textStyle?: Object,
};

function CustomButton({
  text,
  textSize,
  textColor,
  onPress,
  enablePress,
  width,
  height,
  backgroundColor,
  style,
  textStyle,
}: Props) {
  return (
    <View style={{ width, height, backgroundColor, ...style }}>
      <TouchableOpacity
        activeOpacity={enablePress ? 0.8 : 1}
        onPress={onPress}
        style={styles.container}
      >
        <Text style={[styles.text, { fontSize: textSize, color: textColor, ...textStyle }]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

CustomButton.defaultProps = {
  textSize: 14,
  textColor: 'white',
  enablePress: true,
  width: 60,
  height: 25,
  backgroundColor: 'blue',
  textStyle: {},
  style: {},
};

export default CustomButton;
