import { Text, TextInput, TextInputProps, View } from 'react-native';
import React, { FC, memo } from 'react';
import styles from './AppInput.styles';

type Props = {
  title: string;
} & TextInputProps;

export const AppInput: FC<Props> = memo(({ title, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} placeholder={title} placeholderTextColor={'#9494A5'} {...props} />
    </View>
  );
});
