import '@/styles/globals.css'
import { LoginCtx } from '@/context/contexts';
import { useState } from 'react';
export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // {user: 12334}
  return (
    <LoginCtx.Provider value = {{user, setUser, loggedIn, setLoggedIn}}>
      <Component {...pageProps} />
    </LoginCtx.Provider>

  );
}
