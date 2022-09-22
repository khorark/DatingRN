import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import React, { FC, memo, useCallback, useState } from 'react';

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

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 14,
    color: '#10142D',
    marginBottom: 5,
  },
  input: {
    height: 54,
    borderRadius: 8,
    backgroundColor: '#F2F3F5',
    paddingHorizontal: 14,
  },
});
