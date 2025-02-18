import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, FlatList, Dimensions, ScrollView, Pressable ,TextInput, Platform} from 'react-native';
import { COLORS, FONTS, ICONS } from '../../../utlis';
import Item from '../../../components/comman/renderItem';
import Navigation from '../../navigation';

const { width } = Dimensions.get('window');

const Home = ({navigation}) => {

  const Data = [
    {
      id: '1',
      title: 'Item Title 1',
      description: 'Item Description Which Contains Minimum 2-3 lines',
      price: '12.00',
      imageUri: 'https://cdn.quicksell.co/-NLkVQK2rGdAb59mb3sE/products/-NSBhjLHUK_5yUBDvUms.jpg',
    },
    {
      id: '2',
      title: 'Item Title 1',
      description: 'Item Description Which Contains Minimum 2-3 lines',
      price: '12.00',
      imageUri: 'https://www.jiomart.com/images/product/original/rvx9j2xyr3/haldiram-bhujiawala-navrattan-namkeen-delicious-spicy-flavour-pack-of-2-400-grams-each-product-images-orvx9j2xyr3-p596963783-0-202301052019.jpg?im=Resize=(420,420)',
    },
    {
      id: '3',
      title: 'Item Title 1',
      description: 'Item Description Which Contains Minimum 2-3 lines',
      price: '12.00',
      imageUri: 'https://media.cnn.com/api/v1/images/stellar/prod/201116064719-restricted-pepsi-bottle-redesign.jpg?q=x_3,y_0,h_1613,w_2866,c_crop/w_800',
    },
    {
      id: '4',
      title: 'Item Title 1',
      description: 'Item Description Which Contains Minimum 2-3 lines',
      price: '12.00',
      imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '5',
      title: 'Item Title 1',
      description: 'Item Description Which Contains Minimum 2-3 lines',
      price: '12.00',
      imageUri: 'https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  function renderFastSelling({ item }) {
    return (
      <View style={styles.fastSellingContainer}>
        <View style={styles.fastSellingImageContainer}>
          <Image
            resizeMode='cover'
            style={styles.fastSellingImage}
            source={{ uri: "https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
          />
        </View>
        <View style={styles.fastSellingTextContainer}>
          <Text style={styles.fastSellingTitle}>Item Title</Text>
          <Text style={styles.fastSellingDescription}>Item Description Which Contains Minimum 2-3 lines</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Rs 12.00 </Text>
            <Text style={styles.unitText}>/ K.G</Text>
          </View>
        </View>
        <View style={styles.addButtonContainer}>
          <Image
            resizeMode='contain'
            source={ICONS.PLUS}
            style={styles.addButtonImage}
          />
        </View>
      </View>
    );
  }

  function renderOffers({ item }) {
    return (
      <View style={styles.offerContainer}>
        <Image
          resizeMode='cover'
          style={styles.offerImage}
          source={{ uri: "https://images.pexels.com/photos/13782625/pexels-photo-13782625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
        />
      </View>
    );
  }

  function renderCategories({ item }) {
    return (
      <Pressable
      onPress={()=>navigation.navigate('ProductList')}
      style={styles.categoryContainer}>
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
      </Pressable>
    );
  }

function renderImg(){
  return(
    <View style={{width:"48%",borderWidth:0,borderRadius:5,height:70,marginBottom:0}}>
      <Image
      style={{width:'100%',height:'100%',borderRadius:5}}
      source={{uri:"https://media.istockphoto.com/id/153069796/photo/variety-of-breads.jpg?s=612x612&w=0&k=20&c=a2clGhHouI030O6tTRZ4IgscOYsBanVKEX3OigNpn5M="}}
      />
    </View>
  )
}

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={COLORS.LITE_GREEN}
        translucent
      />
     
      <View style={styles.headerContainer}>
        
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
                     <Pressable
                       onPress={()=>navigation.navigate('SearchScreen')}
                     
                     style={{width:'85%',height:50,borderWidth:0,borderRadius:100,backgroundColor:COLORS.WHITE}}>
                       <View
                       style={{height:'100%',width:'100%',paddingHorizontal:15,borderWidth:0,fontFamily:FONTS.Medium,justifyContent:'center'}}
                     
                       
                       >
<Text style={{color:'gray',fontFamily:FONTS.Medium}}>Search Your Products</Text>
                       </View>
                     </Pressable>
                     {/* </View> */}
                    </View>
       
      </View>
      <ScrollView style={styles.bodyContainer}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            renderItem={renderOffers}
            data={[1, 2, 3, 4]}
          />
        </View>
        <View style={styles.categoriesHeader}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <Pressable onPress={()=>{navigation.navigate('CategoriesList')}}>
          <Text style={styles.categoriesTitle}>View All</Text>

          </Pressable>
        </View>
        <View>
          <FlatList
            contentContainerStyle={styles.categoriesListContainer}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            renderItem={renderCategories}
            data={[1, 2, 3, 4, 5, 6]}
          />
        </View>
        <View style={styles.categoriesHeader}>
          <Text style={styles.categoriesTitle}>Bestsellers</Text>
          <Text style={styles.categoriesTitle}></Text>
        </View>
        <View
        style={{borderWidth:0,height:200,flexDirection:'row'}}>
          <View style={{width:'50%',borderWidth:0,}}>
           <View style={{borderWidth:0,height:'80%',width:'90%',alignSelf:'center',borderRadius:7,backgroundColor:COLORS.WHITE,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            
            elevation: 8,
           }}>
            <FlatList
              contentContainerStyle={styles.fastSellingListContainer}
              columnWrapperStyle={{justifyContent:'space-between',marginTop:7}}
            numColumns={2}
            renderItem={renderImg}
            data={[1,2,3,4]}
            />

           </View>
           <View style={{alignSelf:'center',marginTop:5}}>
           <Text style={{fontFamily:FONTS.Medium,fontSize:15}}>Dairy,Bread & Eggs</Text>

           </View>
           
          </View>
          <View style={{width:'50%',borderWidth:0,}}>
           <View style={{borderWidth:0,height:'80%',width:'90%',alignSelf:'center',borderRadius:7,backgroundColor:COLORS.WHITE,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            
            elevation: 8,
           }}>
            <FlatList
              contentContainerStyle={styles.fastSellingListContainer}
              columnWrapperStyle={{justifyContent:'space-between',marginTop:7}}
            numColumns={2}
            renderItem={renderImg}
            data={[1,2,3,4]}
            />

           </View>
           <View style={{alignSelf:'center',marginTop:5}}>
           <Text style={{fontFamily:FONTS.Medium,fontSize:15}}>Vegetables & Fruits</Text>

           </View>
           
          </View>
        </View>
        <View style={{borderWidth:0,height:200,flexDirection:'row'}}>
        <View style={{width:'50%',borderWidth:0,}}>
           <View style={{borderWidth:0,height:'80%',width:'90%',alignSelf:'center',borderRadius:7,backgroundColor:COLORS.WHITE,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            
            elevation: 8,
           }}>
            <FlatList
              contentContainerStyle={styles.fastSellingListContainer}
              columnWrapperStyle={{justifyContent:'space-between',marginTop:7}}
            numColumns={2}
            renderItem={renderImg}
            data={[1,2,3,4]}
            />

           </View>
           <View style={{alignSelf:'center',marginTop:5}}>
           <Text style={{fontFamily:FONTS.Medium,fontSize:15}}>Juice & Shakes</Text>

           </View>
           
          </View>
          <View style={{width:'50%',borderWidth:0,}}>
           <View style={{borderWidth:0,height:'80%',width:'90%',alignSelf:'center',borderRadius:7,backgroundColor:COLORS.WHITE,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            
            elevation: 8,
           }}>
            <FlatList
              contentContainerStyle={styles.fastSellingListContainer}
              columnWrapperStyle={{justifyContent:'space-between',marginTop:7}}
            numColumns={2}
            renderItem={renderImg}
            data={[1,2,3,4]}
            />

           </View>
           <View style={{alignSelf:'center',marginTop:5}}>
           <Text style={{fontFamily:FONTS.Medium,fontSize:15}}>Chips & Namkeen</Text>

           </View>
           
          </View>
        </View>
        

        <View style={styles.categoriesHeader}>
          <Text style={styles.categoriesTitle}>Fast Selling</Text>
          <Text style={styles.categoriesTitle}>View All</Text>
        </View>
        <View>
        
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.BLACK,
  },
  headerContainer: {
    backgroundColor: COLORS.LITE_GREEN,
    width: '100%',
    height: Platform.OS =="ios" ? "16%" :"15%",
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pinIcon: {
    width: 20,
    height: 20,
  },
  locationText: {
    color: 'white',
    fontFamily: FONTS.Medium,
    marginLeft: 10,
  },
  locationDetailText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
  },
  searchContainer: {
    width: '85%',
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
    height: 50,
    flexDirection: 'row',
  },
  searchInputContainer: {
    width: "85%",
    height: "100%",
    borderWidth: 0,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  searchPlaceholderText: {
    color: 'gray',
    fontFamily: FONTS.SEMIBOLD,
    fontSize: 14,
  },
  searchIconContainer: {
    width: "15%",
    height: "100%",
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  bodyContainer: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: "82%",
  },
  offerContainer: {
    width: width,
    height: 130,
    marginTop: 15,
  },
  offerImage: {
    width: '90%',
    height: '100%',
    borderWidth: 0,
    alignSelf: 'center',
    borderRadius: 15,
  },
  categoryContainer: {
    width: 105,
    borderWidth: 0,
    height: 120,
    justifyContent: 'flex-end',
    marginRight: 10,
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
  addButtonImage: {
    height: 30,
    width: 30,
  },
  fastSellingListContainer: {
    paddingHorizontal: 8,
  },
  fastSellingColumnWrapper: {
    justifyContent: 'space-between',
  },
  categoriesHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 18,
    marginVertical: 15,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  priceText: {
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    marginTop: 5,
    fontSize: 16,
  },
  unitText: {
    color: 'gray', 
    fontFamily: FONTS.BOLD, 
    marginTop: 5,
    fontSize: 16,
  },
});

export default Home;