import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let arv = getRandomInt(3);

const Pack = props => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.item}>
                    <Text style={styles.name}>{props.array[arv][1][0]}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>{props.array[arv][1][1]}</Text>
                </View>
                <View style={styles.item}>                
                    <Text style={styles.name}>{props.array[arv][1][2]}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.name}>{props.array[arv][1][3]}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        height: 80,
        width: 80,
        marginTop: 10,
        marginHorizontal: 10,
    },
    container: {
        marginBottom: 30,
    },
    item: {
        justifyContent: 'space-between',
        width: 100,
    },
    name: {
        textAlign: 'center',
        marginTop: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})

export default Pack;