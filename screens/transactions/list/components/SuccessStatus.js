import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SuccessStatus = ({style}) => {
    return (
        <View style={style}>
            <Text style={styles.label}>Berhasil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        alignSelf: 'baseline',
        textAlignVertical: 'center',
        backgroundColor: '#5ab287',
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontSize: 14,
        borderRadius: 6,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});

export default SuccessStatus;