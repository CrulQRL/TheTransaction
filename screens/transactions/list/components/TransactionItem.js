import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import SuccessStatus from './SuccessStatus';
import PendingStatus from './PendingStatus';
import colors from 'themes/Colors';
import { formatThousandSeparator } from 'utils/currency';
import { formatDate } from 'utils/date';

const TransactionItem = ({item, onPress}) => {

    const isSuccess = item.status == 'SUCCESS' ? true : false;

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
            <View style={[styles.sideLine, isSuccess ? {backgroundColor: colors.secondary} : {backgroundColor: colors.primary}]}/>
            <View style={styles.details}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'Lato-Black', fontSize: 14}}>{item.sender_bank.toUpperCase()}</Text>
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    <Image style={styles.arrowIcon}source={require('assets/icons/right-arrow.png')}/>
                    <Text style={{fontFamily: 'Lato-Black', fontSize: 14}}>{item.beneficiary_bank.toUpperCase()}</Text>
                </View>
                <Text style={{textTransform: 'uppercase', color: '#202020', ...styles.text}}>{item.beneficiary_name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>Rp{formatThousandSeparator(item.amount)}</Text>
                    <View style={styles.cirlce}/>
                    <Text style={styles.text}>{formatDate(item.created_at)}</Text>
                </View>
            </View>
            {isSuccess 
                ?   <SuccessStatus style={styles.transactionStatus}/>
                :   <PendingStatus style={styles.transactionStatus}/>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopEndRadius: 12,
        borderBottomEndRadius: 12,
        marginTop: 8
    },
    sideLine: {
        width: 8,
        borderTopStartRadius: 12,
        borderBottomStartRadius: 12
    },
    primarySideLine: {
        backgroundColor: colors.primary
    },
    secondarySideLine: {
        backgroundColor: colors.secondary
    },
    details: {
        marginVertical: 16,
        marginLeft: 16,
        marginRight: 12
    },
    transactionStatus: {
        marginLeft: 'auto',
        marginRight: 16,
        alignSelf: 'center'
    },
    cirlce: {
        width: 6, 
        height: 6,
        borderRadius: 3,
        backgroundColor: '#202020',
        marginStart: 4,
        marginEnd: 4,
        alignSelf: 'flex-end',
        marginBottom: 6
    },
    arrowIcon: {
        width: 12,
        height: 12,
        marginHorizontal: 4,
    },
    text: {
        fontSize: 14,
        fontFamily: 'Lato-Semibold'
    }
});

export default TransactionItem;