import { useEffect } from "react";

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
