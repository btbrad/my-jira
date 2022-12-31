const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (User: { token: any }) => {
  window.localStorage.setItem(localStorageKey, User.token);
  return User;
};

export const login = () => {};

export const logout = () => window.localStorage.removeItem(localStorageKey);
