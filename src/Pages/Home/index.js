import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/Header';

import axios from 'axios'
const Home = () => {
  const [procedures, setProceures] = React.useState([])


  async function getPacotes() {
    const response = await axios.get("http://191.52.55.170:19003/api/pacote/")
    setProceures(response.data)
  }

  React.useEffect(() => {
    getPacotes()
  },[])

  return (
    <ScrollView>
     <View > 
      <Header/>
     </View>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}></Text>
      </View>

      <View style={styles.procedureContainer}>
        {procedures.map((procedure, index) => (
          <View style={styles.procedureBox} key={index}>
            <Text style={styles.procedureTitle}>{procedure.nome}</Text>
            <Image source={{uri: procedure.imagem[0].url}} style={styles.procedureImage} />
            <Text style={styles.procedureDescription}>{procedure.descricao}</Text>
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

