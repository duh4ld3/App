import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import IntroScreen from './screens/IntroScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./assets/Logotipo.jpg')}
        style={{ width: 50, height: 50, resizeMode: 'contain' ,marginTop:5}}
      />
      <Text style={{ marginLeft: 10, fontSize: 18 }}>RecolectApp</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: '#fff' },
        }}
      >
        <Stack.Screen name='Intro' component={IntroScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="InicioSesion" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

