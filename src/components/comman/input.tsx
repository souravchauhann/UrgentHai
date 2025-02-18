import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FONTS } from '../../utlis';

const CustomInput = ({ label, placeholder, value, onChangeText,marginTop }) => {
    return (
        <View style={[styles.container,{marginTop}]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholderTextColor={"gray"}
                    placeholder={placeholder}
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'white',
        height: '100%',
         width:'90%',borderColor:"white",height:55,borderBottomWidth:1
    },
    labelContainer: {
        height: '30%',
    },
    label: {
        color: 'white',
        fontSize: 14,
        fontFamily:FONTS.Medium

    },
    inputContainer: {
        height: '70%',
    },
    input: {
        height: "100%",
        color: 'white',
        fontFamily:FONTS.Medium
        // Assuming COLORS.WHITE is 'white'
    },
});

export default CustomInput;