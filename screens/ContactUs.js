import React from 'react';
import { Platform, Dimensions, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

const ContactUs = () => {
}
 
const StackNavigator =  createStackNavigator({
    ContactUs: ContactUs
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
            headerTintColor: 'white',
            headerStyle: {
                borderBottomColor: 'transparent',
                backgroundColor: '#3575D3',
            },
            headerTitle: "Contact Us"
        }
  }
});

export default createAppContainer(StackNavigator);