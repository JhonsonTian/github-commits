// @flow
import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { VectorIcon } from '../VectorIcon';

type Props = {
  title: string,
  onBackPress?: Function,
  onLogoutPress?: Function,
  showBackButton?: boolean,
  showLogoutButton?: boolean,
};

function Header({
  title, showLogoutButton, onLogoutPress, onBackPress, showBackButton,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {showBackButton && (
          <TouchableOpacity onPress={onBackPress} activeOpacity={0.8}>
            <VectorIcon name="arrow-back" color={styles.$white} size={30 * styles.$size} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.middle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.side}>
        {showLogoutButton && (
          <TouchableOpacity onPress={onLogoutPress} activeOpacity={0.8}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

Header.defaultProps = {
  showBackButton: false,
  onLogoutPress: () => {},
  onBackPress: () => {},
  showLogoutButton: false,
};

export default Header;
