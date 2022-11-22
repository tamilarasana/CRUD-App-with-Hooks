import UserTable from "./tables/UserTable";
import { useState } from 'react';
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from './forms/EditUserForm';

function App() {

  const usersData = [
    {id:1, name:"Tamil", username:'Tamilarasan'},
    {id:2, name:"Mark", username:'Leo'},
    {id:3, name:"Jhon", username:'Dave'},
  ];

  const [users, setUsers] = useState(usersData);

  const addUser= (user) =>{
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) =>user.id!==id));
    setEditing(false);
  }
  
  const [editing, setEditing] = useState(false);
  const initialFormState  = {id:null,name:'',username:''};
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username});
  }
const updateUser = (id,updateUser) => {
  setEditing(false);
  setUsers(users.map((user)=>(user.id===id? updateUser:user)));
}
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
            <h2>Edit User</h2>
            <EditUserForm 
            updateUser={updateUser}
            currentUser={currentUser}
            setEditing ={setEditing}
            />

          </div>):(
          <div>
          <h2>Add User</h2>
          <AddUserForm  addUser ={addUser} />
          </div>
          )
        }
          
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser}  editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
