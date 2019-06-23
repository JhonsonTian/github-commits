// @flow
import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { MyStatusBar } from '../../components/MyStatusBar';
import { ListItem } from './components/ListItem';
import styles from './styles';

type Props = {
  navigation: Object,
};

type State = {
  data: Array<Object>,
};

class CommitsList extends React.Component<Props, State> {
  state = {
    data: this.props.navigation.getParam('data'),
  };

  onLogoutPress = () => {
    const { navigation } = this.props;
    navigation.navigate('InputUserName');
  };

  onBackPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onListRender = ({ item }: Object) => <ListItem data={item} />;

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={styles.$blue} />
        <Header
          title="Commits"
          showLogoutButton
          onLogoutPress={this.onLogoutPress}
          showBackButton
          onBackPress={this.onBackPress}
        />
        <FlatList
          data={data}
          renderItem={this.onListRender}
          keyExtractor={item => item.sha}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  }
}

export default CommitsList;
