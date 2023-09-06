import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    if (userName.trim() === '') {
      setUserNameError('Por favor, preencha o campo UserName.');
      return;
    } else {
      setUserNameError('');
    }
  
    if (password.trim() === '') {
      setPasswordError('Por favor, preencha o campo Senha.');
      return;
    } else {
      setPasswordError('');
    }
  
    // Verifica as credenciais (exemplo simples, você deve implementar a lógica real)
    if (userName === 'usuario' && password === 'senha') {
      // Navega para a tela "Home" após o login bem-sucedido
      navigation.navigate("HomeTabs");
    } else {
      // Exibe uma mensagem de erro se as credenciais estiverem incorretas
      console.log('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={(text) => setUserName(text)}
      />
      {userNameError ? (
        <Text style={styles.errorMessage}>{userNameError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      {passwordError ? (
        <Text style={styles.errorMessage}>{passwordError}</Text>
      ) : null}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não possui uma conta?</Text>
        <TouchableOpacity onPress={() => console.log('Redirecionar para a página de cadastro')}>
          <Text style={styles.signupLink}
          onPress={() => navigation.navigate("Register")}
          >Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:"#A88282"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor:"#E4C1C1",
    color:"white"
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#E5BEBE',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 16,
    
  },
  signupText: {
    fontSize: 16,
    color:"white",
  },
  signupLink: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    color: 'purple',
  },
});

export default Login;
