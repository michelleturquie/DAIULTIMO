import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FondoProvider } from './Contexts/FondoImagenContext';


// views import 
import Home from './Views/Home';
import HoraYTemperatura from './Views/horaYTemperatura';
import Contactos from './Views/contactos';
import NroEmergencia from './Views/nroEmergencia';
import Identificacion from './Views/Identificacion'
import ImagenFondo from './Views/imagenFondo'


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <FondoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name="HoraTemp" component={HoraYTemperatura}
            options={{
              headerTitle: "Hora y temperatura actuales",
            }} />

          <Stack.Screen name="Contactos" component={Contactos}
            options={{
              headerTitle: "Contactos",
            }} />

          <Stack.Screen name="NroEmergencia" component={NroEmergencia}
            options={{

              headerTitle: "Nro de Emergencia",
            }} />

          <Stack.Screen name="Identificacion" component={Identificacion}
            options={{
              headerTitle: "Identificacion",
            }} />

          <Stack.Screen name="ImagenFondo" component={ImagenFondo}
            options={{
              headerTitle: "Cambiar Fondo",
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </FondoProvider>


  );
}
