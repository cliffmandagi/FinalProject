import React from 'react';
import { Platform, Dimensions, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' , paddingLeft: 15,paddingRight:15 }}>
          <Text style={{ fontSize: 25, fontWeight : 'bold'}}> 
                    Welcome and Greeting
            </Text>
          <Text >&emsp;&emsp; Fakultas Ilmu Komputer, Universitas Klabat ini dibuat untuk melayani kebutuhan informasi bagi Staff, Dosen, Mahasiswa, alumni, pengguna lulusan, dan masyarakat umum. Website ini berisikan Informasi organisasional, akademik, maupun berita-berita yang sedang dan akan terjadi di Fakultas Ilmu Komputer, Universitas KLabat. Melalui website ini semua pihak bisa mendapatkan informasi yang terpercaya dan dapat meningkatkan citra serta meningkatkan kepercayaan terhadap Fakultas Ilmu Komputer, Universitas Klabat.</Text>
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
            headerTintColor: 'white',
            headerStyle: {
                borderBottomColor: 'transparent',
                backgroundColor: '#3575D3',
            },
            headerTitle: "FIK Information App"
        }
  }
});

export default createAppContainer(StackNavigator);