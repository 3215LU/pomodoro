import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Task } from './src/components/Task'
import { Timer } from './src/components/Timer'


export default function App() {

  const [ currentTask, setCurrentTask] = useState("Limpiar")


  return (
    <SafeAreaView style={styles.container}>
    { currentTask ? 
      <Timer currentTask={currentTask} clearTask={() => setCurrentTask(null)} />
      :
      <Task addTask={setCurrentTask}/>
    }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Platform.OS  === 'android ' ? StatusBar.currentHeight : 0,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
