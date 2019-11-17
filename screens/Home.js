import React from 'react';
import { Platform, Dimensions, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

const Home = () => {
    return (
        <View>
            <Text> This is Home </Text>
        </View>
    )
}

const StackNavigator =  createStackNavigator({
    Home: Home
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