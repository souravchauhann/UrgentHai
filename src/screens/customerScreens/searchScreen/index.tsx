import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, FlatList, Image, Pressable, Platform } from 'react-native';
import { COLORS, FONTS, ICONS } from '../../../utlis';
import Item from '../../../components/comman/renderItem';

const SearchScreen = ({navigation}) => {

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
      ];
    return (
        <View style={styles.container}>
         <StatusBar
               animated
               barStyle="dark-content"
               backgroundColor={COLORS.LITE_GREEN}
               translucent
             />
             <View style={{
                  backgroundColor: COLORS.LITE_GREEN,
                  width: '100%',
                  // height: "10%",
                  height: Platform.OS =="ios" ? "10%" :"14%",

                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingBottom: 15,

             }}>
              <View style={{flexDirection:'row',width:'93%',alignItems:'center',justifyContent:'center',}}>
              <View style={{width:'15%',height:50,borderWidth:0,marginRight:5}}>
                <Pressable
                onPress={()=>navigation.goBack()}
                style={{width:50,height:50,borderRadius:100,backgroundColor:COLORS.WHITE,justifyContent:'center',alignItems:'center'}}>
                    <Image
                    resizeMode='contain'
                    style={{width:35,height:35}}
                    source={ICONS.LEFT_ARROW}
                    />
                </Pressable>
              </View>
              <View style={{width:'85%',height:50,borderWidth:0,borderRadius:100,backgroundColor:COLORS.WHITE}}>
                <TextInput
                style={{height:'100%',width:'100%',paddingHorizontal:15,borderWidth:0,fontFamily:FONTS.Medium}}
                placeholderTextColor={"gray"}
                placeholder='Search Your Products'
                
                />
              </View>
              </View>
             </View>
             <View style={{
                width:'100%',height:'90%'
             }}>
                    <FlatList
              data={Data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.id}
      numColumns={2} // Adjust based on your layout
      // contentContainerStyle={styles.fastSellingListContainer}
      contentContainerStyle={styles.fastSellingListContainer}
      columnWrapperStyle={styles.fastSellingColumnWrapper}
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
    fastSellingListContainer: {
        paddingHorizontal: 8,
      },
      fastSellingColumnWrapper: {
        justifyContent: 'space-between',
        marginTop:10
      },
      categoriesHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 18,
        marginVertical: 15,
      },
     
});

export default SearchScreen;
