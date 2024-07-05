import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((button) => (
          <TouchableOpacity key={button} style={styles.button} onPress={() => handlePress(button)}>
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#add8e6',
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#a9c1f5',
    padding: 20,
  },
  resultText: {
    fontSize: 48,
    color: '#000',
  },
  inputText: {
    fontSize: 24,
    color: '#888',
  },
  buttonsContainer: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 1,
    minWidth: '25%',
    minHeight: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderWidth: 0.5,
    borderColor: '#888',
  },
  buttonText: {
    fontSize: 36,
    color: '#000',
  },
});

export default App;
