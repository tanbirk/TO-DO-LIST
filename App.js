import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the task will go */}
          <Task text={' Complete To-do-List'} />
          <Task text={'Go to sleep'} />
          
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
   
  },
  tasksWrapper:{
      paddingTop: 80,
      paddingHorizontal: 20,
  },
  sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold'
  },
  items:{
      marginTop: 30,
  }
});
