import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Color, Icon} from "../../constants";


interface Props {
    handleExapnd: Function,
    index: number,
    item: any,

}


const RenderItem = (props: Props) => {
    return (
        <View style={styles.parentView}>
            <TouchableOpacity onPress={() => props.handleExapnd(props.index)} style={styles.childTextContainer}>
                <Image style={[styles.imageStyle, {tintColor: props.item.category.colorCode}]}
                       source={Icon.food}/>
                <Text style={[styles.textStyle, {color: props.item.category.colorCode}]}>
                    {props.item.category.categoryName}{"  "}
                    <Text
                        style={[styles.textStyle,]}>{!props.item.category.servingSize ? "" : "( " + props.item.category.servingSize + " )"}
                    </Text>
                </Text>
                <Image style={[styles.dropDown, {}]}
                       source={Icon.dropDown}/>
            </TouchableOpacity>
            {props.item.isExpand ?
                <React.Fragment>
                    <ScrollView
                        bounces={false}
                        nestedScrollEnabled={true}>
                        {props.item.category.subcategories && props.item.category.subcategories.length > 0 ?

                            props.item.category.subcategories[0].items.map((item: any, index: number) => {

                                return (
                                    <View style={styles.childContainer}>
                                        <Text numberOfLines={2} style={styles.textChildStyle}>
                                            {item}
                                        </Text>
                                    </View>
                                )

                            }) : null}
                    </ScrollView>
                    {props.item.category.quote ?
                        <View style={styles.quoteContainer}>
                            <TouchableOpacity style={styles.quoteButton}>
                                <Text ellipsizeMode="middle" numberOfLines={1} style={styles.quoteText}>
                                    {props.item.category.quote}
                                </Text>
                            </TouchableOpacity>
                        </View> : <View style={{height:normalize(20)}}/>
                    }
                </React.Fragment>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    quoteText: {
        fontSize: normalize(12),
        color: 'gray',


        textAlign: 'center'

    },
    quoteButton: {
        height: normalize(40),
        width: normalize(250),
        backgroundColor: Color.modalBackgroundColor,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: normalize(20),
        paddingLeft: normalize(20)
    },
    quoteContainer: {
        width: '100%',
        height: normalize(60),
        justifyContent: 'center',
        alignItems: 'center',

    },
    dropDown: {
        height: normalize(10),
        width: normalize(10),
        position: 'absolute',
        top: normalize(22),
        right: normalize(20)
    },
    textChildStyle: {
        fontSize: normalize(15),
        marginLeft: normalize(10),
    },
    childTextContainer: {
        flexDirection: 'row',
        height: normalize(50),
        alignItems: 'center'
    },
    childContainer: {
        width: '100%',
        flexDirection: 'row',
        height: normalize(42),
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        alignItems: 'center',
        borderRadius: 8,

    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: normalize(15),
        color: 'black',
        marginLeft: normalize(10)
    },
    imageStyle: {
        height: normalize(30),
        width: normalize(30),
        resizeMode: 'contain'
    },
    parentView: {
        paddingHorizontal: normalize(10),
        width: normalize(330),
        minHeight: normalize(50),
        maxHeight: normalize(500),

        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: normalize(20),
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,


    },
})
export default RenderItem;
