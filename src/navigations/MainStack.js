// @flow
import { createStackNavigator } from 'react-navigation';
import { InputUserName } from '../screens/InputUserName';

const MainStack = createStackNavigator(
  {
    InputUserName,
  },
  {
    initialRouteName: 'InputUserName',
    headerMode: 'none',
  },
);

export default MainStack;
