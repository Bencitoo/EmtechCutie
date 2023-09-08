import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ImageBackground, Dimensions } from 'react-native';

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
      source={require('./hehe.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
        <Text style={styles.title}>TEAM EXODIA</Text>

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
            color="green"
          />
        </View>

        <View style={styles.goalContainer}>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>
                {goal}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: windowWidth,
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
    borderColor: '#cczzz',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 10,
    padding: 5,
    width: '70%',
    color: 'white',
    borderRadius: 5,
  },
  goalContainer: {
    flex: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 16,
    textAlign: 'center',
  },
  goalItem: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  goalText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
