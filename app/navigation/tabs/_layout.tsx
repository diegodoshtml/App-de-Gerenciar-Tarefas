import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Layout(){
     return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen 
                  name= 'index'
                  options={{
                    title:'Ínicio',
                    tabBarIcon: ({color, size}) => <Ionicons name='home-outline' size={size} color={color}/>
                  }}
                  />

                  <Tabs.Screen 
                  name= 'about'
                  options={{
                    title:'Clonar',
                    tabBarIcon: ({color, size}) => <AntDesign name="creditcard" size={24} color="black" />
                  }}
                  />
                  
                  <Tabs.Screen 
                  name= 'settings'
                  options={{
                    title:'Laranjas',
                    tabBarIcon: ({color, size}) => <AntDesign name="idcard" size={24} color="black" />
                  }}
                  />

                  <Tabs.Screen 
                  name= 'puxardados'
                  options={{
                    title:'Puxardados',
                    tabBarIcon: ({color, size}) => <AntDesign name="search1" size={24} color="black" />
                  }}
                  />
        </Tabs>
        
    );}