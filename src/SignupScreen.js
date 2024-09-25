// src/SignupScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      setErrorMessage('Lỗi khi đăng ký. Vui lòng thử lại.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Button title="Đăng Ký" onPress={handleSignup} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 },
  error: { color: 'red', marginTop: 10 }
});

export default SignupScreen;
