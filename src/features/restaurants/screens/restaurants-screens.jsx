import { Searchbar } from "react-native-paper";

import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import RestaurantsInfoCard from "../components/restaurants-info-card";

export const RestaurantsScreen = () => (
	<SafeAreaView>
		<View style={{ padding: 15 }}>
			<Searchbar />
		</View>
		<View style={{ padding: 15 }}>
			<RestaurantsInfoCard />
		</View>
	</SafeAreaView>
);

const styles = StyleSheet.create({});
