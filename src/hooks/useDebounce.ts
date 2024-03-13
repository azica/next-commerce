"use client"
import { useEffect, useState } from 'react';

type CallbackFunction = (...args: any[]) => void;

export const useDebounce = (callback: CallbackFunction, delay: number): CallbackFunction => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const debounceFunction: CallbackFunction = (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);
    setTimer(newTimer);
  };

  return debounceFunction;
}

