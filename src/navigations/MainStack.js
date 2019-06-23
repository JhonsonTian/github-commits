// @flow
import { createStackNavigator } from 'react-navigation';
import { InputUserName } from '../screens/InputUserName';
import { InputPassword } from '../screens/InputPassword';
import { Homepage } from '../screens/Homepage';

const MainStack = createStackNavigator(
  {
    InputUserName,
    InputPassword,
    Homepage,
  },
  {
    initialRouteName: 'InputUserName',
    headerMode: 'none',
  },
);

export default MainStack;
