import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import Header from '../../components/Header';

const Home = () => {
  const procedures = [
    {
      title: 'Limpeza de Pele',
      description: 'Realize uma limpeza profunda de pele para remover impurezas e melhorar a saúde da sua pele.',
      image:null, //adicionar imagem require ou uri
    },
    {
      title: 'Massagem Relaxante',
      description: 'Desfrute de uma massagem relaxante para aliviar o estresse e melhorar seu bem-estar.',
      image:null, //adicionar imagem require ou uri
    },
    {
      title: 'Tratamento Facial',
      description: 'Melhore a aparência da sua pele com nosso tratamento facial personalizado.',
      image:null, //adicionar imagem require ou uri
    },
    {
      title: 'Depilação a Cera',
      description: 'Remova os pelos de forma eficaz e duradoura com a depilação a cera.',
      image:null,
    },
    {
      title: 'Manicure e Pedicure',
      description: 'Mime suas mãos e pés com nossos serviços de manicure e pedicure.',
      image:null,
    },
    {
      title: 'Manicure e Pedicure',
      description: 'Mime suas mãos e pés com nossos serviços de manicure e pedicure.',
      image: null,
    },
  ];

  return (
    <ScrollView>
     <View > 
      <Header/>
     </View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Procedimentos</Text>
      </View>

      <View style={styles.procedureContainer}>
        {procedures.map((procedure, index) => (
          <View style={styles.procedureBox} key={index}>
            <Text style={styles.procedureTitle}>{procedure.title}</Text>
            <Image source={procedure.image} style={styles.procedureImage} />
            <Text style={styles.procedureDescription}>{procedure.description}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Agendar Horário</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E4C1C1',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'white',
  },
  procedureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },
  procedureBox: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  procedureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  procedureImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  procedureDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
    alignItems: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
