import { createAsyncThunk } from "@reduxjs/toolkit";
import { Teacher } from "../../types";
import { db } from "../../services/firebase";
import { ref, get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (): Promise<Teacher[]> => {
    try {
      const collectionRef = collection(db, "teachers");
      const querySnapshot = await getDocs(collectionRef);
      if (querySnapshot !== null) {
        const teachersList = querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
        return teachersList as unknown as Teacher[];
      } else {
        return [];
      }
    } catch (err) {
      console.log("The teachers not found!");
      throw err;
    }
  }
);
