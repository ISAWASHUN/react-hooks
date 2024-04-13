import { ReactNode, createContext, useContext, useState } from "react";

type User = {
  id: string,
  username: string,
  email: string,
}

interface AuthContextType {
  user: User | null,
  login: (userInfo: User) => void,
  logout: () => void,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);

  const login  = (userInfo: User) => {
    if(userInfo.username === "testUser" && userInfo.email === "test@gmail.com") {
      setUser(userInfo);
    } else {
      alert("ユーザー名かパスワードが違います");
    }
  }

  const logout = () => {
    setUser(null);
  }

  const contextValue = {
    user,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
