import React from 'react';
import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';

import ComprarTab from './Comprar';
import CarrinhoTab from './Carrinho';
import PerfilTab from './Perfil';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator
      initialRouteName="Comprar"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Comprar"
        component={ComprarTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={22} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={CarrinhoTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilTab}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
