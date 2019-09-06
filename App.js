/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,TextInput,
  Text,
  FlatList,
  Button,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App(){
  const [courseGoals,setCourseGoals] = useState([]);

  

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [
      ...courseGoals,
      {id:Math.random().toString(),value:enteredGoal}
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      
      <FlatList 
        keyExtractor={(item,index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
    padding:50,
  },
 
  
});
