import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
          }} />
      <Tabs.Screen
        name="social"
        options={{
          title: 'social',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused?'people-circle-outline' :'share-social-sharp'} color={color} size={24} />
          ),
          }} />
    </Tabs>
  );
}