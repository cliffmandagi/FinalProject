import React, { Component } from 'react';
import { Platform, Dimensions, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

class TI extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is TI</Text>
        </View>
      );
    }
}

class SI extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is SI</Text>
        </View>
      );
    }
}

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Teknik Informatika") {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  } else if (routeName === "Sistem Informasi") {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
    {
      "Teknik Informatika": TI,
      "Sistem Informasi": SI
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
              getTabBarIcon(navigation, focused, tintColor),
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            ),
            headerTitle: "Curriculum"
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
);

const StackNavigator =  createStackNavigator({
    TabNavigator: TabNavigator
},{
    defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            ),
            headerTitle: "FIK Information App"
        }
  }
});

export default createAppContainer(StackNavigator);