import { StyleSheet, Text } from 'react-native';
import React, { FC } from 'react';
import FastImage from 'react-native-fast-image';
import Animated from 'react-native-reanimated';

type Props = {
  title: string;
  url: string;
};

const PhotoItem: FC<Props> = ({ title, url }) => {
  return (
    <Animated.View style={styles.container}>
      <FastImage style={{ width: 50, height: 50 }} source={{ uri: url }} resizeMode={FastImage.resizeMode.contain} />
      <Text numberOfLines={1} ellipsizeMode={'tail'}>
        {title}
      </Text>
    </Animated.View>
  );
};

export default PhotoItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
  },
});
