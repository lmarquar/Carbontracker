import { Stack, Link } from 'expo-router';
import { Image, Button, Text, View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
		title: 'Settings',
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
      }}
    >
		  <Text>Hallo Tipot</Text>
    </Stack>
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	image: {
	  width: 50,
	  height: 50,
	},
});