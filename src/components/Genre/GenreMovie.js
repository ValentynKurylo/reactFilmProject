import {useState, useEffect} from 'react'
import {axiosIstance} from "../../service/api";
import Genre from "./Genre";
import {useSelector, useDispatch} from "react-redux";


export default function GenreMovie(){


    const allMovie = useSelector((state => state.getAllMovie))
    const dispatch = useDispatch()


    useEffect(()=> {
        axiosIstance.get('https://api.themoviedb.org/3/genre/movie/list?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US')
            .then(value => {dispatch({type:'SET_GENRE', payload: [...value.data.genres]})})
    })



    return (<div>
        {allMovie.genre.map(value => <Genre item={value} key={value.id}/>)}
    </div>)
}