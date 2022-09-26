import { SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAppStore } from 'src/stores';
import { FlashList } from '@shopify/flash-list';
import PhotoItem from 'src/screens/PhotoListScreen/components/PhotoItem';
import { observer } from 'mobx-react-lite';

const PhotoListScreen = () => {
  const { photos } = useAppStore();

  useEffect(() => {
    photos.getPhotos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <FlashList
          data={photos.items}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => {
            console.log('item', item);
            return <PhotoItem title={item.title} url={item.url} />;
          }}
          estimatedItemSize={100}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(PhotoListScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 1,
  },
});
