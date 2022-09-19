import { Dimensions, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import React, { FC, memo } from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';

const { width: ScreenWidth } = Dimensions.get('window');

type Props = {
  id: number;
  idx: number;
  image: ImageSourcePropType;
  onSwipe: (id: number) => void;
};

const Card: FC<Props> = ({ id, idx, image, onSwipe }) => {
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    const rotateInterpolate = interpolate(offset.value / ScreenWidth, [0, 1], [0, 15]);

    return {
      transform: [
        { translateX: offset.value },
        { rotate: `${rotateInterpolate}deg` },
        { scale: withSpring(idx === 3 ? 1 : 0.9) },
      ],
    };
  });

  const start = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      offset.value = e.translationX + start.value;
    })
    .onEnd(({ translationX }) => {
      let toValue = 0;
      const isSwipe = Math.abs(translationX) > 150;

      if (isSwipe) {
        toValue = translationX > 0 ? ScreenWidth : -ScreenWidth;
      }

      start.value = 0;
      offset.value = withTiming(toValue, { duration: 300, easing: Easing.linear }, (finished) => {
        if (finished && isSwipe) {
          runOnJS(onSwipe)(id);
          offset.value = withSpring(0);
        }
      });
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, animatedStyles]}>
        <Image style={styles.image} source={image} resizeMode={'cover'} />
      </Animated.View>
    </GestureDetector>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 10,
    position: 'absolute',
    overflow: 'hidden',
  },
  image: {
    width: 450,
    height: 530,
  },
});
