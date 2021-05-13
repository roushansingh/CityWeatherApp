import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';

const WeatherHeader = (props) => {

    const { cityName, weather, temprature } = props.info

    const onClickBack = () => {
        props.onBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.cityNameText}>{cityName}</Text>
            <Text style={styles.weatherText}>{weather}</Text>
            <Text style={styles.tempratureText}>{`${temprature.toFixed(0)}°C`}</Text>
        </View>
    );
}

export default WeatherHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#009387',
        paddingVertical: 24,
    },
    backButtonBackground: {
        left: 8,
        top: 40,
        position: 'absolute',
        height: 50,
    },
    backButtonTitle: {
        top: 12,
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
    },
    cityNameText: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: '300',
        color: 'white',
    },
    weatherText: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '300',
        color: 'white',
    },
    tempratureText: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 80,
        fontWeight: '200',
        color: 'white',
    }
});