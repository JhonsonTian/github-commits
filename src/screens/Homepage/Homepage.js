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
  repoName: string,
};

class Homepage extends React.Component<Props, State> {
  state = {
    repoName: 'facebook/react-native',
  };

  onSummitPress = () => {
    const { repoName } = this.state;
    const { navigation } = this.props;
    navigation.navigate('CommitsList', { data: repoName });
  };

  onChangeText = (repoName: string) => this.setState({ repoName });

  onLogoutPress = () => {
    const { navigation } = this.props;
    navigation.navigate('InputUserName');
  };

  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={styles.$blue} />
        <Header title="Homepage" showLogoutButton onLogoutPress={this.onLogoutPress} />
        <TextInput
          placeholder="facebook/react-native"
          style={styles.textInput}
          onChangeText={this.onChangeText}
        />
        <CustomButton text="Submit" onPress={this.onSummitPress} style={styles.button} />
      </View>
    );
  }
}

export default Homepage;
