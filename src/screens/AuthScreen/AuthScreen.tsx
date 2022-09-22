import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { AppButton, AppInput } from '../../components';
import { observer } from 'mobx-react';
import { useAppStore } from 'src/stores';

const AuthScreen = () => {
  const { auth } = useAppStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = useCallback(() => {
    auth.login({ login, password });
  }, [login, password]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (auth.isError) {
      timer = setTimeout(() => {
        auth.resetError();
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [auth.isError]);

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
        <AppButton title='Log in' isError={auth.isError} onPress={handlePress} />
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
