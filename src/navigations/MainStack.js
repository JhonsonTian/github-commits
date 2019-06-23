// @flow
import { createStackNavigator } from 'react-navigation';
import { InputUserName } from '../screens/InputUserName';
import { InputPassword } from '../screens/InputPassword';
import { Homepage } from '../screens/Homepage';
import { CommitsList } from '../screens/CommitsList';

const MainStack = createStackNavigator(
  {
    InputUserName,
    InputPassword,
    Homepage,
    CommitsList,
  },
  {
    initialRouteName: 'InputUserName',
    headerMode: 'none',
  },
);

export default MainStack;
