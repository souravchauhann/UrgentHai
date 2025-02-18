import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, FONTS ,ICONS} from '../../utlis';
import { useNavigation } from '@react-navigation/native';
// 
const Item = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
    onPress={() => {
      navigation.navigate('ProductDetail')
    }}
    style={styles.fastSellingContainer}>
      <View style={styles.fastSellingImageContainer}>
        <Image
          resizeMode='cover'
          style={styles.fastSellingImage}
          source={{ uri: item.imageUri }}
        />
      </View>
      <View style={styles.fastSellingTextContainer}>
        <Text style={styles.fastSellingTitle}>{item.title}</Text>
        <Text style={styles.fastSellingDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Rs {item.price} </Text>
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default Item;