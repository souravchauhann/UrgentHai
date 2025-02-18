import React, { useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../utlis';
import MyButton from '../../../components/comman/button';

const OtpScreen = () => {
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    
    const handleInputChange = (text:"string", index: any) => {
        // Allow only numeric input
        if (/^[0-9]$/.test(text)) {
            // Move to the next input if the text length is 1
            if (text.length === 1 && index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        } else {
            // If the input is not numeric, do nothing (ignore the input)
            inputRefs[index].current.clear(); // Optional: Clear the input if you want
        }
    };

    const handleKeyPress = (e, index) => {
        // If backspace is pressed and the current input is empty, focus on the previous input
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !inputRefs[index].current.value) {
            inputRefs[index - 1].current.focus();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title,{fontFamily:FONTS.BOLD_ITALIC,fontSize:29,}]}>Confirm Your OTP</Text>

            <Text style={styles.title}>Make sure to enter each digit in the corresponding box for verification</Text>
            <View style={styles.otpContainer}>
                {Array(4).fill(0).map((_, index) => (
                    <TextInput
                        key={index}
                        ref={inputRefs[index]}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        onChangeText={(text) => handleInputChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                    />
                ))}
               
            </View>
            <MyButton
        title="Verify"
        onPress={()=>{}}
        backgroundColor={COLORS.GREEN}
        padding={15}
        borderRadius={0}
        width="90%"
        borderColor={COLORS.GREEN}
        borderWidth={2}
        marginTop={25}
        color={COLORS.WHITE}
      />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.BLACK,
    },
    title: {
        fontSize: 19,
        color: '#fff',
        marginBottom: 20,textAlign:'center'
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    input: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 6,
        textAlign: 'center',
        fontSize: 24,
        color: '#fff',
        backgroundColor: COLORS.BLACK,
        fontFamily: FONTS.Medium,
    },
});

export default OtpScreen;