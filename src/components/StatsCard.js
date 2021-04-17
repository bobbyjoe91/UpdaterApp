import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StatsCard(props) {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            width: 340,
            height: '20%',
            marginBottom: 40,
            backgroundColor: props.bgColor,
            borderRadius: 9
        },
        title: {
            marginBottom: 10
        },
        p: {
            textAlign: 'center',
            color: 'white'
        }
    });

    return(
        <View style={styles.container}>
            <Text style={{...styles.p, ...styles.title, fontSize: 18}}>{props.title}</Text>
            <Text style={{...styles.p, fontSize: 36}}>{props.p}</Text>
        </View>
    );
}

export default StatsCard;