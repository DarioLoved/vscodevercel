import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD1D9tyAY4JjPEUkZXS3EPv9lXJRTtp3vc",
  authDomain: "vscode-3fc47.firebaseapp.com",
  databaseURL: "https://vscode-3fc47-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "vscode-3fc47",
  storageBucket: "vscode-3fc47.appspot.com",
  messagingSenderId: "815889053443",
  appId: "1:815889053443:web:fa99bdd30b8ebfa6565b36"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
