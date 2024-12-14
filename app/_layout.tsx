import { Link, Stack } from "expo-router";
import {Image, Text, View, StyleSheet, Button } from "react-native";

function LogoTitle() {
	return (
		<Image style={styles.image} source={require('@/assets/images/tacho.png')} />
	);
}
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
			headerTitle: () => (
				<Image style={{ width: 50, height: 50 }} source={require('@/assets/images/tacho.png')} />
			),
			headerRight: () => (
				<Link href="/(settings)/ImageViewer" className="btn btn-primary">Sign up</Link>
	  //          <Link href={require('@/components/projects')} className="btn btn-primary">Sign up</Link>
	  //          <Link href={require('@/app/(tabs)/social')} className="btn btn-primary">Sign up</Link>
			  ),
		}}>
		<Stack.Screen name="(tabs)" options={{ headerShown: true}} />
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
