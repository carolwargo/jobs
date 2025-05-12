import { useState } from 'react';
import { AuthContext } from './AuthContext';
import users from '../data/users';


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser({
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        appliedJobs: foundUser.appliedJobs,
        profilePic: foundUser.profilePic, // Added profilePic
      });
      return true;
    }
    throw new Error('Invalid credentials');
  };

  const register = (name, email, password) => {
    const exists = users.find((u) => u.email === email);
    if (exists) {
      throw new Error('Email already registered');
    }
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      appliedJobs: [],
      profilePic: "https://i.pravatar.cc/150?img=1", // Default profile pic for new users
    };
    users.push(newUser); // Simulate adding to "database"
    setUser({
      id: newUser.id,
      name,
      email,
      appliedJobs: [],
      profilePic: newUser.profilePic, // Added profilePic
    });
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};