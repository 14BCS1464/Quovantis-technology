import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import normalize from 'react-native-normalize';
import {Color, Icon} from "../constants";

const CommonTextInput = (props: any) => {
    return (
        <View style={[styles.parentContaineer,props.extraStyle]}>

            <Image style={styles.searchStyle} source ={Icon.search}/>
            <TextInput
                keyboardType={props.keyboardType}
                value={props.value}
                multiline={false}
                maxLength = {100}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                style={[styles.textInputStyle,]} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchStyle:{
        height:normalize(15),
        width:normalize(15),
        resizeMode:'contain',
        marginHorizontal: normalize(10)
    },
    parentContaineer: {

        borderRadius: 3,
        flexDirection: 'row',
alignItems:'center',
        backgroundColor:Color.textInputTextColor
    }, textInputStyle: {
        flex: 1,
        textAlignVertical: "top",
        fontSize:normalize(14),
        color: 'black',
        paddingHorizontal: normalize(10)

    },


});



export default CommonTextInput
