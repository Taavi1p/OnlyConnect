import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BeginButton = props => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 7,
    },
    text: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'avenir-heavy'
    },
})

export default BeginButton;