import { useEffect } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

export const ApiContext = createContext();

export function ApiContextProvider({children}) {
  const API_URL = 'http://localhost:3001'
  

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`${API_URL}/auth/login/success`, { credentials: 'include' } )
      const json = await response.json()
      setUser(json.user)
    }
  }, [])

  
  return (
    <ApiContext.Provider value={{API_URL}}>
      {children}
    </ApiContext.Provider>
  )
}

export function useApi() {
  const context = useContext(ApiContext);
  return context;
}