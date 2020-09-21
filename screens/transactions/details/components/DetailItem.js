import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailItem = ({title, subtitle, style}) => {
    return (
        <View style={style}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 14,
        fontFamily: 'Lato-Black'
    },
    subtitle: {
        marginTop: 4,
        fontFamily: 'Lato-Bold',
        fontSize: 14
    }
});

export default DetailItem;