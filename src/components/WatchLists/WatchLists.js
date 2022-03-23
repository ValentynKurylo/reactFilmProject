import {useDispatch, useSelector} from "react-redux";
import APIMovieListService from "../../service/WatchListService";
import APIService from "../../service/UserServer";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import WatchListService from "../../service/WatchListService";
import WatchList from "./WatchList";
import Movie from "../ListMovie/Movie";


export default function WatchLists() {
    const dispatch = useDispatch()
    const user = useSelector((state => state.TokenUserReducer))
    const list = useSelector((state => state.WatchListReducer))
    let [craeteList, setCreateList] = useState(0)
    let [ListUser, setList] = useState({})
    useEffect(()=>{
        if(user.token) {
            APIMovieListService.getMovieLists(user.token, user.userID).then(value => {
                dispatch({type: 'SET_USER_WATCH_LISTS', payload: value})
            })
        }

    }, [])
    console.log(list.UserWatchLists);

    function CreateList(e){
        e.preventDefault()
        setCreateList(0);
        setList(ListUser.userId = user.userID)
        setList(ListUser.name = e.target.name.value)
        console.log(ListUser);
        WatchListService.PostWatchList(ListUser, user.token)
    }
    return (
        <div>
            {user.token ?
            <div>
            <div>
                {
                    list.UserWatchLists ? list.UserWatchLists.map(value => <WatchList item={value} key={value.id}/>) : <div>You don't have any movie list</div>
                }
            </div>
             <button onClick={()=>{
                 setCreateList(1)
             }}>Create new watch list</button>
            {craeteList === 1 ? <div>
                <form onSubmit={CreateList} method={"POST"}>
                    <input name={"name"} placeholder={"enter name"}/>
                    <button type={"submit"}>Create List</button>
                </form>
            </div> : <div></div>}

            </div> : <div>You need login</div>}
        </div>
    )
}