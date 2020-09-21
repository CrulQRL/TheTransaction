import React from 'react';

import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import colors from 'themes/Colors';

const RadioButton = ({checked, label, onPress, style}) => {
    return (
        <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
            <TouchableOpacity style={styles.circle}>
                { checked && <View style={styles.checkedCircle} /> }
            </TouchableOpacity>
            { label && <Text style={styles.label}>{label}</Text> }
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    checkedCircle: {
        width: 9,
        height: 9,
        borderRadius: 4.5,
        backgroundColor: colors.primary
    },
    label: {
        fontSize: 16,
        fontFamily: 'Lato-Semibold'
    }
});

export default RadioButton;