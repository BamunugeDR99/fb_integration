import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import { signInWithPopup, FacebookAuthProvider, getAuth } from "firebase/auth";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCYq29GH84L_AuSBjpqBvKUynzZRO0vcWo",
    authDomain: "fbtest-e2a84.firebaseapp.com",
    projectId: "fbtest-e2a84",
    storageBucket: "fbtest-e2a84.appspot.com",
    messagingSenderId: "115995136809",
    appId: "1:115995136809:web:bd7e545e3955c49a0add38",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const authentication = getAuth(app);

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    provider.addScope("pages_show_list");
    provider.addScope("pages_manage_metadata");
    provider.addScope("pages_messaging");
    provider.addScope("pages_read_engagement");
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
    </div>
  );
}

export default App;
