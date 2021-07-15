import {useEffect} from 'react'
import {axiosIstance} from "../../service/api";
import Movie from "./Movie";
import {useSelector, useDispatch} from "react-redux";


export default function Movies() {

    const allMovie = useSelector((state => state.getAllMovie))
    const dispatch = useDispatch()


    useEffect(() => {
        axiosIstance.get('https://api.themoviedb.org/3/movie/popular?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page=1').then(value => {
            dispatch({type: 'SET_MOVIE', payload: [...value?.data?.results]})
        })

    }, [])
    return (<div>
        {allMovie.AllMovies.map(value => <Movie item={value} key={value.id}/>)}
    </div>)
}