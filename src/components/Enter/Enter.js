import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import APIService from "../../service/UserServer";
import React from "react";
import './Enter.css'




export default function Enter({props}) {

    let [data, setData] = useState({})
    const user = useSelector((state => state.TokenUserReducer))
    const dispatch = useDispatch()
    function login(e) {
        e.preventDefault()
        setData(data.username = e.target.username.value)
        setData(data.password = e.target.password.value)

        APIService.EnterUser(data).then(res => {
            dispatch({type: 'SET_TOKEN', payload: res.access})
            dispatch({type: 'SET_USERNAME', payload: e.target.username.value})
            if(res.access){
            APIService.GetCurrentUser(e.target.username.value, res.access).then(value => {
                console.log(value);
                dispatch({type: 'SET_USERID', payload: value.id})
            })
        }
        })


    }

    return (
        <div>
            <center>
                <div className={"enter"}>
                    <form method={"POST"} onSubmit={login}>
                        <input name={"username"} type={"text"} placeholder={"Enter your username"}/><br/>
                        <input name={"password"} type={"text"} placeholder={"Create your password"}/><br/>
                        <button type={'submit'}>Enter</button>
                    </form>
                </div>
                </center>
        </div>
    )
}
