import { useEffect, useState } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const isFalsy: (value: any) => boolean = (value) =>
  value === 0 ? false : !value;

export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    if (isFalsy(obj[key])) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useDebounce = (fn: Function, delay: number) => {
  const timer: number | null = null;
  return (...args: any) => {
    timer && clearTimeout(timer);
    setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const useDebouncedParam = (param: any, delay: number) => {
  const [debouncedParam, setDebouncedParam] = useState(param);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedParam(param);
    }, delay);
    return () => clearTimeout(timer);
  }, [param, delay]);

  return debouncedParam;
};
