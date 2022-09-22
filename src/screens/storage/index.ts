import { MMKV } from 'react-native-mmkv';

export const STORAGE_KEYS = {
  LOGIN: 'user.login',
};

export const storage = new MMKV({
  id: `app-storage`,
  encryptionKey: 'hunter2',
});
