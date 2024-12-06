import { Stack } from "expo-router";
import { Button } from "react-native";

export default function RootLayout() {
  return (
    <Stack
		screenOptions={{
			headerStyle: {
			backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
			fontWeight: 'bold',
			},
		}}>
		<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
	</Stack>
  );
}
