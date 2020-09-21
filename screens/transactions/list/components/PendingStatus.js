import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import colors from 'themes/Colors';

const PendingStatus = ({style}) => {
    return (
        <View style={style}>
            <Text style={styles.label}>Pengecekan</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        alignSelf: 'baseline',
        textAlignVertical: 'center',
        backgroundColor: '#ffffff',
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontSize: 14,
        borderRadius: 6,
        color: '#000000',
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: colors.primary
    }
});

export default PendingStatus