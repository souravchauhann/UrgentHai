

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../splashscreen';
import Login from '../customerScreens/login';
import Registration from '../customerScreens/registration';
import CategorySelection from '../customerScreens/categorySelection';
import Home from '../customerScreens/home';
import SearchScreen from '../customerScreens/searchScreen';
import Cart from '../customerScreens/cart';
import ProductList from '../customerScreens/productListing';
import ForgotScreen from '../commanScreens/forgotScreen';
import OtpScreen from '../commanScreens/otpVerifivation';
import OrderScreen from '../customerScreens/orderScreen';
import ProductDetail from '../customerScreens/productDetail';
import CategoriesList from '../customerScreens/allCategoryList';
import MyOrders from '../customerScreens/myOrders';
import { COLORS, FONTS, TAB_IMAGES } from '../../utlis';
import { Image, Keyboard, Platform, Text, View } from 'react-native';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarIconStyle = focused => ({
  backgroundColor: focused ? '#e0e0e0' : 'transparent',
  borderRadius: 12,
  padding: 4,
  
});
//

const TabNavigator = () => {
  // const {cartList} = useSelector(state => state.user);
  // let CartItem = cartList?.data?.length;
  let CartItem = 2;

  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, tabBarStyle: {}}}>
      {[
        {
          name: 'Home',
          component: Home,
          label: 'Home',
          icon: TAB_IMAGES.HOME,
        },
        {
          name: 'MyOrders',
          component: MyOrders,
          label: 'MyOrders',
          icon: TAB_IMAGES.MY_ORDERS

        },
        {
          name: 'Cart',
          component: Cart,
          label: 'Cart',
          icon: TAB_IMAGES.CART,
        },
      ].map(({name, component, label, icon}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerShown: false,
            tabBarLabel: label,

            tabBarIcon: ({focused}) => (
              <View
                style={[
                  tabBarIconStyle(focused),
                  {marginTop: 5},
                  // Platform.OS == 'ios' ? Keyboard.dismiss() : null,
                ]}>
                <Image
                  source={icon}
                  style={{width: 23, height: 23, resizeMode: 'contain'}}
                />
                {name === 'Cart' && CartItem > 0 ? (
                  <View
                    style={{
                      position: 'absolute',
                      width: 16,
                      height: 16,
                      borderRadius: 100,
                      top: 0,
                      right: 0,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: COLORS.DarkGreen,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontFamily: FONTS.Aspira,
                      }}>
                      {CartItem}
                      {/* Display the length of the cart items */}
                    </Text>
                  </View>
                ) : null}
              </View>
            ),
            tabBarLabelStyle: {color: 'black'},
            tabBarActiveTintColor: 'black',
          }}
        />
      ))}
    </Tab.Navigator>
  );
};





// const TabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="MyOrders" component={MyOrders} />

//       <Tab.Screen name="Cart" component={Cart} />

//     </Tab.Navigator>
//   );
// };

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />


        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen 
          name="SearchScreen" 
          component={SearchScreen} 
          options={{ presentation: 'modal' }} 
        />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="CategoriesList" component={CategoriesList} />




         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;