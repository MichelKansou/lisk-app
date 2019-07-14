import React  from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


export const CustomButton = ({ onPress, viewStyle, textStyle, text }) => (
    <TouchableOpacity
    onPress={onPress}>
        <View style={viewStyle}>
            <Text style={textStyle}>
                {text}
            </Text>
        </View>
    </TouchableOpacity>
);