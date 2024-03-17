import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';



const App = () => {

  const [tasks, setTasks] = useState(
    [
    'Do laundry',
    'Go to gym',
    'Walk dog'
    ]
  );

  return (
    <SafeAreaView>
      <ToDoList tasks = {tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
