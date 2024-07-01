// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { firebaseAuth } from '../../firebase';
import { db } from '../../firebase'; // Correct import from firebase.js
import { getDocs, collection, doc, updateDoc, setDoc } from 'firebase/firestore'; // Import Firestore functions
// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false)
const [userList, setUserList] = useState([])

    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userLists = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUserList(userLists);
        // console.log("userList.isAdmin", userList.map(isA => ({
        //   isAdmin: isA.isAdmin
        // })))
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  //   fetchUsers();
  // // }, []);
  //   // return () => unsubscribe();
  // };

    useEffect(() => {
    const userRef = doc(db, 'users', "userId");
    console.log(userRef)
    const unsubscribe = firebaseAuth.onAuthStateChanged(authUser => {
      setUser(authUser);
      console.log(authUser)
      // Check if the user exists and if they are an admin
      if (authUser) {
        fetchUsers()
    }})
    return () => unsubscribe();
      }, []);

      useEffect(()=>{
const nazvanie = userList.find( element => 
  element.userId == user.uid
)
setIsAdmin(nazvanie?.isAdmin)
setIsBlocked(nazvanie?.isBlocked)
      },[ user, userList])
// useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'users'));
//         const userList = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setUser(userList);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };
//     fetchUsers();
//   }, []);
console.log("nazv", isAdmin, isBlocked)
  return (
    <AuthContext.Provider value={{ user, isAdmin, isBlocked }}>
      {children}
    </AuthContext.Provider>
  );
};
