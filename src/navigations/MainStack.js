// @flow
import { createStackNavigator } from 'react-navigation';
import { InputUserName } from '../screens/InputUserName';
import { InputPassword } from '../screens/InputPassword';

const MainStack = createStackNavigator(
  {
    InputUserName,
    InputPassword,
  },
  {
    initialRouteName: 'InputUserName',
    headerMode: 'none',
  },
);

export default MainStack;
