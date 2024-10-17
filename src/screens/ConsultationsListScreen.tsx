import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Consultation {
  id: number;
  date: string;
  doctor: string;
  specialty: string;
  status: string;
  username: string;
}

const ConsultationsListScreen = () => {
  const [consultations, setConsultations] = useState<Consultation[]>([]);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        // Obter o token do armazenamento local (ou qualquer mecanismo de armazenamento)
        const token = await AsyncStorage.getItem('token'); 
        
        if (token) {
          const response = await axios.get('http://localhost:3000/api/consultations', {
            headers: {
              Authorization: `Bearer ${token}` // Enviar o token no cabeçalho
            }
          });
          setConsultations(response.data.consultations);
        } else {
          console.error('Token não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      }
    };

    fetchConsultations();
  }, []);

  const renderItem = ({ item }: { item: Consultation }) => (
    <View style={styles.consultationItem}>
      <Text>Paciente: {item.username}</Text>
      <Text>Data: {item.date}</Text>
      <Text>Médico: {item.doctor}</Text>
      <Text>Especialidade: {item.specialty}</Text>
      <Text>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={consultations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  consultationItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
});

export default ConsultationsListScreen;