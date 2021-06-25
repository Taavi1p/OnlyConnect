import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import GameScreen from '../screens/GameScreen';

const Navigator = createStackNavigator({
    Start:{
        screen: StartScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },

    Game: {
        screen: GameScreen,
        navigationOptions: () => ({
            header: null,
          }),
    },
})

export default createAppContainer(Navigator);