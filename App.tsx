import React from 'react';
import { SafeAreaView, StyleSheet,View } from 'react-native';
import Navigation from './src/screens/navigation';
import OrderScreen from './src/screens/customerScreens/orderScreen';
import CategoriesList from './src/screens/customerScreens/allCategoryList';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      {/* <OrderScreen/> */}
      {/* <CategoriesList/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;