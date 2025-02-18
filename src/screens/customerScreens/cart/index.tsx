import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, Image, Pressable } from 'react-native';
import { COLORS, FONTS, ICONS } from '../../../utlis';

const MyOrders = () => {

    function renderOrders() {
        return (
            <View style={styles.orderContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://www.absolutdrinks.com/wp-content/uploads/recipe_vodka-lime_1x1_96d833129a96719bfc733305d5468d5c.jpg' }}
                        resizeMode='cover'
                        style={styles.orderImage}
                    />
                </View>
                <View style={styles.orderDetails}>
                    <Text style={styles.orderNumber}>Order Number DJS290F@330</Text>
                    <Text numberOfLines={2} style={styles.orderDescription}>Order Description which Containing Minimum 2 - 3 lines ..</Text>
                    <Text style={styles.orderQuantity}>Quantity 2</Text>
                    <View style={styles.dateAndButtonContainer}>
                      
                        <View style={styles.dateContainer}>
                            <Text style={styles.orderDate}>100 ml</Text>
                        </View>
                        <Pressable style={[styles.detailButton,{flexDirection:'row',justifyContent:'space-between',padding:1.9,width:78}]}>
                        <View style={{width:23,height:23,backgroundColor:COLORS.WHITE,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                            <Image
                            resizeMode='contain'
                            style={{width:15,height:15}}
                            source={ICONS.MINUS_CART}
                            />
                        </View>
                        <View style={{backgroundColor:COLORS.LITE_GREEN,borderRadius:100}}>
                            <Text style={{color:COLORS.WHITE,fontSize:16,fontFamily:FONTS.BOLD}}>1</Text>
                        </View>
                        <View style={{width:23,height:23,backgroundColor:COLORS.WHITE,borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                        <Image
                            resizeMode='contain'
                            style={{width:15,height:15}}
                            source={ICONS.PLUS_CART}
                            />
                        </View>

                        </Pressable>
                    </View>
                </View>
              <Pressable style={{position:'absolute',top:5,right:5}}>
                <Image
                source={ICONS.TRASH}
                style={{width:23,height:23}}
                />
              </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Cart</Text>
            </View>

            <View style={styles.flatListContainer}>
                <FlatList
                    renderItem={renderOrders}
                    data={[1,2,3,4,5,6]}
                />
            </View>
            <View style={{
                height: Platform.OS === "ios" ? "18%" : "20%",
                borderWidth:0,justifyContent:'flex-end',borderTopLeftRadius:10,borderTopRightRadius:10,paddingBottom:10,backgroundColor:'#e5e7e9'
            }}>
                <Text style={{color:COLORS.BLACK,fontFamily:FONTS.BOLD,marginLeft:10,fontSize:20}}>Order Summry</Text>

              <View style={{flexDirection:'row',borderWidth:0,justifyContent:'space-between',margin:10}}>
              <Text style={{color:COLORS.BLACK,fontFamily:FONTS.BOLD,marginLeft:10,fontSize:20}}>Total Price</Text>

              <Text style={{color:COLORS.BLACK,fontFamily:FONTS.BOLD,marginLeft:10,fontSize:20}}>Rs 22002.00</Text>


              </View>
   <Pressable style={{height:50,width:'95%',backgroundColor:COLORS.LITE_GREEN,borderRadius:5,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:COLORS.WHITE,fontFamily:FONTS.BOLD,fontSize:20}}>Checkout</Text>
   </Pressable>
            </View>
        </View>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    headerContainer: {
        backgroundColor: COLORS.LITE_GREEN,
        width: '100%',
        height: Platform.OS === "ios" ? "16%" : "15%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 15,
    },
    headerText: {
        color: COLORS.WHITE,
        fontFamily: FONTS.BOLD,
        fontSize: 18,
    },
    flatListContainer: {
        height: Platform.OS === "ios" ? "66%" : "65%",
    },
    orderContainer: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0,
        height: 120,
        marginTop: 16,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
    },
    orderDetails: {
        width: '70%',
        borderWidth: 0,
        padding: 10,
    },
    orderNumber: {
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
        fontSize: 14,
    },
    orderDescription: {
        color: COLORS.BLACK,
        fontFamily: FONTS.Medium,
        lineHeight: 16,
        marginTop: 6,
        fontSize: 13,
    },
    orderQuantity: {
        color: COLORS.BLACK,
        fontFamily: FONTS.RighteousRegular,
        fontSize: 14,
    },
    dateAndButtonContainer: {
        flexDirection: 'row',
        borderWidth: 0,
        height: 30,
        justifyContent: 'space-between',
    },
    detailButton: {
        width: 100,
        height: "90%",
        borderWidth: 0,
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: 3,
        backgroundColor: COLORS.LITE_GREEN,
        alignItems: 'center',
    },
    detailButtonText: {
        color: COLORS.WHITE,
        fontFamily: FONTS.BOLD,
        fontSize: 14,
    },
    dateContainer: {
        width: 100,
        height: "100%",
        paddingTop:10
        // borderWidth: 2,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
    },
    orderDate: {
        color: "#A0A0A0",
        fontFamily: FONTS.Medium,
        fontSize: 13,
    },
    imageContainer: {
        width: '30%',
        borderWidth: 0,
        padding: 7,
    },
    orderImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
});

export default MyOrders;
