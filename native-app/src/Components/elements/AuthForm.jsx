import React, {useState} from "react";
import {View} from "react-native";

export const AuthForm = () => {
    const [email, setMail] = useState('')
    const [password, setPassword] = useState('')

    return <View>
        <AuthForm value={email} onChangeText={setMail} placeholder='Email...'/>
        <AuthForm value={password} onChangeText={setPassword} placeholder='Password...'/>
    </View>
}
