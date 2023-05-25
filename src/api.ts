import {initializeApp} from "firebase/app";
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyAij4J8C0rhrZY4c7K9q7NkwGpshGqp1-k",
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

export type CredsType = {
    email: string
    password: string
}

export async function loginUser(creds: CredsType) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}

