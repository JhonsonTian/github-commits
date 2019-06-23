// @flow
import * as React from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import { Header } from '../../components/Header';
import { MyStatusBar } from '../../components/MyStatusBar';
import { CustomButton } from '../../components/CustomButton';
import { login } from '../../libs/apis';
import styles from './styles';

type Props = {
  navigation: Object,
};

type State = {
  userName: string,
  password: string,
  loading: boolean,
};

class InputPassword extends React.Component<Props, State> {
  state = {
    // eslint-disable-next-line
    userName: this.props.navigation.getParam('userName'),
    password: '',
    loading: false,
  };

  onBackButtonPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onSummitPress = () => {
    const { userName, password } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });
    login(userName, password, (err, data) => {
      if (!err) {
        navigation.navigate('Homepage');
      } else {
        if (data.status === 401) {
          alert('Invalid Username / Password');
        } else if (data.status === 403) {
          alert('Maximum number of login attempts exceeded. Please try again later');
        } else {
          alert('data not found');
        }
        navigation.goBack();
      }
      this.setState({ loading: false });
    });
  };

  onChangeText = (password: string) => this.setState({ password });

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={styles.$blue} />
        <Header title="Login" showBackButton onBackPress={this.onBackButtonPress} />
        {loading ? (
          <ActivityIndicator size="large" color={styles.$blue} style={styles.activityIndicator} />
        ) : (
          <>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChangeText={this.onChangeText}
              secureTextEntry
            />
            <CustomButton text="Submit" onPress={this.onSummitPress} style={styles.button} />
          </>

        )}
      </View>
    );
  }
}

export default InputPassword;
