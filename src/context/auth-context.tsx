import React, { useState, useEffect } from "react";
import { User } from "screens/project-list/user-panel";
import * as auth from "../auth-provider";
import { http } from "@/utils/http";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext =
  React.createContext<
    | {
        user: User | null;
        login: (form: AuthForm) => Promise<void>;
        register: (form: AuthForm) => Promise<void>;
        logout: () => Promise<void>;
      }
    | undefined
  >(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AuthForm) => {
    return auth.login(form).then(setUser);
  };

  const register = (form: AuthForm) => {
    return auth.register(form).then(setUser);
  };

  const logout = () => {
    return auth.logout().then(() => setUser(null));
  };

  useEffect(() => {
    bootstrapUser().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
