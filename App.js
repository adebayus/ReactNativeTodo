import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/header';
import TodoItem from './components/TodoItem';

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy coffe', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play on the switch', key: '3' },
	]);
	const deleteHandler = (key) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((item) => item.key !== key);
		});
	};
	const addingTodoHandler = (event, text) => {
		// setText('');
		// event.persist();
		if (text.length > 3) {
			setTodos((prevTodos) => {
				return [
					{
						text: text,
						key: Math.random().toString(),
					},
					...prevTodos,
				];
			});
		} else {
			Alert.alert('Title', 'Detail', [
				{
					text: 'close',
					onPress: () => console.log('alert'),
				},
			]);
		}
	};
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View Style={styles.container}>
				{/* {Header} */}
				<Header />
				<View style={styles.content}>
					<AddTodo addingTodoHandler={addingTodoHandler} />
					{/* {OTdo Form} */}
					<View style={styles.list}>
						<FlatList
							data={todos}
							renderItem={({ item }) => (
								<TodoItem
									item={item}
									deleteHandler={deleteHandler}
								/>
								// <Text>{item.text}</Text>
							)}
						/>
					</View>
				</View>
				{/* <StatusBar style="auto"/> */}
			</View>
		</TouchableWithoutFeedback>

		// <View style={styles.container}>
		//   <Text>Open up App.js to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});
