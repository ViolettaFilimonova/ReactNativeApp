import React, {useState} from "react";
import {TextInput, View} from "react-native";

export const Filed = (props) => {


    return <TextInput style={inputStyles.input} {...props}/>

}
const inputStyles = StyleSheet.create({
    input: {
        borderRadius: 15,
        color: 	'rgb(0, 255, 255)',
    }
})
