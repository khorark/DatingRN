import { KeyboardAvoidingView, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { AppButton, AppInput } from '../../components';
import { observer } from 'mobx-react';
import { useAuthScreen } from 'src/screens/AuthScreen/AuthScreen.hook';
import styles from './AuthScreen.styles';

const AuthScreen = () => {
  const h = useAuthScreen();

  return (
    <SafeAreaView style={styles.main}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <View style={styles.form}>
          <AppInput
            title='Login'
            value={h.login}
            returnKeyType='next'
            textContentType='username'
            onChangeText={h.setLogin}
          />
          <AppInput
            title='Password'
            value={h.password}
            secureTextEntry={true}
            textContentType={'password'}
            onChangeText={h.setPassword}
          />
        </View>
        <View style={styles.spacer} />
        <AppButton title='Log in' isError={h.isError} onPress={h.handlePress} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default observer(AuthScreen);
