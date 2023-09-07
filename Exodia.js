import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setEnteredGoalText("");
  }

  return (
    <ImageBackground
      source={require('./exodia.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        <Text style={styles.title}> 🍆🍆 TEAM EXODIA 🍆🍆</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
            placeholderTextColor="white"
          />
          <Button
            title="Add Goal"
            onPress={addGoalHandler}
            disabled={enteredGoalText === ""}
            color="white"
          />
        </View>

        <View style={styles.goalContainer}>
          {courseGoals.map((goal, index) => (
            <Text key={index} style={styles.goal}>
              🚀 {goal}
            </Text>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 10,
    padding: 5,
    width: '70%',
    color: 'white',
  },
  goalContainer: {
    flex: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  goal: {
    fontSize: 18,
    marginBottom: 8,
    color: 'white',
  },
});
