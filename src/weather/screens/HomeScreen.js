import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherActions from '../store/WeatherActions';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    Alert,
} from 'react-native';

const HomeScreen = (props) => {

    const [pincode, setPincode] = useState("")
    const weatherDetailsState = useSelector(state => state.weatherReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        // if (weatherDetailsState.hasLoadedDetails) {
        //     props.navigation.push("Weather Details", { pincode, ...weatherDetailsState })
        // }
    });

    const alertPopUp = () =>
        Alert.alert(
            "Pin Code!!",
            "Please Enter the Pin Code",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    const onChangePincode = (text) => {
        setPincode(text)
    }

    const onPressSubmit = () => {
        if (pincode.length < 1) {
            alertPopUp()
        } else {
            const fetchWeatherDetailsAction = WeatherActions.fetchWeatherDetails(pincode);
            dispatch(fetchWeatherDetailsAction)
            if (weatherDetailsState.hasLoadedDetail) {
                props.navigation.push("Weather Details", { pincode, ...weatherDetailsState })
            }
        }
    }

    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.title}>Find out the weather details in your city</Text>
            </View>
            <View style={styles.footer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter the pincode'
                    placeholderTextColor='white'
                    maxLength={6}
                    onChangeText={onChangePincode}>
                </TextInput>
                <Pressable onPress={onPressSubmit}>
                    <View style={styles.buttonBackground}>
                        <Text style={styles.buttonTitle}> Submit </Text>
                    </View>
                </Pressable>
            </View>


        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#009387',
        justifyContent: 'center',
        padding: 40,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 0,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
        paddingTop: 50
    },
    title: {
        fontSize: 45,
        fontWeight: '600',
        color: 'white',
        textAlign: 'left',
        paddingVertical: 20
    },
    textInput: {
        height: 55,
        marginVertical: 34,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 0,
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    buttonBackground: {
        height: 50,
        width: 250,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    buttonTitle: {
        top: 12,
        height: 50,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    }
});