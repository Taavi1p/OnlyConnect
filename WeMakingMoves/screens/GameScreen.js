import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';


const GameScreen = () => {
    return (
        <View style={{ flex: 1}}>
        <Text>Start screen</Text>
        <View style={styles.containerBox}>
            <View style={styles.Box}></View>
            <View style={styles.Box}></View>
        </View>
        <View style={styles.containerBox}>
            <View style={styles.Box}></View>
            <View style={styles.Box}></View>
        </View>
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
    containerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    Box: {
        height: 150,
        width: 150,
        backgroundColor: 'grey',
        margin: 10,
    }
    
})

export default GameScreen;