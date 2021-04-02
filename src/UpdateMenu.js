import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react/cjs/react.development';

import Status from './components/Status';
import UtilButton from './components/UtilButton';

export default function UpdateMenu() {
    let [text, setText] = useState('Status');
    return(
        <View style={styles.central}>
            <Text style={{textAlign: 'left', marginBottom: 3}}>{text}</Text>
            <Status />
            <View style={styles.utilView}>
                <UtilButton 
                    title='CLEAR'
                    color='#EB7B57'
                />
                <UtilButton 
                    title='UPDATE'
                    color='#56CCF2'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    central: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'rgba(52, 52, 52, 0.8)',
        margin: 30
    },
    textArea: {
        borderWidth: .3,
        borderRadius: 9,
    },
    p: {
        textAlign: 'center',
        color: 'white'
    },
    utilView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
    },
});