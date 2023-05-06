import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const Registro = () => {
  const [comuna, setComuna] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    // Obtiene la ubicación del usuario al cargar la pantalla
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Hace una petición a la API para obtener la región y comuna
        axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=es`)
          .then(response => {
            setComuna(response.data.locality);
            setRegion(response.data.principalSubdivision);
          })
          .catch(error => console.log(error));
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View>
      <Text>Comuna: {comuna}</Text>
      <Text>Región: {region}</Text>
      <TextInput placeholder="Nombre completo" />
      <TextInput placeholder="Número de teléfono" />
      <TextInput placeholder="Correo electrónico" />
      <TextInput placeholder="Contraseña" />
      <Button title="Registrarse" onPress={() => console.log('Registrado!')} />
    </View>
  );
}

export default Registro;
