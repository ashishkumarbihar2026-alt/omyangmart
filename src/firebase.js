import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyEHLHrCNJiBxHXmqCOKbinJqrTIBC7Gw",
  authDomain: "investapp-954d7.firebaseapp.com",
  projectId: "investapp-954d7",
  storageBucket: "investapp-954d7.firebasestorage.app",
  messagingSenderId: "530020859805",
  appId: "1:530020859805:web:5d1a0c6cd5220694d83974"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
