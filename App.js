import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Box from "./component/Box";

export default function App() {
	const [boxes, setBoxes] = useState(Array(9).fill(null));
	const [isXChance, setIsXChance] = useState(true);
	const [winner, setWinner] = useState(null);

	function playBoard(no) {
		return (
			<Box
				no={no}
				boxInfo={{ boxes, setBoxes }}
				chance={{ isXChance, setIsXChance }}
				winner={{ winner }}
			/>
		);
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" backgroundColor="orange" />
			<View style={styles.playBoard}>
				<View style={styles.rows}>
					{playBoard(0)}
					{playBoard(1)}
					{playBoard(2)}
				</View>
				<View style={styles.rows}>
					{playBoard(3)}
					{playBoard(4)}
					{playBoard(5)}
				</View>
				<View style={styles.rows}>
					{playBoard(6)}
					{playBoard(7)}
					{playBoard(8)}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	playBoard: {
		borderWidth: 10,
		borderRadius: 10,
		borderColor: "orange",
	},
	rows: {
		flexDirection: "row",
	},
});
