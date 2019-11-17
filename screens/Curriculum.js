import React, { Component } from 'react';
import { Platform, Dimensions, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

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

const TabNavigator = createBottomTabNavigator(
    {
      "Teknik Informatika": TI,
      "Sistem Informasi": SI
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                />
            ),
            headerTitle: "Curriculum"
        };
      }
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