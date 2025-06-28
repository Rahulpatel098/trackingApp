import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab_layout = () => {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:'red',tabBarActiveBackgroundColor:'blue'}}>
      <Tabs.Screen name='index' options={{title:'home',
        tabBarIcon:(props)=> {
            return(
               <FontAwesome name="home" size={24} color={props.color} />
              )
            },
          }} />
      <Tabs.Screen name='login' options={{title:'home',
        tabBarIcon:({color,focused})=>{
          return focused?
          ( <FontAwesome name="home" size={24} color={color} /> )
          :
          ( <FontAwesome name="mobile" size={24} color={color} /> )
        }
      }}/>
    </Tabs>
  )
}

export default Tab_layout;