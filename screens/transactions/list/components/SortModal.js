import React, { useState, useEffect, useRef } from 'react';
import { Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import RadioButton from 'components/RadioButton';
import { SortType } from 'constants/index';

const SortModal = ({visible, selectedOption, onSelected}) => {

    const initialState = useRef(true)
    const [opt, setOpt] = useState(selectedOption);

    useEffect(() => {
        if (initialState.current) {
            initialState.current = false;
        } else {
            onSelected(opt);
        }
    }, [opt]);

    return (
        <Modal visible={visible} transparent={true} onRequestClose={() => onSelected(-1)}>
            <TouchableOpacity  style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}} onPress={() => onSelected(-1)}>
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <RadioButton style={styles.radioButton} checked={opt == SortType.default} label='URUTKAN'/>
                        <RadioButton style={styles.radioButton} checked={opt == SortType.name_asc} label='Nama A-Z' onPress={() => setOpt(SortType.name_asc)}/>
                        <RadioButton style={styles.radioButton} checked={opt == SortType.name_des} label='Nama Z-A' onPress={() => setOpt(SortType.name_des)}/>
                        <RadioButton style={styles.radioButton} checked={opt == SortType.date_asc} label='Tanggal Terbaru' onPress={() => setOpt(SortType.date_asc)}/>
                        <RadioButton style={styles.radioButton} checked={opt == SortType.date_des} label='Tanggal Terlama' onPress={() => setOpt(SortType.date_des)}/>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity >
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingHorizontal: 12,
        paddingVertical: 24,
        width: '80%'
    },
    radioButton: {
        paddingVertical: 14
    }
});

export default SortModal;
