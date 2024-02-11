// import { ref, get } from "firebase/database";
// import {database} from "./firebase"
// import { Teacher } from "../types";

// export async function getTeachers(): Promise<Teacher[]> {
//   try {
//     const teachersListRef = ref(database);
//     const snapshot = await get(teachersListRef);
//     if (snapshot !== null) {
//       const teachersList = Object.values(snapshot.val()) as Teacher[];
//       return teachersList;
//     } else {
//       return [];
//     }
//   } catch (err) {
//    console.log('The teachers not found!');
//     throw err;
//   }
// }
export {};
