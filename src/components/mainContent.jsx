import React, { useState } from "react";
import { userData } from "../data/users.js"
import UserCard from "./userCard.jsx";
import Search from "./search.jsx";
function Users() {
  const [users, setUsers] = useState(userData);
  const handleSearch = (email) =>{
      const newArr = users.filter((user) => user.email === email)
      newArr.length > 0? setUsers(newArr): setUsers(userData);
  }
  return (
    <>
    <div className="searchWrapper">
       <Search search={handleSearch}/>
    </div>
      {users.map((user) => (
        <div className= "cardWrapper" key={user.id}>
          <UserCard userItem={user} />
        </div>
      ))}
    </>
  );
}

export default Users;
