import { getDatabase, ref, set, get, child } from "firebase/database";
import { database } from "../../config/firebase";
import { useLoaderData } from "react-router-dom";

// export async function saveApi() {
//   const apiKey = "d4743b46c8be46a4ae350870a07dd030";
//   const db = getDatabase();
//   const dbRef = ref(db);
//   try {
//     await set(ref(db, `apiKey`), apiKey);
//   } catch (error) {}
// }

export async function getApiKey() {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `apiKey`));
  if (snapshot) {
    // console.log(snapshot.val());
    return snapshot.val();
  } else {
    // console.log("No lists found");
  }
}
