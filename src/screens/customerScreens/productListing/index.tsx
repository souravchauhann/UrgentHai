import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, FlatList, Image, Pressable, Platform } from 'react-native';
import { COLORS, FONTS, ICONS, IMAGES } from '../../../utlis';
import Item from '../../../components/comman/renderItem';

const ProductList = ({navigation}) => {

    function renderFilter(){
        return(
            <View style={styles.filterContainer}>
              <Image
              source={{uri:'https://m.media-amazon.com/images/I/81XRfL7tzPS._AC_UF894,1000_QL80_.jpg'}}
              style={styles.filterImage}
              />
              <Text style={styles.filterText}>Title</Text>
            </View>
        )
    }

    function renderFilterType(){
        return(
            <View style={styles.filterTypeContainer}>
              <Text style={styles.filterTypeText}>Filer</Text>
            </View>
        )
    }

    const Data = [
        {
          id: '1',
          title: 'Item Title 1',
          description: 'Item Description Which Contains Minimum 2-3 lines',
          price: '12.00',
          imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          id: '2',
          title: 'Item Title 1',
          description: 'Item Description Which Contains Minimum 2-3 lines',
          price: '12.00',
          imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
            id: '3',
            title: 'Item Title 1',
            description: 'Item Description Which Contains Minimum 2-3 lines',
            price: '12.00',
            imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
            id: '2',
            title: 'Item Title 1',
            description: 'Item Description Which Contains Minimum 2-3 lines',
            price: '12.00',
            imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          },
          {
              id: '3',
              title: 'Item Title 1',
              description: 'Item Description Which Contains Minimum 2-3 lines',
              price: '12.00',
              imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
                id: '2',
                title: 'Item Title 1',
                description: 'Item Description Which Contains Minimum 2-3 lines',
                price: '12.00',
                imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              },
              {
                  id: '3',
                  title: 'Item Title 1',
                  description: 'Item Description Which Contains Minimum 2-3 lines',
                  price: '12.00',
                  imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                },
      ];

    return (
        <View style={styles.container}>
         <StatusBar
               animated
               barStyle="dark-content"
               backgroundColor={COLORS.LITE_GREEN}
               translucent
             />
             <View style={styles.headerContainer}>
              <View style={styles.headerContent}>
              <View style={styles.headerTextContainer}>
              <Pressable
                onPress={()=>navigation.goBack()}
                style={styles.backButton}>
                    <Image
                    resizeMode='contain'
                    style={styles.backButtonImage}
                    source={ICONS.LEFT_ARROW}
                    />
                </Pressable>
               <Text style={styles.headerText}>Product List</Text>
              </View>
              </View>
             </View>
             <View style={styles.listContainer}>
                <View style={styles.filterTypeList}>
                <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filterTypeContentContainer}
                renderItem={renderFilterType}
                horizontal
                data={[1,2,3,4,5,6,7,8]}
                />
                </View>
                    <FlatList
              data={Data}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
              contentContainerStyle={styles.fastSellingListContainer}
              columnWrapperStyle={styles.fastSellingColumnWrapper}
            />
             </View>
         <View style={styles.footerContainer}>
            <FlatList
            renderItem={renderFilter}
            horizontal
            data={[1,2,3,4,5,6,7,8]}
            />
         </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    headerContainer: {
        backgroundColor: COLORS.LITE_GREEN,
        width: '100%',
        height: Platform.OS == "ios" ? "15%" : '13%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 15,
    },
    headerContent: {
        flexDirection: 'row',
        width: '93%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTextContainer: {
        width: '95%',
        height: 50,
        borderWidth: 0,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: COLORS.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
    },
    backButtonImage: {
        width: 35,
        height: 35,
    },
    headerText: {
        color: 'white',
        fontFamily: FONTS.BOLD_ITALIC,
        fontSize: 20,
    },
    listContainer: {
        width: '100%',
        height: Platform.OS == "ios" ? '70%' : '75%',
    },
    filterTypeList: {
        height: 50,
        width: '100%',
        borderWidth: 0,
        marginTop: 5,
    },
    filterTypeContentContainer: {
        padding: 5,
    },
    fastSellingListContainer: {
        paddingHorizontal: 8,
    },
    fastSellingColumnWrapper: {
        justifyContent: 'space-between',
        marginTop: 10,
    },
    footerContainer: {
        width: '100%',
        height: Platform.OS == "ios" ? "20%" : '13%',
        borderWidth: 0,
        backgroundColor: COLORS.LITE_GREEN,
        padding: 6,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    filterContainer: {
        width: 70,
        height: 85,
        borderWidth: 0,
        marginRight: 10,
        borderRadius: 10,
    },
    filterImage: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
    },
    filterText: {
        textAlign: 'center',
        color: COLORS.WHITE,
        fontSize: 15,
        fontFamily: FONTS.BOLD,
    },
    filterTypeContainer: {
        borderWidth: 0,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#E7F4EB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    filterTypeText: {
        textAlign: 'center',
        color: COLORS.GREEN,
        fontSize: 15,
        fontFamily: FONTS.BOLD,
    },
});

export default ProductList;
