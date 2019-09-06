import React from 'react';
import {
        View,
        StyleSheet,
        TextInput,
        Button,
    } from 'react-native';

const GoalInput = props => {
    
    const [enteredGoal,setEnteredGoal] = useState('');
    
    const goalInputHandler = (enterText) => {
        setEnteredGoal(enterText)
      };

    return (
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
            <Button
            title="ADD"
            onPress={props.onAddGoal}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        margin:10,
        justifyContent:'space-between',
        alignItems:'center',
    },
    input:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10
    },
});

export default GoalInput;