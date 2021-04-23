import React,{useEffect, useState} from 'react';

const User = (props) => {

    const id = props.match.params.id
    console.log(id)
    const users = [
        {
            id: 1, 
            name:"Frande"
        },
        {
            id: 2, 
            name:"Eric"
        },
        {
            id: 3, 
            name:"Andrea"
        }
    ]
    const [userName,setUserName] = useState()
    useEffect(()=>{
        let user = users.filter(user =>{
            return user.id == id
        })
        setUserName(user[0].name)
    },[])
    

    return ( 
        <div>
            Nombre= {userName}
        </div>
    );
}
 
export default User;
