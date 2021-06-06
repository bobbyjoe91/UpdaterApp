import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getTodaysDate } from '../utils';

import StatsCard from '../components/StatsCard';

export default function MainMenu() {
    let [cases, setCases] = useState(0);
    let [deaths, setDeaths] = useState(0);
    let [recovered, setRecovered] = useState(0);

    useEffect(async () => {
        try {
            let data = await fetch('https://corona.lmao.ninja/v2/countries/indonesia?yesterday=false&strict=true');
            let { cases, deaths, recovered } = await data.json();
            setCases(cases);
            setDeaths(deaths);
            setRecovered(recovered);
        } catch(err) {
            console.log(err);
        }
    }, []);

    return(
        <View style={styles.central}>
            <View style={styles.dateDiv}>
                <Text style={styles.dateText}>{getTodaysDate()}</Text>
            </View>
            <View>
                <StatsCard 
                    title="Cases"
                    p={cases}
                    bgColor='#27AE60'
                />
                <StatsCard 
                    title="Deaths"
                    p={deaths}
                    bgColor='#EB5757'
                />
                <StatsCard 
                    title="Recovered"
                    p={recovered}
                    bgColor='#2D9CDB'
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
        alignItems: 'center',
    },
    dateDiv: {
        paddingTop: 150,
        paddingBottom: 50,
    },
    dateText: {
        textAlign: 'center',
        fontSize: 20
    },
});