import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddTodo({ addingTodoHandler }) {
	const [text, setText] = useState('');
	const inputHandler = (val) => {
		setText(val);
	};
	const emptyTextHandler = (event) => {
		addingTodoHandler(event, text);
		setText('');
	};
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder='add todo'
				onChangeText={(val) => inputHandler(val)}
				value={text}
			/>
			<Button
				onPress={(event) => emptyTextHandler(event)}
				color='coral'
				title='Add Todo'
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
});
