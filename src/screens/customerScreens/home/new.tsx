import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, FlatList, Dimensions, ScrollView } from 'react-native';
import { COLORS, FONTS, ICONS } from '../../../utlis';

const { width } = Dimensions.get('window');

const Home = () => {

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
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={COLORS.LITE_GREEN}
        translucent
      />
     
      <ScrollView style={styles.bodyContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Image
            style={styles.pinIcon}
            source={ICONS.PIN}
          />
          <Text style={styles.locationText}>Location</Text>
        </View>
        <Text style={styles.locationDetailText}>Naraingarh, Ambala</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Text style={styles.searchPlaceholderText}>Search Your Products</Text>
          </View>
          <View style={styles.searchIconContainer}>
            <Image
              resizeMode='contain'
              source={ICONS.SEARCH}
              style={styles.searchIcon}
            />
          </View>
        </View>
      </View>
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
          <Text style={styles.categoriesTitle}>View All</Text>
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
          <Text style={styles.categoriesTitle}>Fast Selling</Text>
          <Text style={styles.categoriesTitle}>View All</Text>
        </View>
        <View>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.fastSellingListContainer}
            columnWrapperStyle={styles.fastSellingColumnWrapper}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={renderFastSelling}
            data={[1, 2, 3, 4,5,6]}
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
    height: "15%",
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
    width: '90%',
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
    height: "78%",
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
    flexDirection: 'row', // Aligns the text in a row
  },
  priceText: {
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    marginTop: 5,
    fontSize: 16,
  },
  unitText: {
    color: 'gray', // Change this to your desired gray color
    fontFamily: FONTS.BOLD, // Keep the same font family if needed
    marginTop: 5,
    fontSize: 16,
  },
});

export default Home;