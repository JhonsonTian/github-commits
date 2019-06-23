// @flow
import * as React from 'react';
import { View, TextInput, ActivityIndicator } from 'react-native';
import { Header } from '../../components/Header';
import { MyStatusBar } from '../../components/MyStatusBar';
import { CustomButton } from '../../components/CustomButton';
import { commitsList } from '../../libs/apis';
import styles from './styles';

type Props = {
  navigation: Object,
};

type State = {
  repoName: string,
  loading: boolean,
};

class Homepage extends React.Component<Props, State> {
  state = {
    repoName: 'facebook/react-na',
    loading: false,
  };

  onSummitPress = () => {
    const { repoName } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });
    commitsList(repoName, (err, data) => {
      if (!err) {
        navigation.navigate('CommitsList', { data });
      } else {
        alert('Repo Not Found');
      }
      this.setState({ loading: false });
    });
  };

  onChangeText = (repoName: string) => this.setState({ repoName });

  onLogoutPress = () => {
    const { navigation } = this.props;
    navigation.navigate('InputUserName');
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={styles.$blue} />
        <Header title="Homepage" showLogoutButton onLogoutPress={this.onLogoutPress} />
        {loading ? (
          <ActivityIndicator size="large" color={styles.$blue} style={styles.activityIndicator} />
        ) : (
          <>
            <TextInput
              placeholder="facebook/react-native"
              style={styles.textInput}
              onChangeText={this.onChangeText}
            />
            <CustomButton text="Submit" onPress={this.onSummitPress} style={styles.button} />
          </>
        )}
      </View>
    );
  }
}

export default Homepage;
