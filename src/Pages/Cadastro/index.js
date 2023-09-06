import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [cityError, setCityError] = useState('');

  const handleRegister = () => {
    let isValid = true;

    if (fullName.trim() === '') {
      setFullNameError('Por favor, preencha o Nome Completo.');
      isValid = false;
    } else {
      setFullNameError('');
    }

    if (cpf.trim() === '') {
      setCpfError('Por favor, preencha o CPF.');
      isValid = false;
    } else {
      setCpfError('');
    }

    if (email.trim() === '') {
      setEmailError('Por favor, preencha o Email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    

    if (isValid) {
      // Implemente a lógica de cadastro aqui
      // Você pode enviar os dados para um servidor, banco de dados, etc.
      console.log('Nome Completo:', fullName);
      console.log('CPF:', cpf);
      console.log('Email:', email);
      console.log('Número de Telefone:', phoneNumber);
      console.log('Cidade:', city);
    }
  };

  return (
    <View style={styles.container}>
      {/* COLOCAR iMAGEM DA LOGO */}
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        onChangeText={(text) => setFullName(text)}
      />
      {fullNameError ? (
        <Text style={styles.errorMessage}>{fullNameError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
        keyboardType="numeric"
      />
      {cpfError ? (
        <Text style={styles.errorMessage}>{cpfError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      {emailError ? (
        <Text style={styles.errorMessage}>{emailError}</Text>
      ) : null}
      <View style={styles.phoneAndCityContainer}>
        <TextInput
          style={styles.halfInput}
          placeholder="Número de Telefone"
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
        />
        {phoneNumberError ? (
          <Text style={styles.errorMessage}>{phoneNumberError}</Text>
        ) : null}
        <TextInput
          style={styles.halfInput}
          placeholder="Cidade"
          onChangeText={(text) => setCity(text)}
        />
        {cityError ? (
          <Text style={styles.errorMessage}>{cityError}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#A88282"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white",
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#E4C1C1"
  },
  phoneAndCityContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  halfInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 5,
    backgroundColor: "#E4C1C1"
  },
  registerButton: {
    backgroundColor: 'purple',
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
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Register;
