// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { firebaseAuth } from '../../firebase';
import { db } from '../../firebase'; // Correct import from firebase.js
import { getDocs, collection, doc, updateDoc, setDoc } from 'firebase/firestore'; // Import Firestore functions
// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUsers] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const userRef = doc(db, 'users', userId);
//     console.log(useRef)
//     // const unsubscribe = firebaseAuth.onAuthStateChanged(authUser => {
//     //   setUser(authUser);
//     //   // Check if the user exists and if they are an admin
//     //   if (authUser) {
//     //     // You need to implement a way to determine if the user is an admin
//     //     // For example, you can check a field in the user's profile or custom claims
//     //     // Here, isAdmin is set to true for demonstration purposes
//     //     setIsAdmin(true);
//     //   } else {
//     //     setIsAdmin(false);
//     //   }
//     // });

//     // return () => unsubscribe();
//   }, []);
useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <AuthContext.Provider value={{ user, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
