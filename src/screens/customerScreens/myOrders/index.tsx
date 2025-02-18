import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, Image, Pressable } from 'react-native';
import { COLORS, FONTS } from '../../../utlis';

const MyOrders = () => {

    function renderOrders() {
        return (
            <View style={styles.orderContainer}>
                <View style={styles.orderDetails}>
                    <Text style={styles.orderNumber}>Order Number DJS290F@330</Text>
                    <Text numberOfLines={2} style={styles.orderDescription}>Order Description which Containing Minimum 2 - 3 lines ..</Text>
                    <Text style={styles.orderQuantity}>Quantity 2</Text>
                    <View style={styles.dateAndButtonContainer}>
                        <Pressable style={styles.detailButton}>
                            <Text style={styles.detailButtonText}>Detail</Text>
                        </Pressable>
                        <View style={styles.dateContainer}>
                            <Text style={styles.orderDate}>Date  2/11/2026</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://www.absolutdrinks.com/wp-content/uploads/recipe_vodka-lime_1x1_96d833129a96719bfc733305d5468d5c.jpg' }}
                        resizeMode='cover'
                        style={styles.orderImage}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>My Orders</Text>
            </View>

            <View style={styles.flatListContainer}>
                <FlatList
                    renderItem={renderOrders}
                    data={[1, 2, 3, 4]}
                />
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
        height: Platform.OS === "ios" ? "86%" : "85%",
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
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderDate: {
        color: "#A0A0A0",
        fontFamily: FONTS.BOLD,
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
