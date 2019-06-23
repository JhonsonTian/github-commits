// @flow
import * as React from 'react';
import { View, TextInput } from 'react-native';
import { Header } from '../../components/Header';
import { MyStatusBar } from '../../components/MyStatusBar';
import { CustomButton } from '../../components/CustomButton';
import styles from './styles';

type Props = {
  navigation: Object,
};

type State = {
  userName: string,
};

class InputUserName extends React.Component<Props, State> {
  state = {
    userName: '',
  };

  onNextPress = () => {
    const { userName } = this.state;
    const { navigation } = this.props;
    navigation.navigate('InputPassword', { userName });
  };

  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={styles.$blue} />
        <Header title="Login" />
        <TextInput
          placeholder="User Name"
          style={styles.textInput}
        />
        <CustomButton text="Next" onPress={this.onNextPress} style={styles.button} />
      </View>
    );
  }
}

export default InputUserName;
