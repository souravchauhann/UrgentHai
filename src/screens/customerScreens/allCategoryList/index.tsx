import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import { COLORS, FONTS, ICONS } from '../../../utlis';

const {width, height} = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const margin = 5;
const totalMargin = margin * (numColumns - 1);

// Calculate image dimensions
const imageWidth = (screenWidth - totalMargin - 150) / numColumns;
const imageHeight = imageWidth * 1.25;

const CategoriesList = ({navigation}) => {
  const item =[
  {
    id:"1",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 1"
  },
  {
    id:"2",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 2"
  },
  {
    id:"3",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 3"
  },
  {
    id:"4",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 4"
  },
  {
    id:"5",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 5"
  },
  {
    id:"6",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 6"
  },
  {
    id:"7",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 7"
  },
  {
    id:"8",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },
  {
    id:"9",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },

  {
    id:"10",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },
  {
    id:"11",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },

  {
    id:"12",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },
  {
    id:"13",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },
  {
    id:"14",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },

  {
    id:"15",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },
  {
    id:"16",
    media:"https://visitokinawajapan.com/wp-content/themes/visit-okinawa_multi-language/lang/en/assets/img/discover/132/di132_kv_okinawan-island-fruits.webp",
    name:"item 8"
  },
  

]

  function handleBackNavigation() {
    navigation.goBack();
  }

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(
      100,
      item.map((_, index) =>
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          delay: index * 100,
          useNativeDriver: true,
        }),
      ),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
       <View style={{height:120,borderWidth:0,borderRadius:15,width:'100%',alignSelf:'center',marginBottom:'2%',backgroundColor:COLORS.LITE_GREEN,justifyContent:'flex-end',}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0,alignItems:'center'}}>
      <Pressable
      onPress={()=>navigation.goBack()}
      style={{borderWidth:0,width:50,height:50,backgroundColor:'white',borderRadius:100,marginBottom:10,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
        <Image
        resizeMode='contain'
        style={{width:40,height:40}}
        source={ICONS.LEFT_ARROW}
        />
        
      </Pressable>
      <Text style={{color:COLORS.WHITE,fontFamily:FONTS.BOLD,fontSize:18}}>Categories</Text>
      <View style={{borderWidth:0,width:50,height:50,backgroundColor:'translucent',borderRadius:100,marginBottom:10,marginRight:10,justifyContent:'center',alignItems:'center'}}>
        <Image
        resizeMode='contain'
        style={{width:27,height:27}}
        source={ICONS.SHOPPING_CART}
        />
        
      </View>
      </View>
    
    </View>
      <ScrollView>
        <View style={styles.gridContainer}>
          {item.map((item, index) => (
            <Pressable
              key={item.id}
            //   onPress={() =>
            //     navigation.navigate('ProductListingScreen', {
            //       item: '/products_with_filter?category_id=' + item?.id,
            //     })
            //   }

            onPress={()=>navigation.navigate('ProductList')}
              >
              <Animated.View
                style={[
                  styles.categoryItem,
                  {
                    opacity: fadeAnim,
                    transform: [
                      {
                        translateY: fadeAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [30, 0],
                        }),
                      },
                    ],
                  },
                ]}>
                  <View style={styles.categoryContainer}>
        <View style={styles.categoryCard}>
          <View style={styles.categoryImageContainer}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
              resizeMode='cover'
              style={styles.categoryImage}
            />
          </View>
          <Text style={styles.categoryText}>Item</Text>
        </View>
      </View>
              </Animated.View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: 15,
    justifyContent: 'space-between',
    padding:8
    // paddingHorizontal: 15,
  },
  categoryItem: {
    width: "100%",
    height: 140,
    marginBottom: 15,
    alignItems: 'center',
    // borderWidth:2

    // width: 105,
    // borderWidth: 0,
    // height: 120,
    // justifyContent: 'flex-end',
    // marginRight: 10,
  },

  categoryTextContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  categoryContainer: {
    width: 105,
    borderWidth: 0,
    height: 120,
    justifyContent: 'flex-end',
    // marginRight: 10,
  },
  categoryCard: {
    width: "90%",
    height: 90,
    borderWidth: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#E7F4EB',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf:'center'
  },
  categoryImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 0,
    alignSelf: 'center',
    marginTop: -30,
    zIndex: 1111,
    backgroundColor: '#E7F4EB',
  },
  categoryImage: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  categoryText : {
    textAlign: 'center',
    fontFamily: FONTS.SEMIBOLD,
    marginTop: 5,
  },
  categoriesTitle: {
    color: COLORS.BLACK,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: 17,
  },
  categoriesListContainer: {
    paddingHorizontal: 20,
  },
  fastSellingContainer: {
    width: "49%",
    height: 250,
    backgroundColor: '#E7F4EB',
    borderRadius: 13,
    marginBottom: 10,
  },
  fastSellingImageContainer: {
    height: 150,
    width: "90%",
    alignSelf: 'center',
    marginTop: 10,
    borderTopRightRadius: 11,
    borderTopLeftRadius: 11,
    backgroundColor: 'white',
  },
  fastSellingImage: {
    width: '100%',
    height: '100%',
    borderRadius: 11,
  },
  fastSellingTextContainer: {
    paddingLeft: 10,
    marginTop: 5,
  },
  fastSellingTitle: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: 17,
  },
  fastSellingDescription: {
    fontFamily: FONTS.SEMIBOLD,
    fontSize: 11,
  },
  addButtonContainer: {
    width: 40,
    height: 40,
    position: 'absolute',
    borderWidth: 1,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
