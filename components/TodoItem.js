import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, deleteHandler }) {
	return (
		<View>
			<TouchableOpacity onPress={() => deleteHandler(item.key)}>
				<Text style={styles.item}>{item.text}</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		borderColor: '#bbb',
		borderStyle: 'dashed',
		borderRadius: 10,
		borderWidth: 1,
	},
});
