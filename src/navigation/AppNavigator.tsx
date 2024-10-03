import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ConfirmAppointmentScreen from '../screens/ConfirmAppointmentScreen';
import ConsultationsListScreen from '../screens/ConsultationsListScreen';
import LoginScreen from '../screens/LoginScreen';
import ScheduleConsultationScreen from '../screens/ScheduleConsultationScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ConsultationsList: undefined;
  ScheduleConsultation: undefined;
  ConfirmAppointment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'Tela Inicial' }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Acesse sua conta' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: 'Cadastrar' }}
      />
      <Stack.Screen
        name="ConsultationsList"
        component={ConsultationsListScreen}
        options={{ title: 'Consultas Agendadas' }}
      />
      <Stack.Screen
        name="ScheduleConsultation"
        component={ScheduleConsultationScreen}
        options={{ title: 'Agendar Consulta' }}
      />
      <Stack.Screen
        name="ConfirmAppointment"
        component={ConfirmAppointmentScreen}
        options={{ title: 'Confirmação de Agendamento' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;