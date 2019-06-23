// @flow
import * as React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { Header } from '../../components/Header';
import { MyStatusBar } from '../../components/MyStatusBar';
import { ListItem } from './components/ListItem';
import { commitsList } from '../../libs/apis';
import styles from './styles';

type Props = {
  navigation: Object,
};

type State = {
  repoName: string,
  page: number,
  loading: boolean,
  data: Array<Object>,
  showFooterLoading: boolean,
  refreshing: boolean,
};

class CommitsList extends React.Component<Props, State> {
  state = {
    repoName: this.props.navigation.getParam('data'),
    page: 1,
    loading: true,
    data: [],
    showFooterLoading: true,
    refreshing: false,
  };

  componentDidMount() {
    const { repoName, page } = this.state;
    const { navigation } = this.props;
    commitsList(repoName, page, (err, list) => {
      if (!err) {
        this.setState((prevState) => {
          const showFooterLoading = !(list.length < 30);
          const data = [...prevState.data, ...list];
          return { data, loading: false, refreshing: false, showFooterLoading };
        });
      } else {
        alert('Fetch data error');
        navigation.goBack();
      }
    });
  }

  onEndReached = () => {
    const { refreshing, showFooterLoading } = this.state;
    if (!refreshing && showFooterLoading) {
      // prevent multiple adding data to list
      // prevent fetch data when no loading at footer / no more data
      this.setState((prevState) => {
        const page = prevState.page + 1;
        return {
          refreshing: true,
          page,
        };
      }, this.componentDidMount);
    }
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
    const { data, loading, showFooterLoading } = this.state;
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
        {loading ? (
          <ActivityIndicator size="large" color={styles.$blue} style={styles.activityIndicator} />
        ) : (
          <FlatList
            data={data}
            renderItem={this.onListRender}
            keyExtractor={item => item.sha}
            contentContainerStyle={styles.listContainer}
            onEndReachedThreshold={0.1}
            onEndReached={this.onEndReached}
            ListFooterComponent={
              showFooterLoading ? (
                <View style={styles.footer}>
                  <ActivityIndicator size="large" color={styles.$blue} />
                </View>
              ) : null
            }
          />
        )}
      </View>
    );
  }
}

export default CommitsList;
