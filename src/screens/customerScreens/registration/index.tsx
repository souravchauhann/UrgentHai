import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, Alert } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../../utlis';
import CustomInput from '../../../components/comman/input';
import MyButton from '../../../components/comman/button';

const Registration = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');



const handlePress = (value) => {
    if(value == "GoBack"){
        navigation.goBack()
    }
    else{
        Alert.alert('On Working');

    }
  };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{height:95,width:'100%',borderWidth:0,borderColor:'red',justifyContent:'center',alignItems:'center'}}>
            <Image
          source={IMAGES.LOGO_GREEN}
          style={{width:90,height:90}}
          />
            </View>
       
            <CustomInput
                label="Name"
                placeholder="Please Enter Full Name"
                value={name}
                onChangeText={setName}
                marginTop={0}
                
            />
             <CustomInput
                label="Email"
                placeholder="Please Enter Email"
                value={email}
                onChangeText={setEmail}
                marginTop={30}
                
            />
             <CustomInput
                label="Phone Number"
                placeholder="Please Enter Valid Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                marginTop={30}
                
            />
             <CustomInput
                label="Password"
                placeholder="Please Enter Password"
                value={password}
                onChangeText={setPassword}
                marginTop={30}
                
            />
             <CustomInput
                label="Password"
                placeholder="Please Enter Confirm Password"
                value={cPassword}
                onChangeText={setCPassword}
                marginTop={30}
                
            />
     <Text style={{color:'white',fontFamily:FONTS.Medium,fontSize:15,marginTop:30}}>Already Account ? Log In</Text>

            <MyButton
        title="Register"
        onPress={()=>{handlePress('Register')}}
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
        title="Back"
        onPress={()=>{handlePress('GoBack')}}
        backgroundColor={COLORS.GREEN}
        padding={15}
        borderRadius={0}
        width="90%"
        borderColor={COLORS.GREEN}
        borderWidth={2}
        marginTop={20}
        color={COLORS.WHITE}
      />
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

export default Registration;
