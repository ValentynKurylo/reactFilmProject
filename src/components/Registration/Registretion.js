import {useEffect, useState} from 'react'
import APIService from "../../service/UserServer";
import '../Enter/Enter.css'

export default function Registration() {
    let [user, setUser] = useState({})
    function register(e){
        e.preventDefault()
        setUser(user.username = e.target.username.value)
        setUser(user.email = e.target.email.value)
        setUser(user.password = e.target.password.value)
        console.log(user);
        APIService.PostUser(user)
    }
    return (
        <div>
            <center>
                <div className={"enter"}>
                    <form method={'POST'} onSubmit={register}>
                        <input name={"username"} type={"text"} placeholder={"Enter your username"}/><br/>
                        <input name={"email"} type={"email"} placeholder={"Enter your email"}/><br/>
                        <input name={"password"} type={"text"} placeholder={"Create your password"}/><br/>
                        <button type={"submit"}>Register</button>
                    </form>
                </div>
                 </center>
        </div>
    )
}