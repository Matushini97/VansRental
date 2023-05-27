import {initializeApp} from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore/lite"
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useAppDispatch} from "./Hooks/reduxHooks";
import {setUser} from "./store/slices/userSlice";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "vanlife-d2b96.firebaseapp.com",
    projectId: "vanlife-d2b96",
    storageBucket: "vanlife-d2b96.appspot.com",
    messagingSenderId: "241559978244",
    appId: "1:241559978244:web:6cc693b8f42aa88f995051"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr
}

export async function getVan(id: string) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
}

// export type CredsType = {
//     email: string
//     password: string
// }

export async function loginUser(email: string, pass: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
            return {
                email: user.email,
                id: user.uid,
                token: user.refreshToken
            }
    })
        .catch()

}

export async function signinUser(email: string, pass: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
            return {
                email: user.email,
                id: user.uid,
                token: user.refreshToken
            }
        })
        .catch()

}

