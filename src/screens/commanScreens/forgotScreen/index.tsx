
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, Alert, Pressable } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../../utlis';
import CustomInput from '../../../components/comman/input';
import MyButton from '../../../components/comman/button';

const ForgotScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handlePress = () => {
   navigation.navigate('OtpScreen')
  };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{width:'100%',paddingLeft:20,marginTop:40}}>
             <Text style={{color:COLORS.WHITE,fontFamily:FONTS.BOLD_ITALIC,fontSize:30,textAlign:'left'}}>Forgot Password</Text>
             <Text style={{color:COLORS.WHITE,fontFamily:FONTS.Medium,fontSize:16,textAlign:'left',marginTop:40,marginBottom:40}}>Forgot your password? No problem! We'll send you a One-Time Password (OTP) to your registered email.</Text>

            </View>
        <View style={{borderWidth:0,borderColor:'red',flex:1,width:'100%',justifyContent:'flex-end',paddingBottom:"10%",alignItems:'center'}}>
            <CustomInput
                label="Email"
                placeholder="Please Enter Your Email"
                value={email}
                onChangeText={setEmail}
                marginTop={0}
                
            />
            <View style={{marginBottom:50}}></View>
            <MyButton
        title="Submit"
        onPress={handlePress}
        backgroundColor={COLORS.GREEN}
        padding={15}
        borderRadius={0}
        width="90%"
        borderColor={COLORS.GREEN}
        borderWidth={2}
        marginTop={30}
        color={COLORS.BLACK}
      />
       <MyButton
        title="Go Back"
        onPress={handlePress}
        backgroundColor={COLORS.BLACK}
        padding={15}
        borderRadius={0}
        width="90%"
        borderColor={COLORS.GREEN}
        borderWidth={2}
        marginTop={15}
        color={COLORS.WHITE}
      />
          </View>
    
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

export default ForgotScreen;
