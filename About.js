import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Jack Robinson</Text>
            <Text style={styles.text}>101268080</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
  });