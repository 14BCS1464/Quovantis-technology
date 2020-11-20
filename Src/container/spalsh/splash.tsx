import React, {useEffect} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import normalize from 'react-native-normalize';

function Splash(props: any) {


    //for mavigate the Home Screen after 4 Sec..

    useEffect(() => {
        setTimeout(() => {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'HomeStackFunction' }],
            });
        }, 4000)
    }, [])

    return (
            <View style={styles.mainContainer}>
                <Text style={styles.txtStyle}>
                    {"Quovatis "}
                </Text>
            </View>


    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'

    }, txtStyle: {
        fontSize: normalize(50),
        fontWeight: "bold",
        color: 'gray'
    }
})


export default Splash
