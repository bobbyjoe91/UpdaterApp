import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StatsCard(props) {
    return(
        <View style={styles.container}>
            <Text style={{...styles.p}}>{props.title}</Text>
            <Text style={{...styles.p}}>{props.p}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 340,
        height: '20%',
        marginBottom: 40,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 9
    },
    p: {
        textAlign: 'center',
        color: 'white'
    }
});

export default StatsCard;