import { Pressable, PressableProps, Text } from 'react-native';
import React, { memo } from 'react';
import styles from './AppButton.styles';

type Props = {
  title: string;
  isError?: boolean;
} & PressableProps;

export const AppButton = memo(({ title, isError, ...props }: Props) => {
  return (
    <Pressable style={[styles.button, { backgroundColor: isError ? 'red' : '#10142D' }]} {...props}>
      <Text style={styles.buttonTitle}>{isError ? 'Auth error =(' : title}</Text>
    </Pressable>
  );
});
