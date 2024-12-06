import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from "react-native";

import * as SQLite from 'expo-sqlite';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        headerRight: () => (
          <Button
          title="Info"
          onPress={() => alert('This is a button!')}
          />
        ),
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="social"
        options={{
          title: 'social',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused?'people-circle-outline' :'people-circle-sharp'} color={color} size={24} />
          ),
          }} />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
          }} />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'How to compensate',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'leaf-sharp' : 'leaf-outline'} color={color} size={24} />
          ),
          }} />
    </Tabs>
  );
}