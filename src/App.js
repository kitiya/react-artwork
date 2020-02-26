import React, { useState, useEffect } from "react";
import Routes from "./routes";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // setCurrentUser(user);
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

        console.log(currentUser);
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth;
  }, []);

  // console.log(currentUser);
  return <Routes currentUser={currentUser} />;
}

export default App;
