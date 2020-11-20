import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import normalize from 'react-native-normalize';


const CommonHeader=(props:any)=>{
    return(
        <View style={styles.parentHeadrrStyle}>
            <Text style={styles.backTstStyle} onPress={()=>props.onBackPress()}>
                {"Back"}
            </Text>
            </View>
    )
}
const styles = StyleSheet.create({
parentHeadrrStyle:{
    width:'100%',
    height:normalize(50),
    backgroundColor:'white',
    justifyContent:'center',
    backgroundColor:'blue'
},backTstStyle:{
    fontSize:normalize(13),
        marginLeft:normalize(20),
        color:'white'

    }
});

export default CommonHeader
