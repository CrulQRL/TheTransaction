import React from 'react';
import { Image, StyleSheet, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import colors from 'themes/Colors';

import DetailItem from './components/DetailItem';
import { formatThousandSeparator } from 'utils/currency';
import { formatDate } from 'utils/date';

const TransactionDetails = ({route, navigation}) => {
    const { item } = route.params 
    return (
        <SafeAreaView style={styles.container}>
            <View style={{backgroundColor: '#ffffff'}}>
                <View style={styles.idContainer}>
                <Text style={styles.titleText}>ID TRANSAKSI:#{item.id}</Text>
                    { /* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                    <Image style={styles.copyIcon} source={require('assets/icons/copy.png')}/>
                </View> 
                <View style={styles.detailHeader}>
                    <Text style={{padding: 16, ...styles.titleText}}>DETAIL TRANSAKSI</Text>
                    <TouchableOpacity style={{padding: 16, marginRight: 8}} onPress={() => navigation.goBack()}>
                        <Text style={{...styles.subtitleText, color: colors.primary}}>Tutup</Text>
                    </TouchableOpacity>
                </View> 
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 16, marginBottom: 16}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.sender_bank.toUpperCase()}</Text>
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    <Image style={styles.arrowIcon}source={require('assets/icons/right-arrow.png')}/>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.beneficiary_bank.toUpperCase()}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 16}}>
                    <DetailItem title={item.beneficiary_name.toUpperCase()} subtitle={item.account_number}/>
                    <DetailItem title='NOMINAL' subtitle={'Rp' + formatThousandSeparator(item.amount)} style={{marginEnd: 64}}/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginBottom: 16}}>
                    <DetailItem title='BERITA TRANSFER' subtitle={item.remark}/>
                    <DetailItem title='KODE UNIK' subtitle={item.unique_code} style={{marginEnd: 64}}/>
                </View>
                <View style={{paddingHorizontal: 16, marginBottom: 16}}>
                    <DetailItem title='WAKTU DIBUAT' subtitle={formatDate(item.created_at)}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 24,
        backgroundColor: colors.background
    },
    idContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.background,
        padding: 16
    },
    detailHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: '#e6e6e6',
    },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    subtitleText: {
        fontSize: 14
    },
    copyIcon: {
        width: 16,
        height: 16,
        tintColor: colors.primary,
        marginHorizontal: 6
    },
    arrowIcon: {
        width: 12,
        height: 12,
        marginHorizontal: 4,
    }
})

export default TransactionDetails;