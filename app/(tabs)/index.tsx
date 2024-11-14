import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from "react-native";

function LogoTitle() {
	return (
		<Image style={styles.image} source={require('@/assets/images/tacho.png')} />
	);
}
export default function Index() {
  return (
    <View
      style={styles.container}
    >
		<Stack.Screen
			options={{
				title: 'My home',
				headerStyle: { backgroundColor: '#f4511e' },
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},

				headerTitle: () => (
					<Image style={{ width: 50, height: 50 }} source={require('@/assets/images/tacho.png')} />
				),
			}}
	  	/>
		<Text>Edit app/index.tsx to edit this screen.</Text>
		<Link href="/social">View socials</Link>
    </View>
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
