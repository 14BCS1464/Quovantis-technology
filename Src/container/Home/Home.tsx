import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    LayoutAnimation,
    Modal,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
import normalize from 'react-native-normalize';
import {connect} from "react-redux";
import {searchData, getFoodList, handleExpand} from './action'
import Strings from "../../constants/Strings";
import Icon from "../../constants/Icon";
import CommonTextInput from "../../ReusableComponents/CommonTextInput";
import {Color} from "../../constants";
import RenderItem from "./RenderItems";


//Handle For LayoutAnimation on th base of Platforms
if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


//Api Request
const requestApi = "https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e"

function HomeScreen(props: any) {

    // this state helps to handle modal visibility
    const [modalVisible, setModalVisible] = useState(false);

    //Search data store in this state
    const [serach, setSearch] = useState('');


    //lifeCycle  mathod
    useEffect(() => {
        if (props.isMakeRequest) {
            props.getFoodList(requestApi, () => {
            }, () => {
            })
        } else {

        }
    }, [])



    //handle when user type in search bar
    const onChangeText = (val: string) => {
        props.searchData(val)
        setSearch(val)
    }


    // handle the expand of  cell
    const handleExapnd = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        props.handleExpand(index)
    }


    //this method  render the modal and its element
    const renderModalList = () => {
        return (

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                hardwareAccelerated={false}
                onRequestClose={() => {

                }}
            >
                <View style={styles.centeredView}>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false);
                    }} style={styles.crossButtonStyle}>
                        <Image style={styles.crossButtonImageStyle} source={Icon.crossIcon}/>
                    </TouchableOpacity>


                    <Text style={styles.approvedTextStyle}>
                        {Strings.foodList}
                    </Text>

                    <View style={styles.textInputContainer}>

                        <CommonTextInput
                            value={serach}
                            onChangeText={(val: string) => onChangeText(val)}
                            placeholder={Strings.serachHere}
                            extraStyle={styles.extraStyle}/>


                        <FlatList
                            contentContainerStyle={{alignItems: 'center'}}
                            style={[styles.flatListStyle]}
                            onEndReachedThreshold={0.7}
                            data={props.data}
                            keyboardDismissMode="on-drag"
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, index}) => {
                                return (
                                    <RenderItem
                                        handleExapnd={(index: number) => handleExapnd(index)}
                                        item={item} index={index}/>
                                );
                            }}/>
                    </View>
                </View>
            </Modal>


        )
    }





    return (

        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => {
                setModalVisible(true);
            }} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>
                    {Strings.buttonText}
                </Text>
            </TouchableOpacity>
            {renderModalList()}
        </View>
    )
}

const styles = StyleSheet.create({
    flatListStyle: {
        flexGrow: 1,
        marginTop: normalize(20)
    },

    textInputContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: normalize(15)


    },
    extraStyle: {
        width: normalize(330),
        alignSelf: 'stretch',
        borderWidth: 0,
        height: normalize(37),
        marginLeft: normalize(25)
    },
    approvedTextStyle: {
        fontSize: normalize(30),
        marginTop: normalize(140),
        marginLeft: normalize(25),
        fontWeight: 'bold'

    },
    crossButtonImageStyle: {

        height: normalize(20),
        width: normalize(20),
        resizeMode: 'contain'

    },
    crossButtonStyle: {
        height: normalize(30),
        width: normalize(30),
        position: 'absolute',
        top: normalize(50),
        left: normalize(30)

    },
    buttonText: {
        fontSize: normalize(20),
        color: 'white',
        fontWeight: 'bold'
    },
    buttonStyle: {
        height: normalize(50),
        width: normalize(200),
        backgroundColor: 'rgb(255, 102, 153)',
        borderRadius: normalize(50),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    mainContainer: {
        flex: 1, backgroundColor: 'white',

        justifyContent: 'center',
        alignItems: 'center'

    },


    centeredView: {
        flex: 1,

        backgroundColor: Color.modalBackgroundColor

    },
    modalView: {},
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})


const mapStateToProps = (state: any) => {
    return {
        data: state.FoodReducers.dataSource,
        isMakeRequest: state.FoodReducers.isMakeRequest
    }
};

const mapDispatchToProps = {
    getFoodList: getFoodList,
    handleExpand: handleExpand,
    searchData: searchData
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
