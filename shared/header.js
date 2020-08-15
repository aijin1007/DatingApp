import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style={StyleSheet.header}>
            <View>
                <Text style={StyleSheet.headerText}>sasas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    HeaderText: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    }
});