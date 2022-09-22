import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';

type Props = {
  title: string;
} & PressableProps;

export const AppButton = memo(({ title, ...props }: Props) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    height: 54,
    backgroundColor: '#10142D',
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
