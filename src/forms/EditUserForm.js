import React, { useEffect, useState } from 'react';

const EditUserForm = (props) => {
    const [user,setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser)
    },[props])

    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setUser({...user,[name]:value})
    }
    return ( 
        <div>
            <form onSubmit={
                event => {
                    event.preventDefault();
                    if(!user.name || !user.username) return;
                    props.updateUser(user.id,user);
                }
            }>
               <label>Name</label> 
        <input type="text" name ="name" value={user.name} onChange={handleInputChange} />
        <label>UserName</label>
        <input type="text" name ="username" value={user.username} onChange={handleInputChange} />
        <button className='btn btn-sm btn-success' >Update User</button>
        <button className='btn btn-sm btn-danger' onClick={()=>{props.setEditing(false)}} >Cancel </button>
       </form>
        </div>
     );
}
 
export default EditUserForm;