import { useSegments, useRouter } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';

type User = {
  name: string;
};

type AuthType = {
  user: User | null;
  setUser: (user: User | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthType>({
  user: null,
  setUser: () => {},
  token: null,
  setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(token: string | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !token &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace('/loginScreen');
    } else if (token && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace('/dashboard');
    }
  }, [token, segments]);
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useProtectedRoute(token);

  const authContext: AuthType = {
    user,
    setUser,
    token,
    setToken,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
}
