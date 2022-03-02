import AsyncStorage from '@react-native-async-storage/async-storage'

// Storage keys thats can be used 
export enum StorageKeys {
  TOKEN = 'token',
  HAS_LOACTION_PERMISIONS = 'hasloactionpermions',
}

// Set a item to the local storage of a device 
export const setItem = async (key: StorageKeys, value: string) => {
  return AsyncStorage.setItem(key, JSON.stringify(value))
}

// Get a item back from local storage of a device
export const getItem = async (key: StorageKeys) => {
  const response = await AsyncStorage.getItem(key)
  if (response !== null) {
    return JSON.parse(response)
  } else {
    return null
  }
}
