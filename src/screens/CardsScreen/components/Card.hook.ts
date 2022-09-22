import { Dimensions } from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  withTiming,
  runOnJS,
  Easing,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

const { width: ScreenWidth } = Dimensions.get('window');

type Props = {
  idx: number;
  onSwipe: () => void;
};

export const useCard = ({ idx, onSwipe }: Props) => {
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
          runOnJS(onSwipe)();
          offset.value = withSpring(0);
        }
      });
    });

  return {
    animatedStyles,
    gesture,
  };
};
