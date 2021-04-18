import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { add } from 'react-native-reanimated';

function addDecimalPoints(numString) {
    if(numString) {
        let numStrArray = numString.split('');
        numStrArray.reverse();

        let length = numString.length;

        if(length > 3) {
            let index = (length%3 == 0) && (length > 3) ? Math.floor(length / 3)-1 : Math.floor(length / 3);
            for(let i=1; i <= index; i++) {
                numStrArray.splice(4*i - 1, 0, '.');
            }
            
            return numStrArray.reverse().join('');
        }
        
        return numString;
    }
}

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
            color: 'white',
        }
    });

    return(
        <View style={styles.container}>
            <Text style={{...styles.p, ...styles.title, fontSize: 18}}>{props.title}</Text>
            <Text style={{...styles.p, fontSize: 36, fontFamily: 'InconsolataSemiCondensed-Regular'}}>
                {addDecimalPoints(String(props.p))}
            </Text>
        </View>
    );
}

export default StatsCard;