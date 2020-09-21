import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import colors from 'themes/Colors';

import SearchBar from 'components/SearchBar';
import SortModal from './components/SortModal';
import { SortType } from 'constants/index';
import TransactionItem from './components/TransactionItem';
import { searchTransactions, sortTransactions } from 'utils/transactions';

const TransactionList = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [sortOption, setSortOption] = useState(SortType.default);
    const [responseList, setResponseList] = useState([]);
    const [transactionList, setTransactionList] = useState([]);
    const [query, setQuery] = useState('');


    useEffect(() => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = e => {
            if (request.readyState !== 4) {
                return;
            }
            
            if (request.status === 200) {
                var transactions = Object.values(JSON.parse(request.responseText));
                setResponseList(transactions);
                setTransactionList(transactions);
            } else {
                console.warn(e);
            }
        };

        request.open('GET', 'https://nextar.flip.id/frontend-test');
        request.send();
    }, []);

    useEffect(() => {
        if (transactionList.length > 0) {
            setTransactionList(sortTransactions(transactionList, sortOption));
        }
    }, [sortOption]);

    useEffect(() => {
        if (responseList.length > 0 && query != '') {
            setTransactionList(searchTransactions(responseList, query));
        } else if (responseList.length > 0 && query == '') {
            setTransactionList(responseList);
        }

    }, [query])

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar onChangeText={(query) => setQuery(query)} onSortPressed={() => {
                setModalVisible(visible => {
                    if (!visible) {
                        return true;
                    }
                })
            }}/>
            <SortModal visible={modalVisible} selectedOption={sortOption} onSelected={(option) => {
                setModalVisible(false);
                if (option != -1) {
                    setSortOption(prevOption => {
                        if (prevOption != option) {
                            return option;
                        }
                    });
                }
            }}/>
            <FlatList
                style={{marginTop: 12}}
                data={transactionList}
                renderItem={({ item }) => <TransactionItem item={item} onPress={(item) => navigation.navigate('Details', {item: item})}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginStart: 8,
        marginEnd: 8,
        marginTop: 8,
        backgroundColor: colors.background
    }
})

export default TransactionList;