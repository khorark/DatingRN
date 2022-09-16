import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../navigation/screens';
import { CardsScreenNavigation } from '../CardsScreen/CardScreen.nav';

const AuthScreen = () => {
  const { navigate } = useNavigation<CardsScreenNavigation>();

  return (
    <SafeAreaView style={styles.container}>
      <Text>AuthScreen</Text>
      <Button title='Go to cards' onPress={() => navigate(Screens.CardsScreen)} />
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
});
