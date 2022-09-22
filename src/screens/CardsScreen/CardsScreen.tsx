import { SafeAreaView } from 'react-native';
import React from 'react';
import Card from './components/Card';
import { useCardsScreen } from 'src/screens/CardsScreen/CardsScreen.hook';
import styles from './CardsScreen.styles';

const CardsScreen = () => {
  const h = useCardsScreen();

  return (
    <SafeAreaView style={styles.container}>
      {h.cards.map(({ id, image }, idx) => {
        return <Card key={id} idx={idx} image={image} onSwipe={h.onSwipe} />;
      })}
    </SafeAreaView>
  );
};

export default CardsScreen;
