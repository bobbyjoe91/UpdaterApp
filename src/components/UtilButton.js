import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function UtilButton({ title, color, func }) {
    const styles = StyleSheet.create({
        utilButton: {
            justifyContent: 'center',
            backgroundColor: color,
            width: 147,
            height: 55,
        },
        title: {
            textAlign: 'center',
            fontSize: 24,
            color: 'white'
        }
    });

    return(
        <TouchableOpacity onPress={func}>
            <View style={styles.utilButton}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}