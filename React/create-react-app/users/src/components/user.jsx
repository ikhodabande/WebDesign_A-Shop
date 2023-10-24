import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



const User = () => {
    
const [user, setUser] = useState({});
const {id} = useParams();


useEffect(() => {
    const fetchData = async () => {
        
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setUser(response.data.data);
         
    };

    fetchData();
}, [id]); 

    return ( 
        <>
    <img src={user.avatar} style={{borderRadius:'50%', width:'100%'}} alt="" />
    <h4>{user.first_name}{user.last_name}</h4>
    <h5>{user.email}</h5>
    </>
     );

}
 
export default User;