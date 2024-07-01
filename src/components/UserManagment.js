// // // import React, { useState, useEffect } from 'react';
// // // import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// // // import { firebaseAuth } from "../firebase";
// // // import { useNavigate } from 'react-router-dom';
// // // import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
// // // import { db } from '../firebase';
// // // function UserManagement({ firestore }) {
// // //   const [users, setUsers] = useState([]);
// // //   const [selectedUser, setSelectedUser] = useState(null);
// // //   const [adminUser, setAdminUser] = useState(null);

// // //   // Загрузка пользователей из Firestore
// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         const usersCollection = collection(firestore, 'users');
// // //         const usersSnapshot = await getDocs(usersCollection);
// // //         const userList = usersSnapshot.docs.map((doc) => ({
// // //           id: doc.id,
// // //           ...doc.data(),
// // //         }));
// // //         setUsers(userList);
// // //       } catch (error) {
// // //         console.error('Error fetching users: ', error);
// // //       }
// // //     };
// // //     fetchUsers();
// // //   }, [firestore]);

// // //   // Функция для обновления прав пользователя в Firestore
// // //   const updateUserPermissions = (userId, isAdmin) => {
// // //     const userRef = doc(firestore, 'users', userId);
// // //     updateDoc(userRef, { isAdmin });
// // //   };
// // // console.log(users)
// // //   return (
// // //     <div>
// // //       kjbnldm;cl
// // //        <div>
// // //       <h2>Управление пользователями</h2>
// // //       <div>
// // //         <h3>Список пользователей</h3>
// // //         <ul>
// // //           {users.map((user) => (
// // //             <li key={user.id}>
// // //               {user.name}
// // //               <button onClick={() => setSelectedUser(user)}>Выбрать</button>
// // //               {user.isAdmin ? (
// // //                 <span>(Администратор)</span>
// // //               ) : (
// // //                 <button onClick={() => setAdminUser(user)}>Сделать админом</button>
// // //               )}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </div>
// // //       <div>
// // //         <h3>Выбранный пользователь</h3>
// // //         {selectedUser && (
// // //           <div>
// // //             <p>{selectedUser.name}</p>
// // //             <button onClick={() => updateUserPermissions(selectedUser.id, true)}>Дать доступ</button>
// // //             <button onClick={() => updateUserPermissions(selectedUser.id, false)}>Забрать доступ</button>
// // //           </div>
// // //         )}
// // //       </div>
// // //       <div>
// // //         <h3>Назначить администратора</h3>
// // //         {adminUser && (
// // //           <div>
// // //             <p>{adminUser.name}</p>
// // //             <button onClick={() => updateUserPermissions(adminUser.id, true)}>Сделать админом</button>
// // //             <button onClick={() => setAdminUser(null)}>Отмена</button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //     </div>
// // //   );
// // // }

// // // export default UserManagement;
// // import React, { useState, useEffect } from 'react';
// // import { db } from '../firebase';
// // // import { collection, addDoc } from 'firebase/firestore';
// // import { getDocs, collection } from 'firebase/firestore';
// // const UserManagment = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     // Запрос к базе данных Firebase для получения списка пользователей
// //     const getUsers = async () => {
// //       // console.log(db.collection('users'))
// //        const usersSnapshot = await db.collection('users').get();
// //        console.log(usersSnapshot)
// // const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //       setUsers(usersData);
// //     };

// //     getUsers();
// //   }, []);

// //   const handleUpdateUser = async (userId, field, value) => {
// //     // Обновление значения поля пользователя в базе данных Firebase
// //     await db.collection('users').doc(userId).update({ [field]: value });
// //     // Обновление локального состояния пользователей
// //     setUsers(prevUsers => prevUsers.map(user => user.id === userId ? { ...user, [field]: value } : user));
// //   };

// //   return (
// //     <div className="user-table-container">
// //       <h2>User Table</h2>
// //       <table className="user-table">
// //         <thead>
// //           <tr>
// //             <th>Email</th>
// //             <th>Display Name</th>
// //             <th>Creation Time</th>
// //             <th>Last Login</th>
// //             <th>isAdmin</th>
// //             <th>isBlocked</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map(user => (
// //             <tr key={user.id}>
// //               <td>{user.email}</td>
// //               <td>{user.displayName}</td>
// //               <td>{user.creationTime}</td>
// //               <td>{user.lastLoginAt}</td>
// //               <td>
// //                 <button onClick={() => handleUpdateUser(user.id, 'isAdmin', !user.isAdmin)}>
// //                   {user.isAdmin ? 'True' : 'False'}
// //                 </button>
// //               </td>
// //               <td>
// //                 <button onClick={() => handleUpdateUser(user.id, 'isBlocked', !user.isBlocked)}>
// //                   {user.isBlocked ? 'True' : 'False'}
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default UserManagment;
// import React, { useState, useEffect } from 'react';
// import { db } from '../firebase'; // Правильный импорт из файла firebase.js
// import { getDocs, collection } from 'firebase/firestore';
// import './Table.css'
// import { doc, updateDoc, setDoc } from 'firebase/firestore';
// const UserManagment = () => {
//   const [users, setUsers] = useState([]);
// console.log(db.collection("users"), "db.collection")
//   useEffect(() => {
//     // Запрос к базе данных Firebase для получения списка пользователей
//     const getUsers = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'users'));
//         const userList = querySnapshot.docs.map((doc) => {
//           const userData = doc.data();
//           console.log(userData)
//           userData.id = doc.id;
//           return userData;
//         });
//         setUsers(userList); // Обновляем состояние пользователей
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     getUsers(); // Вызываем функцию для получения пользователей
//   }, []); // Пустой массив зависимостей означает, что useEffect будет вызван только при монтировании компонента

 
//   // const handleUpdateUser = async (userId, field, value) => {
//   //   const proverka = db.collection('users').doc(userId).update({ [field]: value });
//   //   console.log(proverka, 'proverka')
//   //   // Обновление значения поля пользователя в базе данных Firebase
//   //   await db.collection('users').doc(userId).update({ [field]: value });
//   //   // Обновление локального состояния пользователей
    
//   //   setUsers(prevUsers =>
//   //     prevUsers.map(user =>
//   //       user.id === userId ? { ...user, [field]: value } : user
//   //     )
//   //   );
//   // };

//   // const handleUpdateUser = async (userId, field, value) => {
//   //   try {
//   //     // Получаем ссылку на документ пользователя по его ID
//   //     const userRef = db.collection('users').doc(userId);
      
//   //     // Обновляем поле пользователя в документе
//   //     await userRef.update({ [field]: value });
  
//   //     // Обновляем локальное состояние пользователей
//   //     setUsers(prevUsers =>
//   //       prevUsers.map(user =>
//   //         user.id === userId ? { ...user, [field]: value } : user
//   //       )
//   //     );
//   //   } catch (error) {
//   //     console.error("Error updating user:", error);
//   //   }
//   // };
//   const handleUpdateUser = async () => {
//     setLoading(true);
//     try {
//       for (const docId of users) {
//         const userRef = doc(db, 'users', docId); // Используйте userId вместо docId
//         if (isBlocked) {
//           await updateDoc(userRef, { isBlocked: false });
//         } else {
//           await setDoc(userRef, { isBlocked: true }, { merge: true });
//         }
//         console.log(`Пользователь ${docId} был  'заблокирован'.`);
//       }
//       onUpdate();
//     } catch (error) {
//       console.error(`Ошибка при обновлении состояния блокировки пользователя:`, error);
//     }
//     setLoading(false);
//   };
// console.log(users)
//   return (
//     <div className="user-table-container">
//       <h2>Таблица зарегистрированных пользователей</h2>
//       <table className="user-table">
//         <thead>
//           <tr>
//             <th className='email'>Email</th>
//             <th className='name'>Имя</th>
//             <th className='time'>Creation Time</th>
//             <th className='time'>Last Login</th>
//             <th className='tableButton'>Дать доступ</th>
//             <th className='tableButton'>Сделать админом</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id}>
//               <td>{user.email}</td>
//               <td>{user.displayName}</td>
//               <td>{user.creationTime}</td>
//               <td>{user.lastLoginAt}</td>
//               <td>
//                 <button onClick={() => handleUpdateUser(user.id, 'isBlocked', !user.isBlocked)}>
//                   {user.isBlocked ? 'True' : 'False'}
//                 </button>
//               </td>
//               <td>
//                 <button onClick={() => handleUpdateUser(user.id, 'isAdmin', !user.isAdmin)}>
//                   {user.isAdmin ? 'True' : 'False'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserManagment;
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Correct import from firebase.js
import { getDocs, collection, doc, updateDoc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import './Table.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(userList);
        console.log("userList.isAdmin", userList)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdateUser = async (userId, field, value) => {
    try {
      const userRef = doc(db, 'users', userId);
      if (field === 'isAdmin') {
        await updateDoc(userRef, { [field]: value });
      } else if (field === 'isBlocked') {
        await setDoc(userRef, { [field]: value }, { merge: true });
      }
      setUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === userId ? { ...user, [field]: value } : user
        )
      );
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="user-table-container">
      <h2>Таблица зарегистрированных пользователей</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Имя</th>
            <th>Creation Time</th>
            <th>Last Login</th>
            <th>Дать доступ</th>
            <th>Сделать админо</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.displayName}</td>
              <td>{user.creationTime}</td>
              <td>{user.lastLoginAt}</td>
              <td>
                <button onClick={() => handleUpdateUser(user.id, 'isBlocked', !user.isBlocked)}>
                  {user.isBlocked ? 'True' : 'False'}
                </button>
              </td>
              <td>
                <button onClick={() => handleUpdateUser(user.id, 'isAdmin', !user.isAdmin)}>
                  {user.isAdmin ? 'True' : 'False'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
