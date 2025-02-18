import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';
import { FONTS } from '../../utlis';

interface MyButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  padding?: number;
  borderRadius?: number;
  width?: string | number;
  borderColor?: string;
  borderWidth?: number;
  textStyle?: TextStyle;
  marginTop?: number;
  color?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  title,
  onPress,
  backgroundColor = '#007BFF', 
  padding = 10,                
  borderRadius = 0,           
  width = '90%',               
  borderColor = 'red',        
  borderWidth = 1,             
  textStyle,
  marginTop,
  color = '#FFFFFF'           
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          padding,
          borderRadius,
          width,
          borderColor,
          borderWidth,
          marginTop,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontFamily: FONTS.BOLD
  },
});

export default MyButton;
