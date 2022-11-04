import { createContext, useContext, useState } from "react";

interface AuthUser  {
    username: string
}
interface AuthProviderInterface {
    children: React.ReactNode 
}

interface UserContextInterface {
    user: AuthUser | null;
    login: (user: AuthUser) => void ;
    logout: () => void;
}



export const AuthContext = createContext<UserContextInterface>({} as UserContextInterface);

export const AuthProvider = ({ children } : AuthProviderInterface) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const login = (user: AuthUser): void => {
        setUser(user)
        console.log('user logged in')
    }
    const logout = (): void => {
        setUser(null)
        console.log('user logged out')
    }
    return(
        <AuthContext.Provider value={{user,login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)