import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, Alert, Pressable } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../../utlis';
import CustomInput from '../../../components/comman/input';
import MyButton from '../../../components/comman/button';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handlePress = () => {
    // Alert.alert('Button Pressed!', 'You pressed the MyButton.');
    navigation.navigate('Main')
  };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{height:300,width:'100%',borderWidth:0,borderColor:'red',justifyContent:'center',alignItems:'center'}}>
            <Image
          source={IMAGES.LOGO_GREEN}
          style={{width:100,height:100}}
          />
            </View>
       
            <CustomInput
                label="Email"
                placeholder="Please Enter Your Email"
                value={email}
                onChangeText={setEmail}
                marginTop={0}
                
            />
             <CustomInput
                label="Password"
                placeholder="Please Enter Your Password"
                value={password}
                onChangeText={setPassword}
                marginTop={30}
                
            />
            <Pressable style={{alignSelf:'flex-end'}} onPress={()=>{navigation.navigate('ForgotScreen')}}>
            <Text style={{fontFamily:FONTS.Medium,fontSize:15,color:COLORS.GREEN,marginTop:30,}}>Forgot Your Password ? </Text>

            </Pressable>
            <MyButton
        title="Log In"
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
      <Pressable
      onPress={()=>{
    navigation.navigate('Registration')

      }}
      >
     <Text style={{color:'white',fontFamily:FONTS.Medium,fontSize:15,marginTop:30}}>No Account ? Create one</Text>

      </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
         flex: 1,
          alignItems: 'center',
          backgroundColor: COLORS.BLACK,
    },
});

export default Login;
