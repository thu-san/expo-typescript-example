import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import AchievementsScreen from 'screens/AchievementsScreen';
import SettingsScreen from 'screens/SettingsScreen';
import SelectStageScreen from 'screens/SelectStageScreen';

export default createAppContainer(
  createStackNavigator(
    {
      TabStack: createBottomTabNavigator({
        HomeScreen,
        AchievementsScreen,
        SettingsScreen
      }),
      SelectStageScreen
    },
    {
      mode: 'modal',
      headerMode: 'none'
    }
  )
);
