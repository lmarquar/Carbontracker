import { Link, Stack } from 'expo-router';
import { Image, Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
		<Text>Hallo Tipot</Text>
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
