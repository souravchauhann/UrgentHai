import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, FlatList, Alert, StatusBar, Platform } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../utlis';
import MyButton from '../../components/comman/button';

const { width, height } = Dimensions.get('window');

const Splash = ({navigation}) => {
 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const flatListRef = useRef(null); 

  const handlePress = () => {
    navigation.navigate('Login')
    // Alert.alert('Button Pressed!', 'You pressed the MyButton.');
  };

  const ImagesData = [
    { id: 1, img: IMAGES.IMG1 },
    { id: 2, img: IMAGES.IMG2 },
    { id: 3, img: IMAGES.IMG3 },
  ];

  const renderImages = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          resizeMode='cover'
          style={styles.image}
          source={item?.img}
        />
      </View>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % ImagesData.length;
        flatListRef.current.scrollToIndex({ animated: true, index: nextIndex }); 
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
       <StatusBar
        animated
        barStyle="light-content"
        backgroundColor={COLORS.BLACK}
        translucent
      />
     
      <View style={styles.headerContainer}>
        <View style={{
           alignItems: 'center',
           flexDirection: 'row',justifyContent:'center'
        }}>
           <Image
          source={IMAGES.LOGO}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Urgent Hai
        </Text>
        </View>
       
      </View>

      <View style={{width:'100%',height:'80%',alignItems:'center'}}>
      <View style={styles.imageWrapper}>
        <FlatList
          scrollEnabled={false}
          ref={flatListRef} 
          showsHorizontalScrollIndicator={false}
          horizontal
          data={ImagesData}
          renderItem={renderImages}
          keyExtractor={(item) => item.id.toString()}
          onScrollToIndexFailed={() => {}}
        />
      </View>
      <Text style={styles.description}>
        Your journey starts here!
        Hit 'Customer' for quick and easy solutions.
        Or select 'Driver' to join our team and hit the road!
      </Text>
      <MyButton
        title="CUSTOMER"
        onPress={handlePress}
        backgroundColor={COLORS.GREEN}
        padding={15}
        borderRadius={0}
        width="90%"
        borderColor={COLORS.GREEN}
        borderWidth={2}
        marginTop={20}
        color={COLORS.WHITE}
      />
      <MyButton
        title="DRIVER"
        onPress={handlePress}
        backgroundColor={COLORS.BLACK}
        padding={15}
        borderRadius={0}
        width="90%"
        borderColor={COLORS.WHITE}
        borderWidth={2}
        marginTop={20}
      />
      </View>
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
    width: width,
    justifyContent: 'flex-end',
   
    paddingBottom: 20,
  height:Platform.OS == "ios"? "17%":'17%',
  },
  logo: {
    height: 50,
    width: 50,
  },
  title: {
    color: COLORS.YELLOW,
    fontSize: 40,
    fontFamily: FONTS.SEMIBOLD,
    textAlign: 'center',
    marginLeft: 10,
  },
  imageWrapper: {
    height: 400,
    width: width,
    backgroundColor: COLORS.GREEN,
  },
  imageContainer: {
    width: width,
    height: 400,
  },
  image: {
    width: width,
    height: '100%',
  },
  description: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontFamily: FONTS.Medium,
    padding: 20,
  },
});

export default Splash;