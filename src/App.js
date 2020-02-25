import React, { useState, useEffect } from "react";
import Routes from "./routes";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribeFromAuth;
  }, []);

  // console.log(currentUser);
  return <Routes currentUser={currentUser} />;
}

export default App;
