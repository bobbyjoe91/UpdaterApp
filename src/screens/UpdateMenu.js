import React, { useState, useEffect } from 'react';
import { Alert, View, Text, StyleSheet } from 'react-native';

import Status from '../components/Status';
import UtilButton from '../components/UtilButton';

export default function UpdateMenu() {
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

    const [logMessage, setLogMessage] = useState(messages);

    const updateCovidData = async () => {
        let response;
        try {
            let responseObject = await fetch('http://localhost:3000/updater/update');
            response = await responseObject.json();
        } catch(err) {
            response = { 
                status: 'Update failed' 
            };
            console.log('error', err)
        }
        
        setLogMessage([...logMessage, response.status]);
    }

    const clearLog = () => {
        if(logMessage.length > 0) {
            Alert.alert(
                "Warning", "Are you sure to delete the logs?",
                [
                    {
                        text: "Yes",
                        onPress: () => setLogMessage([]),
                        style: 'destructive'
                    },
                    {
                        text: "No",
                        onPress: () => {},
                        style: 'cancel'
                    }
                ]
            );
        } else {
            Alert.alert(
                "Warning", "The status display is empty.",
                [
                    {
                        text: "OK",
                        onPress: () => {},
                    },
                ]
            );
        }
    }

    return(
        <View style={styles.central}>
            <Text style={{textAlign: 'left', marginBottom: 3}}>Status</Text>
            <Status logs={logMessage}/>
            <View style={styles.utilView}>
                <UtilButton 
                    title='CLEAR'
                    color='#EB7B57'
                    func={clearLog}
                />
                <UtilButton 
                    title='UPDATE'
                    color='#56CCF2'
                    func={updateCovidData}
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