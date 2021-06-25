import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let arv = getRandomInt(3);

const Pack = props => {
    return (
        <View style={styles.container}>
            <View style={styles.containerBox}>
                <View style={styles.Box}>
                    <Text style={styles.text}>{props.array[arv][1][0]}</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.text}>{props.array[arv][1][1]}</Text>
                </View>
            </View>
            <View style={styles.containerBox}>
                <View style={styles.Box}>                
                    <Text style={styles.text}>{props.array[arv][1][2]}</Text>
                </View>
                <View style={styles.Box}>
                    <Text style={styles.text}>{props.array[arv][1][3]}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
   
    text: {
        textAlign: 'center',
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

export default Pack;