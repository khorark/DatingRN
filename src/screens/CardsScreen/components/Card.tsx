import { Image, ImageSourcePropType } from 'react-native';
import React, { FC, memo } from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useCard } from 'src/screens/CardsScreen/components/Card.hook';
import styles from './Card.styles';

type Props = {
  idx: number;
  image: ImageSourcePropType;
  onSwipe: () => void;
};

const Card: FC<Props> = ({ idx, image, onSwipe }) => {
  const h = useCard({ idx, onSwipe });

  return (
    <GestureDetector gesture={h.gesture}>
      <Animated.View style={[styles.container, h.animatedStyles]}>
        <Image style={styles.image} source={image} resizeMode={'cover'} />
      </Animated.View>
    </GestureDetector>
  );
};

export default memo(Card);
