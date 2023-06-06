import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Product } from "../Types/products";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {  getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveProductInDB = async( products: Product) => {
try {
  const resp = await addDoc(collection(db, "products"), products);
} catch (e) {
  console.error("Error adding document: ", e);
}
};

const getProductsFromDB = async (): Promise<Product[]> =>{
const resp: Product [] = [];
const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),
  } as Product);
});
  return resp 
};

 
export default {saveProductInDB, getProductsFromDB}