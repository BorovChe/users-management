import { useEffect, useState } from 'react';

const useLocalStorage = <T, U>(key: string, defaultValue: U) => {
  const [state, setState] = useState<T>(() => {
    return JSON.parse(window.localStorage.getItem(key)!) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
