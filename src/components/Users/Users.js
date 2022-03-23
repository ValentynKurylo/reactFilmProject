import {useState, useEffect} from 'react'
import {useSelector} from "react-redux";

export default function Users() {

    let [users, setUsers] = useState([])
     const Token = useSelector((state => state.TokenUserReducer))
    useEffect(()=>{
        fetch('authUser/').then(value => value.json()).then(value => {
            setUsers([...value])
        })
    }, [])
    console.log(Token.token);
    return (
        <div>
            {
                users.map(value => <div key={value.id}>{value.username}</div> )
            }
        </div>
    )
}