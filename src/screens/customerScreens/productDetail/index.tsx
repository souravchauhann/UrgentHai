import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image,StatusBar, Platform, FlatList, Pressable } from 'react-native';
import { COLORS, FONTS, ICONS, IMAGES } from '../../../utlis';
import Item from '../../../components/comman/renderItem';

const ProductDetail = ({navigation}) => {

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

    function renderMoreItem(){
        return(
            <View style={{
                borderWidth:0,width:100,height:120,marginRight:10,borderRadius:5,
               
                
                }}>
                <Image
                style={{width:'100%',height:'80%',borderRadius:5, shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    
                    elevation: 3,}}
                source={{uri:"https://hips.hearstapps.com/hmg-prod/images/citrus-67227976473b1.jpg?crop=0.951xw:0.635xh;0.0493xw,0.365xh&resize=640:*"}}
                />
                <Text style={{fontFamily:FONTS.Medium,textAlign:'center'
                }}>Punjabi Tadka</Text>
            </View>
        )
    }
    return (
        <View style={{flex:1,backgroundColor:COLORS.WHITE}}>
            <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={COLORS.LITE_GREEN}
        translucent
      />
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
      <Text style={{color:COLORS.WHITE,fontFamily:FONTS.BOLD,fontSize:18}}>Product Detail</Text>
      <View style={{borderWidth:0,width:50,height:50,backgroundColor:'white',borderRadius:100,marginBottom:10,marginRight:10,justifyContent:'center',alignItems:'center'}}>
        <Image
        resizeMode='contain'
        style={{width:27,height:27}}
        source={ICONS.SHOPPING_CART}
        />
        
      </View>
      </View>
    
    </View>

<ScrollView style={{flex:1}}>
   <View style={{flex:1}}>
    <View style={{marginHorizontal:8,height:300}}>
        <Image 
        resizeMode='cover'
    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/1200px-Potato-Chips.jpg'}}
    style={{
        height:"100%",
        width:'100%',
      borderRadius:20
    }}
    />
    </View>
    
   <View style={{padding:15,}}>
    <View style={{borderWidth:0,flexDirection:'row',}}>
        <View style={{width:'75%',borderWidth:0}}>
        <Text style={{color:COLORS.BLACK,fontFamily:FONTS.Medium,fontSize:20}}>Haldiram's Potato Chips</Text>
        <Text style={{color:"#A0A0A0",fontFamily:FONTS.Medium,fontSize:15,marginVertical:6}}>Snakes</Text>
        </View>
        <View style={{width:'25%',borderWidth:0,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontFamily:FONTS.BOLD,fontSize:20,color:COLORS.LITE_GREEN}}>Rs 25/kg</Text>
        </View>
    </View>

    <Text style={{color:COLORS.BLACK,fontFamily:FONTS.BOLD,fontSize:15,marginVertical:6}}>Description</Text>

    <Text style={{color:COLORS.BLACK,fontFamily:FONTS.Medium,fontSize:14,marginVertical:10}}>Haldiram's Potato Chips 95 g, Sizzling Sriracha Flavour, Crunchy Chips & Snack Haldiram's Potato Chips 95 g, Sizzling Sriracha Flavour, Crunchy Chips & Snacks</Text>
   <View style={{width:'100%',borderWidth:0,height:50,flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{borderWidth:0,width:'45%',borderRadius:5,flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{width:"30%",height:'100%',borderWidth:0,justifyContent:'center',alignItems:'center',backgroundColor:"#F6F6F6",borderRadius:10}}>
        <Image
        style={{width:'40%',height:'40%'}}
        source={ICONS.MINUS_CART}
        />
     </View>
     <View style={{width:"30%",height:'100%',borderWidth:0,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:COLORS.LITE_GREEN,fontFamily:FONTS.Medium,fontSize:30}}>3</Text>
     </View>
     <View style={{width:"30%",height:'100%',borderWidth:0,justifyContent:'center',alignItems:'center',backgroundColor:"#F6F6F6",borderRadius:10}}>

     <Image
        style={{width:'40%',height:'40%'}}
        source={ICONS.PLUS_CART}
        />
     </View>

    </View>
    <View style={{borderWidth:0,width:'45%',borderRadius:5,backgroundColor:COLORS.LITE_GREEN,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,fontFamily:FONTS.SEMIBOLD}}>Add to Cart</Text>
    </View>


   </View>
    <Text style={{color:COLORS.BLACK,fontFamily:FONTS.BOLD,fontSize:15,marginVertical:6}}>More Items</Text>
  

   <View>
   <FlatList
   showsHorizontalScrollIndicator={false}
    horizontal
    renderItem={renderMoreItem}
    data={[1,2,3,4,5,6,7]}
    />
   </View>
   <View>
    <Text style={{color:COLORS.BLACK,fontFamily:FONTS.BOLD,fontSize:15,marginVertical:6}}>Week Special</Text>
        
        <FlatList
        scrollEnabled={false}
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
   </View>
   </ScrollView>
   </View>
 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fastSellingListContainer: {
        paddingHorizontal: 0,
      },
      fastSellingColumnWrapper: {
        justifyContent: 'space-between',
      },
});

export default ProductDetail;
