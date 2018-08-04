import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMaps = props =>{
    let userLocationMarker = null;
    
    if(userLocationMarker){
        userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
    }    
    return(
        <View style={styles.mapContainer}>
            <MapView  
             initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }} 
              region={props.userLocation}
            style={styles.map}/>
            {userLocationMarker}
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer:{
         width:'100%',
         height: 200
    },
    map:{
        width:'100%',
        height:'100%' 
    }
});

export default usersMaps;