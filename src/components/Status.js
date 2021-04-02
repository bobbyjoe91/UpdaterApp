import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Status() {
    return(
        <View style={styles.status}>
            <ScrollView>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={{marginBottom: 5}}>
                    [22:47:15] Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    status: {
        backgroundColor: '#F2F2F2',
        borderWidth: 0.2,
        borderRadius: 9,
        width: 342,
        height: 250,
        paddingLeft: 7,
        paddingTop: 7,
        paddingRight: 7,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
});