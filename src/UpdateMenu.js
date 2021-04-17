import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Status from './components/Status';
import UtilButton from './components/UtilButton';

export default function UpdateMenu() {
    const [logMessage, setLogMessage] = useState([]);

    useEffect(() => {
        let messages = [
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            '[22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        ];

        setLogMessage(messages);
    }, [])

    return(
        <View style={styles.central}>
            <Text style={{textAlign: 'left', marginBottom: 3}}>Status</Text>
            <Status logs={logMessage}/>
            <View style={styles.utilView}>
                <UtilButton 
                    title='CLEAR'
                    color='#EB7B57'
                    func={() => {setLogMessage([])}}
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