import React, { Component } from 'react';
import { Platform, Dimensions, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const TabNavigator = createBottomTabNavigator({
      "Teknik Informatika": TI,
      "Sistem Informasi": SI
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName == "Teknik Informatika") {
              iconName = `ios-information-circle-outline`;
          } else if (routeName == "Sistem Informasi") {
              iconName = `ios-information-circle-outline`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
          activeTintColor: '#3575D3',
          inactiveTintColor: 'gray',
      },
      initialRouteName: 'Teknik Informatika',
})

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
            headerTitle: "Curriculum",
            headerTintColor: 'white',
            headerStyle: {
                borderBottomColor: 'transparent',
                backgroundColor: '#3575D3',
            }
        }
  }
});

export default createAppContainer(StackNavigator);
