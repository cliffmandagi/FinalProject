import React, { Component } from 'react';
import { Platform, Dimensions, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

class Home extends Component{
    render(){
        return (
            <View style={{ flex: 1, backgroundColor:'#E6E6E6' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20, marginTop: 10 }}>News</Text>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={require('../assets/news1.jpg')}/>
                            <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>Kunjungan Menteri Pariwisata</Text>
                                <Text style={styles.description}>Kuliah Umum Menteri Pariwisata Republik Indonesia, Dr. Ir. Arief Yahya, M.Sc., di kampus Universitas Klabat, Rabu, 27 Maret 2019 dengan topik "Digital and Millenials Tourism</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={require('../assets/news2.jpg')}/>
                            <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>6th International Scholars Conference, Philippines</Text>
                                <Text style={styles.description}>The International Scholars Conference adalah konferensi penelitian multidisiplin yang diselenggarakan oleh kemitraan dari empat perguruan tinggi, yaitu Adventist University of the Philippines (AUP), Asia-Pacific International University (APIU)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={require('../assets/news3.jpg')}/>
                            <View style={styles.cardHeader}>
                            <View>
                                <Text style={styles.title}>Swakelola APTIKOM untuk pelaku industri rumahan</Text>
                                <Text style={styles.description}>Selama 2 hari, Asosiasi Pendidikan Tinggi Ilmu Komputer (APTIKOM) wilayah Sulawesi Utara telah melangsungkan kegiatan Swakelola dalam rangka Pelatihan Peningkatan Produk Pelaku Industri Rumahan melalui Teknologi Informasi (ICT) di propinsi Sulawesi Utara</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

{/* <View style={{ flex: 1, justifyContent: 'center' , marginHorizontal: 15 }}>
              <Text style={{ fontSize: 25, fontWeight : 'bold', alignSelf: 'center' }}> Welcome and Greeting</Text>
              <Text >&emsp;&emsp; Fakultas Ilmu Komputer, Universitas Klabat ini dibuat untuk melayani kebutuhan informasi bagi Staff, Dosen, Mahasiswa, alumni, pengguna lulusan, dan masyarakat umum. Website ini berisikan Informasi organisasional, akademik, maupun berita-berita yang sedang dan akan terjadi di Fakultas Ilmu Komputer, Universitas KLabat. Melalui website ini semua pihak bisa mendapatkan informasi yang terpercaya dan dapat meningkatkan citra serta meningkatkan kepercayaan terhadap Fakultas Ilmu Komputer, Universitas Klabat.</Text>
    </View> */}
 
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

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    list: {
      paddingHorizontal: 17,
      backgroundColor:"#E6E6E6",
    },
    separator: {
      marginTop: 10,
    },
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 8,
      backgroundColor:"white",
      marginHorizontal: 10,
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
      backgroundColor:"#EEEEEE",
    },
    cardImage:{
      flex: 1,
      height: 180,
      width: null,
    },
    /******** card components **************/
    title:{
      fontSize:18,
      flex:1,
    }, 
    description:{
      fontSize:15,
      color:"#888",
      flex:1,
      marginTop:5,
      marginBottom:5,
    },
    time:{
      fontSize:13,
      color: "#808080",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    iconData:{
      width:15,
      height:15,
      marginTop:5,
      marginRight:5
    },
    timeContainer:{
      flexDirection:'row'
    },
    /******** social bar ******************/
    socialBarContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1
    },
    socialBarSection: {
      justifyContent: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    socialBarlabel: {
      marginLeft: 8,
      alignSelf: 'flex-end',
      justifyContent: 'center',
    },
    socialBarButton:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });   