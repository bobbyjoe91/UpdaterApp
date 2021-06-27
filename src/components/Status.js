import React, { useRef } from 'react';
import { ActivityIndicator, View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Status({ logs, isLoading }) {
    const logScrollView = useRef('');

    return(
        <View style={styles.status}>
            {
                isLoading ? 
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color='#27AE60' />
                </View>
            :
                <ScrollView ref={logScrollView} onContentSizeChange={() => logScrollView.current.scrollToEnd()}>
                    {
                        logs.map((log, index) => {
                            return(
                                <Text key={index} style={{ marginBottom: 14 }}>
                                    {log}
                                </Text>
                            )
                        })
                    }
                </ScrollView>
            }
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