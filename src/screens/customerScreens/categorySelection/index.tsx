import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../../utlis';

const CategorySelection = () => {

    const imageArray = [IMAGES.Grocery, IMAGES.FastFood]; 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={IMAGES.LOGO}
                    resizeMode='contain'
                    style={styles.logo}
                />
                <View style={styles.circleContainer}>
                    <Text style={styles.circleText}>SC</Text>
                </View>
            </View>
            <Text style={styles.descriptionText}>
                Explore our diverse services tailored to your needs: Order exquisite meals, shop for essential groceries, or book a reliable ride with just a few clicks
            </Text>

            <View style={styles.categoryContainer}>
                <View style={styles.imageContainer}>
                   
                      <Image
                style={styles.categoryImage}
                source={imageArray[currentImageIndex]}
            />
                </View>
                <View style={styles.categoryTextContainer}>
                    <Text style={styles.categoryText}>Tasty Treats</Text>
                    <Text style={styles.categoryText}>Grocery Goodies</Text>
                </View>
            </View>

            <View style={styles.categoryContainer}>
                <View style={styles.categoryTextContainer}>
                    <Text style={styles.categoryText}>Plan Your Next  </Text>
                    <Text style={styles.categoryText}>Trip</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.categoryImage}
                        source={IMAGES.Ride}
                    />
                </View>
            </View>

            <View style={styles.categoryContainer}>
              
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.categoryImage}
                        source={IMAGES.Car}
                    />
                </View>
                <View style={styles.categoryTextContainer}>
                    <Text style={styles.categoryText}>Family Road Trip? Secure Your 7-4 Seater Car Today! </Text>
                </View>
            </View>
        
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BLACK,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    logo: {
        height: 50,
        width: 50,
    },
    circleContainer: {
        borderWidth: 1,
        borderRadius: 100,
        width: 50,
        height: 50,
        backgroundColor: COLORS.GREEN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD_ITALIC,
        fontSize: 20,
    },
    descriptionText: {
        color: "gray",
        textAlign: 'center',
        fontSize: 15,
        fontFamily: FONTS.Medium,
        padding: 20,
    },
    categoryContainer: {
        borderWidth: 0,
        width: '90%',
        borderColor: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 10,marginBottom:40
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
       
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius:100
    },
    categoryTextContainer: {
        width: "70%",
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:0,borderColor:'red'
    },
    categoryText: {
        color: 'white',
        fontSize: 20,
        fontFamily: FONTS.SEMIBOLD,
        textAlign:'center'
    },
});

export default CategorySelection;