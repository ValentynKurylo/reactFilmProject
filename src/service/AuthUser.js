import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

let url = ''


let axiosIstanceForUser = axios.create({
    baseURL: url,
    headers: {
        'Authorization': ''
    }
})
/*const getAllmovie = ()=>{
    axiosIstance.get('https://api.themoviedb.org/3/movie/popular?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page=1')
}*/

export {axiosIstanceForUser}