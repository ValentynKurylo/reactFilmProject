import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import {axiosIstance} from "../../service/api";
import './movieDetails.css'
import {useSelector, useDispatch} from "react-redux";

export default function MovieDetails() {

    let params = useParams()
    const allMovie = useSelector((state => state.getAllMovie))
    const dispatch = useDispatch()

    useEffect(() => {
        axiosIstance.get('https://api.themoviedb.org/3/movie/' + params.id + '?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US')
            .then(value => dispatch({type: 'INFORM', payload: value}))

    }, null)

    return (
        <div className={'main'}>
            <h3>{allMovie.inform?.title}</h3>
            <div className={'box'}>
                <div><img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + allMovie.inform?.backdrop_path}/>
                </div>
                <div>{allMovie.inform?.overview}</div>
            </div>
            <div>language {allMovie.inform?.original_language}</div>
            <div>raiting {allMovie.inform?.vote_average}, votes {allMovie.inform?.vote_count}</div>
            <div>time {allMovie.inform?.runtime} minutes</div>
        </div>
    )
}