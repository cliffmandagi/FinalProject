import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import Curriculum from '../screens/Curriculum';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.73
}

const DrawerNavigator =  createDrawerNavigator(
	{
        Home: Home,
        Curriculum: Curriculum
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);