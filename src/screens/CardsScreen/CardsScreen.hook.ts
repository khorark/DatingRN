import { useCallback, useState } from 'react';

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

export const useCardsScreen = () => {
  const [cards, setcards] = useState(CARDS);
  const onSwipe = useCallback(() => {
    setcards((state) => [state[state.length - 1], ...state.slice(0, 3)]);
  }, []);

  return {
    cards,
    onSwipe,
  };
};
