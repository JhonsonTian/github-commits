// @flow
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  type?: string,
  name: any,
  size?: number,
  color?: string,
};

function VectorIcon({ type, name, size, color }: Props) {
  let viewIcon = null;
  switch (type) {
    case 'FontAwesome':
      viewIcon = <FontAwesome name={name} size={size} color={color} />;
      break;
    case 'Entypo':
      viewIcon = <Entypo name={name} size={size} color={color} />;
      break;
    case 'MaterialCommunityIcons':
      viewIcon = <MaterialCommunityIcons name={name} size={size} color={color} />;
      break;
    default:
      viewIcon = <MaterialIcons name={name} size={size} color={color} />;
  }
  return viewIcon;
}

VectorIcon.defaultProps = {
  size: 30,
  color: 'white',
  type: '',
};

export default VectorIcon;
