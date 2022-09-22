import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import styles from './ProfileScreen.styles';
import { useProfileScreen } from 'src/screens/ProfileScreen/ProfileScreen.hook';

const ProfileScreen = () => {
  const h = useProfileScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('src/assets/images/my.jpg')} />
      <Text style={styles.name}>Khoroshikh Arkadiy, 32</Text>

      <View style={styles.fieldsContainer}>
        <Pressable style={styles.field} onPress={h.onPressGithubLink}>
          <Image
            style={styles.fieldImage}
            source={{
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-2169%2F24%2Fsocial_media_social_media_logo_github-512.png&f=1&nofb=1',
            }}
          />
          <Text style={styles.fieldTitle}>Github</Text>
        </Pressable>
        <Pressable style={styles.field} onPress={h.onPressLinkedinLink}>
          <Image
            style={styles.fieldImage}
            source={{
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.silversands.co.uk%2Fwp-content%2Fuploads%2FLinkedIn-Icon.png&f=1&nofb=1',
            }}
          />
          <Text style={styles.fieldTitle}>LinkedIn</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
