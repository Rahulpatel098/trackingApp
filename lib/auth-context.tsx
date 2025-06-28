import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { Models } from 'react-native-appwrite'


type AuthContextType={
    user:Models.User<Models.Preferences> |null;
    signUP:(email:string,password:string)=> Promise<void>
    SignIn:(email:string,password:string)=> Promise<void>
}

const AuthContext=createContext<AuthContextType | undefined>(undefined);


export function AuthProvider({children}:{children:React.ReactNode}) {
    const signUP=async()=>{

    }
  return (
    <AuthContext.Provider value={{user,signUP,SignIn}}>
   
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){

}
