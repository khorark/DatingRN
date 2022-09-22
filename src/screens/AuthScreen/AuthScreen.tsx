import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { storage, STORAGE_KEYS } from '../storage';
import { AppButton, AppInput } from '../../components';
import { observer } from 'mobx-react';
import { useAppStore } from 'src/stores';

const AuthScreen = () => {
  const { auth: authStore } = useAppStore();
  const [login, setLogin] = useState(authStore.userId);
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<Record<string, any>>();

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    setUser(user);
  };

  console.log('authStore.userId', authStore.userId);

  const handlePress = async () => {
    console.log('login', login);
    console.log('password', password);
    // const user = await auth().signInAnonymously();
    console.log('user', user);
    if (login) {
      authStore.setUserId(login);
      storage.set(STORAGE_KEYS.LOGIN, login);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <View style={styles.form}>
          <AppInput
            title='Login'
            value={login}
            returnKeyType='next'
            textContentType='username'
            onChangeText={setLogin}
          />
          <AppInput
            title='Password'
            value={password}
            secureTextEntry={true}
            textContentType={'password'}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.spacer} />
        <AppButton title='Log in' onPress={handlePress} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default observer(AuthScreen);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 40,
    lineHeight: 49,
    color: '#10142D',
    textAlign: 'center',
  },
  form: {
    marginTop: 70,
  },
  spacer: {
    flex: 1,
  },
});
