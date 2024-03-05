import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList //FlatList va servir à afficher une liste de donnée déroulante sans tout charger en même temps
} from 'react-native';

export default function Todo() {

  const [enteredText, setEnteredText] = useState('');
  const [todos, setTodos] = useState([]);

  const todoInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addTodoHandler = () => {
    setTodos(currentTodos => [
      ...currentTodos,
      {text: enteredText, key: Math.random().toString()}
    ]);
    setEnteredText('');
  };

  const deleteTodoHandler = (index) => {
    setTodos(currentTodos => {
      const updatedTodos = [...currentTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a task"
            value={enteredText}
            onChangeText={todoInputHandler}
          />
          <Button title="Add" onPress={addTodoHandler} />
        </View>
      </View>




      <View style={styles.list}>
        <FlatList 
        data={todos} 
        renderItem={itemData => {
          
          return (
            <View style={styles.task}>
              <Text style={styles.todo}>{itemData.item.text}</Text>
              <Button
                color={'red'}
                title="Delete"
                onPress={() => deleteTodoHandler(itemData.index)}
              />
            </View>
          );
        }} 
        keyExtractor={(item, index) => item.key}
        alwaysBounceVertical={false}>
            <View style={styles.task}>
              <Text style={styles.todo}>{todos}</Text>
              <Button
                color={'red'}
                title="Delete"
                onPress={() => deleteTodoHandler(index)}

                
              />
            </View>


        </FlatList>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',

    margin: 20,
    width: '100%',
    padding: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: '80%',
    marginRight: 8,
    borderRadius: 6,
  },

  list: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
  },
  todo: {
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    color: 'white',
  },

  task: {
    minHeight: 30,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    backgroundColor: '#5e0aab',
  },

});


