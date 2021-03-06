import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

import BeginButton from '../components/BeginButton';

const StartScreen = props => {
    
    const startGame = () => {
        props.navigation.navigate({routeName: 'Game'})
    }
    return (
            <ImageBackground style = {styles.image} source={require('../assets/background.png')}>
                <View style={styles.container}>
                    <View style={styles.buttons}>
                        <BeginButton onClick={startGame}>START</BeginButton>
                    </View>
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    container: {
        flex: 1,
        marginTop: '20%',
        paddingHorizontal: 40
    },
    title: {
        fontSize: 70,
        color: 'black',
        fontFamily: 'avenir-heavy',
        textAlign: 'center',
        marginBottom: 30,
    },
    containerBox: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    number: {
        fontSize: 30,
    },
    text: {
        fontSize: 30,
    },
    input: {
        height: 30,
        width: 60,
        backgroundColor: 'black',
    },
    buttons: {
        alignItems: 'center',
    },
})

export default StartScreen;