import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';

const Promotion = () => {
  const promotions = [
    {
      title: 'Pacote de Spa Relaxante',
      description: 'Desfrute de um dia de relaxamento com massagem, tratamento facial e manicure.',
      image:null,
      price: 'R$ 199,99',
    },
    {
      title: 'Pacote de Emagrecimento',
      description: 'Alcance seus objetivos de perda de peso com nosso pacote de emagrecimento personalizado.',
      image:null,
      price: 'R$ 299,99',
    },
    {
      title: 'Pacote de Beleza Completa',
      description: 'Transforme sua aparência com nosso pacote de beleza completa, incluindo cabelo, maquiagem e mais.',
      image:null,
      price: 'R$ 149,99',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Text style={styles.title}>Pacotes</Text>
      {promotions.map((promotion, index) => (
        <View style={styles.promotionCard} key={index}>
          <Image source={promotion.image} style={styles.promotionImage} />
          <View style={styles.promotionDetails}>
            <Text style={styles.promotionTitle}>{promotion.title}</Text>
            <Text style={styles.promotionDescription}>{promotion.description}</Text>
            <Text style={styles.promotionPrice}>A partir de {promotion.price}</Text>
            <TouchableOpacity style={styles.promotionButton}>
              <Text style={styles.promotionButtonText}>Saiba mais</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4C1C1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color:'white'
  },
  promotionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#F5F5F5',

  },
  promotionImage: {
    width: 150,
    height: 150,
  },
  promotionDetails: {
    flex: 1,
    padding: 16,
  },
  promotionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  promotionDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  promotionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  promotionButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  promotionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Promotion;
