import {
  query,
  orderBy,
  limit,
  getDocs,
  collection,
  startAfter,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

import { db } from "./services/firebase";
import { string } from "yup";

//Получение одного документа
export async function getDocument(documentId: string) {
  const documentRef = doc(db, "collection_name", documentId);
  const documentSnapshot = await getDoc(documentRef);
  if (documentSnapshot.exists()) {
    console.log("Document data:", documentSnapshot.data());
  } else {
    console.log("No such document");
  }
}

//Получение коллекции документов
export async function getAllDocuments() {
  const collectionRef = collection(db, "teachers");
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((doc) => {
    return console.log(doc.id, "=>", doc.data());
  });
}
//Фильтрация документов
export async function getFilteredDocuments() {
  const collectionRef = collection(db, "collection_name");
  const q = query(collectionRef, where("field_name", "==", "value"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}
// Сортировка и нумерация документов
export async function getSortedAndPaginatedDocuments(lastVisible: unknown) {
  const collectionRef = collection(db, "collection_name");
  const q = query(
    collectionRef,
    orderBy("field_name", "asc"),
    startAfter(lastVisible),
    limit(10)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}
