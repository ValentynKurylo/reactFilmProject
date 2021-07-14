import { useEffect} from 'react'
import {axiosIstance} from "../../service/api";
import {useSelector, useDispatch} from "react-redux";


import OneMovie from "./OneMovie";
import Genre from "../Genre/Genre";

export default function AllMovies(){
    const allMovie = useSelector((state => state.getAllMovie))
    const dispatch = useDispatch()


    useEffect(()=>{
        axiosIstance.get('https://api.themoviedb.org/3/list/'+ allMovie.page +'?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US').then(value => {
            dispatch({type: 'SET_MOVIE', payload: [...value.data.items]})
        })

    }, [allMovie.page])
    return (<div>
        {allMovie.AllMovies.map(value => <OneMovie item={value} key={value.id}/>)}
        <center>
            <button onClick={() => {
                if(allMovie.page > 1) {
                 dispatch({type: 'BEFORE'})
                }
            }}>Before Page
            </button>
            <button onClick={() => {
               if(allMovie.page<=80){
                    dispatch({type: 'NEXT'})
                }
            }}>Next Page
            </button>
        </center>
    </div>)
}