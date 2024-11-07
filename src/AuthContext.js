import React, { createContext, useContext, useReducer } from 'react';

// Create context
const AuthContext = createContext();

// Initial state
const initialState = {
  user: null,
  token: null,
};

// Reducer function to manage state
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload.user, token: action.payload.token };
    case 'LOGOUT':
      return { ...state, user: null, token: null };
    default:
      return state;
  }
};

// AuthProvider component that wraps the app
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
