// @flow
import * as React from 'react';
import { View, TextInput } from 'react-native';
import { Header } from '../../components/Header';
import { MyStatusBar } from '../../components/MyStatusBar';
import { CustomButton } from '../../components/CustomButton';
import styles from './styles';

function InputUserName() {
  const [userName, setUserName] = React.useState('');

  const onUserNameTextChange = (text) => {
    setUserName(text);
  };

  const onNextPress = () => {
    console.log(userName);
  };

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor={styles.$blue} />
      <Header title="Login" />
      <TextInput
        placeholder="User Name"
        style={styles.textInput}
        onChangeText={onUserNameTextChange}
      />
      <CustomButton text="Next" onPress={onNextPress} style={styles.button} />
    </View>
  );
}

export default InputUserName;
