import React, { FC, useState } from 'react';

const Errors = {
  accountExists: {
    message: 'An account with this email already exists',
  },
};

const DEFAULT_STATE = {
  Errors,
  authenticating: true,
  isAuthenticated: true,
  signIn: (_email: string, _password: string) => {},
  signUp: (_email: string, _password: string) => {},
};

export const AuthenticationContext = React.createContext(DEFAULT_STATE);

interface IProps {
  children: React.ReactNode;
}

const Provider: FC<IProps> = ({ children }) => {
  const [authenticating] = useState(DEFAULT_STATE.authenticating);
  const [isAuthenticated, setIsAuthenticated] = useState(
    DEFAULT_STATE.isAuthenticated,
  );

  const signUp = (email: string) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.match('mpofuthandolwethu@gmail.com')) {
          reject(new Error(Errors.accountExists.message));
        }

        resolve({ data: { user: { name: 'Thandolwethu Mpofu' } } });
      }, 3000);
    });

  const signIn = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { user: { name: 'Thandolwethu Mpofu' } } });

        setTimeout(() => {
          setIsAuthenticated(true);
        }, 1000);
      }, 3000);
    });

  return (
    <AuthenticationContext.Provider
      value={{ authenticating, isAuthenticated, signIn, signUp, Errors }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Provider;
