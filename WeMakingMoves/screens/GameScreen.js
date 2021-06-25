import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import Pack from '../packs/Pack.js';
import data from '../data/info.js';


const GameScreen = () => {
    return (
        <View style={{ flex: 1}}>
        <Text>Start screen</Text>
        <Pack array={data}/>
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