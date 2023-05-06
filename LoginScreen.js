import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

import Colors from './Colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // lógica para hacer el inicio de sesión
    console.log('Iniciando sesión...');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>

      <Input
        placeholder="Correo electrónico"
        leftIcon={<Icon color="#27ae60" name='envelope' type='font-awesome' />}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Contraseña"
        leftIcon={<Icon color="#27ae60" name='lock' type='font-awesome' />}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: Colors.darkGreen,
  },
  button: {
    backgroundColor: Colors.success,
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;

