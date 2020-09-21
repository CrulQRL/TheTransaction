import React from 'react';
import { TextInput, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import colors from 'themes/Colors'

const SearchBar = ({ onChangeText, onSortPressed}) => {
    return(
        <View style={styles.container}>
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            <Image style={styles.searchIcon} source={require('assets/icons/search.png')}/>
            <TextInput placeholder='Cari nama, bank, atau nominal' style={styles.searchInput} onChangeText={onChangeText}/>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', padding: 12}} onPress={onSortPressed}>
                <Text style={styles.sortLabel}>URUTKAN</Text>
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                <Image style={styles.arrowIcon} source={require('assets/icons/down-arrow.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6
    },
    searchIcon: {
        width: 24,
        height: 24,
        tintColor: '#cccccc',
        marginHorizontal: 6
    },
    searchInput: {
        fontSize: 13,
        flex: 1,
        marginVertical: 4
    },
    sortLabel: {
        fontSize: 12,
        color: colors.primary,
        fontWeight: 'bold'
    },
    arrowIcon: {
        width: 14,
        height: 14,
        tintColor: colors.primary,
        marginStart: 6
    }
});

export default SearchBar;