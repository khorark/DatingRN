import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import Card from './components/Card';

const CARDS = [
  {
    id: 1,
    image: require('src/assets/images/1.jpg'),
  },
  {
    id: 2,
    image: require('src/assets/images/2.jpg'),
  },
  {
    id: 3,
    image: require('src/assets/images/3.jpg'),
  },
  {
    id: 4,
    image: require('src/assets/images/4.jpg'),
  },
];

const CardsScreen = () => {
  const [cards, setcards] = useState(CARDS);
  const onSwipe = useCallback(() => {
    setcards((state) => [state[state.length - 1], ...state.slice(0, 3)]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {cards.map(({ id, image }, idx) => {
        return <Card key={id} idx={idx} image={image} onSwipe={onSwipe} />;
      })}
    </SafeAreaView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
