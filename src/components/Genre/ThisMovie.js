import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {axiosIstance} from "../../service/api";
import {useDispatch, useSelector} from "react-redux";


export default function ThisMovie() {

    const allMovie = useSelector((state => state.getAllMovie))
    const dispatch = useDispatch()
    let params = useParams()

    useEffect(() => {
        axiosIstance.get('https://api.themoviedb.org/3/list/' + allMovie.page + '?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US').then(value => {
            dispatch({type: 'SET_MOVIE', payload: [...value.data.items]})
        })

    }, [allMovie.page])
    let mov = []
    console.log(params.id);
    allMovie.AllMovies.map(value =>
        value.genre_ids.map(value1 => {
            if (value1 == params.id) {
                mov.push(value)
            }
        })
    )


    return (<div>
        {mov.map(value => <div>
                <center>
                    <div>{value.title}</div>
                    <div><img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + value.backdrop_path}/></div>
                </center>
            </div>
        )}
        <center>
            <button onClick={() => {
                if (allMovie.page > 1) {
                    dispatch({type: 'BEFORE'})
                }
            }}>Before Page
            </button>
            <button onClick={() => {
                if (allMovie.page <= 80) {
                    dispatch({type: 'NEXT'})
                }
            }}>Next Page
            </button>
        </center>
    </div>)
}