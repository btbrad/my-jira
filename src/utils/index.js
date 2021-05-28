import { useEffect, useState } from "react";

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (obj) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    if (isFalsy(obj[key])) {
      delete result[key];
    }
  });
  return result;
};

export const useDebounce = (fn, delay) => {
  const timer = null;
  return (...args) => {
    timer && clearTimeout(timer);
    setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export const useDebouncedParam = (param, delay) => {
  const [debouncedParam, setDebouncedParam] = useState(param);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedParam(param);
    }, delay);
    return () => clearTimeout(timer);
  }, [param, delay]);

  return debouncedParam;
};
