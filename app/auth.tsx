import { View, KeyboardAvoidingView, Platform, StyleSheet, } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import React, { useState } from 'react'
import { account } from '@/lib/appwrite';

const Details = () => {
    const [isSignUP, setIsSignUP] = useState<boolean>(false);
    const [email,setEmail] =useState<String>("");
    const [password,setPassword]=useState<String>("");
    const [error,setError] =useState<String | null>("");


    const handel = () => {
        setIsSignUP((prev) => !prev)
    }
    
    
    const handelAuth= async()=>{
        if(!email || !password){
            setError("Please fill all the fields");
            return;
        }
        if(password.length<6){
            setError("password must be atleast 6 character long ")
        }

        setError(null);
      


    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.title}>{isSignUP ? "Create Account " : "WelCome Back "}</Text>
                <TextInput label="Email" autoCapitalize='none' keyboardType='email-address'
                    placeholder='write your email'
                    mode='outlined'
                    onChangeText={setEmail}
                />
                <TextInput label="password" autoCapitalize='none' keyboardType='email-address'
                    placeholder='yourPassword'
                    mode='outlined'
                    onChangeText={setPassword}
                    
                />
                {error && <Text> {error}</Text>}
                <Button mode='contained'style={styles.btn} 
                onPress={handelAuth}
                >{isSignUP ? "SignUp" : "Welcome Back "}</Button>
                <Button mode='text' onPress={handel}>{isSignUP ? " Alerady have an account?  Signup " : "dont have an account create one "}</Button>
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5F5F5"
    },
    content:{
        flex:1,
        padding:16,
        justifyContent:'center'

    },
    title:{
        textAlign:'center',
        marginBottom:20,
        fontSize:30
    },
    btn:{
        marginTop:30
    }

})

export default Details;