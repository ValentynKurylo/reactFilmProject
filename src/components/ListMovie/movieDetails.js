import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {axiosIstance} from "../../service/api";
import './movieDetails.css'
import {useSelector, useDispatch} from "react-redux";
import UserServer from "../../service/UserServer";
import '../Comments/Comments.css'
import WatchListService from "../../service/WatchListService";

export default function MovieDetails() {

    let params = useParams()
    const allMovie = useSelector((state => state.getAllMovie))
    const user = useSelector((state => state.TokenUserReducer))
    const watchList = useSelector((state => state.WatchListReducer))
    const dispatch = useDispatch()
    let [ShowCom, setShowCom] = useState(0)
    let [movieToList, setMovieToList] = useState({})

    useEffect(() => {
        axiosIstance.get('https://api.themoviedb.org/3/movie/' + params.id + '?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US')
            .then(value => dispatch({type: 'INFORM', payload: value.data}))

    },[])
    function ShowComments(e){
        e.preventDefault()
        setShowCom(1)
        UserServer.getComments(user.token, allMovie.inform.id).then(value => {
            dispatch({type: "SET_COMMENTS", payload: [...value]})
        })
    }

    function AddMovieToList(e){
        e.preventDefault()
        dispatch({type: "ADD", payload: 0})
        setMovieToList(movieToList.movieId = allMovie.inform.id)
        setMovieToList(movieToList.watchListId = watchList.CurrentListID)
        setMovieToList(movieToList.nameMovie = allMovie.inform.title)
        console.log(movieToList);
        WatchListService.PostWatchListAddMovie(movieToList, user.token)

    }
    return (
        <div className={'main'}>
            <h3>{allMovie.inform?.title} { watchList.add ? <button id={"ADD2"} onClick={AddMovieToList}>Add To Movie List</button> : <div></div> }</h3>

            <div className={'box'}>
                <div><img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + allMovie.inform?.backdrop_path}/>
                </div>
                <div>{allMovie.inform?.overview}</div>
            </div>
            <p>language - {allMovie.inform?.original_language}</p>
            <p>raiting - {allMovie.inform?.vote_average} points, votes - {allMovie.inform?.vote_count}</p>
            <p>time {allMovie.inform?.runtime} minutes</p>
            <p>Release Date:  {allMovie.inform?.release_date}</p>
            <button className={"but"}><Link to={'/WriteComments/'}>Write Comments</Link></button>
            <button className={"but"} onClick={ShowComments} onDoubleClick={()=>{
                setShowCom(0)
            }}>comments</button>
            {
                ShowCom ? <div id={"comennt"}> <h4>Comments:</h4>{
                    user.comments.map(value=> <div key={value.id}> <p id={"Wrap-text"}>{value.userName} -  {value.raiting} points <p id={'p'}> {value.text}</p></p></div>)
                }</div> : <div></div>
            }

        </div>
    )
}