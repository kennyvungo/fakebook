import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as userActions from "../../store/users"
import "./searchbar.css"
const Searchbar = () => {
    const [query,setQuery] = useState("");
    const [filteredUsers,setfilteredUsers] = useState([])
    const users = useSelector(userActions.getUsers)
    let newFilter = [];
    const handleFilter = (e) => {
        let searchName = e.target.value
        setQuery(searchName);
            let tempArr = [];
            users.forEach((user) => {
                if(user.firstName.toLowerCase().includes(searchName.toLowerCase())) tempArr.push(user)
        })
        newFilter = tempArr;
        if(searchName == ""){
            setfilteredUsers([])
        }
        else{
            setfilteredUsers(newFilter)
        }
    }
    // console.log("users",users)
    // console.log(query)
    // console.log("filteredusers",newFilter)
    // console.log(newFilter)
    console.log(filteredUsers)
  return (
    <div>
        <label>
            <input
                className='searchbar'
                type="text"
                placeholder="Search Facebook"
                onChange={handleFilter}
                value = {query}
            />
        </label>
        {filteredUsers.length != 0 && (
            <ul className='search-dropdown'>

            {filteredUsers.map((user) => <ul> {user.firstName} </ul>)} 
            </ul>
        )}
    </div>
  )
}

export default Searchbar