import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';

const CARDS = {
  1: {
    image: require('src/assets/images/1.jpg'),
    size: { width: 450, height: 589 },
  },
  2: {
    image: require('src/assets/images/2.jpg'),
    size: { width: 450, height: 529 },
  },
  3: {
    image: require('src/assets/images/3.jpg'),
    size: { width: 450, height: 566 },
  },
  4: {
    image: require('src/assets/images/4.jpg'),
    size: { width: 450, height: 573 },
  },
};

const CardsScreen = () => {
  return (
    <SafeAreaView>
      <Text>CardsScreen</Text>
    </SafeAreaView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
