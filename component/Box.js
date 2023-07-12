import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Box({ no, boxInfo, chance, winner }) {
	const { isXChance, setIsXChance } = chance;
	const { boxes, setBoxes } = boxInfo;
	const player = isXChance ? "X" : "O";
	return (
		<View>
			<Text style={{ fontFamily: "Roboto-Black" }}>1S</Text>
		</View>
	);
}
