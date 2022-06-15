import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantsInfoCard = ({
	name = "Some restik",
	icon,
	photos = [
		"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
	],
	address = "Baker Street 18",
	isOpen,
	rating,
	isClosedTemporarily,
}) => {
	return (
		<Card elevation={5}>
			<Card.Cover
				key={name}
				source={{ uri: photos[0] }}
				style={styles.cover}
			/>
			<Text style={styles.title}>{name}</Text>
		</Card>
	);
};

const styles = StyleSheet.create({
	cover: {
		padding: 20,
		backgroundColor: "white",
	},
	title: {
		padding: 16,
	},
});

export default RestaurantsInfoCard;
