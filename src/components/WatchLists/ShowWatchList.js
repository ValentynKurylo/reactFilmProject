import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import WatchListService from "../../service/WatchListService";
import {Link, useParams} from "react-router-dom";


export default function ShowWatchList() {
    const dispatch = useDispatch()
    let params = useParams()
    const user = useSelector((state => state.TokenUserReducer))
    const list = useSelector((state => state.WatchListReducer))
    console.log(list.UserWatchLists);
    useEffect(()=>{
        WatchListService.getMovieListsMovie(user.token, params.id).then(value => {
            dispatch({type: "SET_CURRENT_LISTS", payload: value})
        })
    }, [])
    function AddCurrentId(e){
        e.preventDefault()
        dispatch({type: "ADD", payload: 1})
        dispatch({type: "SET_CURRENT_LISTS_ID", payload: params.id})
    }

    console.log(list.CurrentList);
    return (
        <div>
            {
                list.CurrentList ? list.CurrentList.map(value => <Link key={value.id} to={'/movie/' + value.movieId}><h4 key={value.id}>{value.nameMovie}</h4></Link>) : <div>You don't any movies in this list</div>
            }
            <button onClick={AddCurrentId}><Link to={'/'}>Add movie</Link></button>
        </div>
    )
}