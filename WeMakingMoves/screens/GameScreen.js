import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

//addime start screen nupu siia

const GameScreen = () => {
    return (
        <View style={{ flex: 1}}>
        <Text>Start screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    text: {
        fontSize: 30,
        color: 'white'
    },
    
})

export default GameScreen;