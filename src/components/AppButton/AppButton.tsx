import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import React, { memo } from 'react';

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

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: 8,
    marginBottom: 24,
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
