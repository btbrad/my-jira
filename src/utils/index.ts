import { useEffect, useState } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [callback]);
};

export const isFalsy: (value: unknown) => boolean = (value) =>
  value === 0 ? false : !value;

export const isVoid: (value: unknown) => boolean = (value) =>
  value === undefined || value === null || value === "";

export const cleanObject = (obj: { [key: string]: unknown }) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    if (isVoid(obj[key])) {
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

export const useDebouncedParam = <T>(param: T, delay: number) => {
  const [debouncedParam, setDebouncedParam] = useState(param);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedParam(param);
    }, delay);
    return () => clearTimeout(timer);
  }, [param, delay]);

  return debouncedParam;
};

export const useArray = <T>(array: T[]) => {
  const [value, setValue] = useState(array);
  const clear = () => {
    setValue([]);
  };
  const removeIndex = (index: number) => {
    const copy = [...value];
    copy.splice(index, 1);
    setValue([...copy]);
  };
  const add = (item: T) => {
    setValue([...value, item]);
  };
  return {
    value,
    clear,
    removeIndex,
    add,
  };
};
