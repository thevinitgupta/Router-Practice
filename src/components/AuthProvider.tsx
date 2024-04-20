import { createContext, PropsWithChildren, useContext, useState } from 'react';
export enum UserType {
  USER,
  ADMIN
}
interface User {
    id : number,
    name : string,
    role : UserType
}

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
  role : UserType
};

export default function AuthProvider({
  children,
  isSignedIn,
  role
}: AuthProviderProps) {
  // Uses `isSignedIn` prop to determine whether or not to render a user
  const [user] = useState<User | null>(isSignedIn ? { id: 1, name : "Vinit", role : role } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};