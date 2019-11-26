import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class MapShow extends React.Component {
  render() {
    return (
        <MapView style={styles.mapStyle}
            region={{
                latitude: 1.417796,
                longitude: 124.985875,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: 150,
  },
});