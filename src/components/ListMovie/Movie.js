import './Movie.css'
import {Link} from "react-router-dom";

export default function Movie({item}) {
    return (<div>
        <div className={'container'}>
         <Link to={'/movie/' + item.id}>
                <h5>{item?.title} </h5>
                <div className={'desc'}>
                    <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + item?.backdrop_path}/>
                    <p id={"text"}>{item?.overview}</p>
                </div>
             <button id={"ADD"}>Add To Movie List</button>
         </Link>

        </div>

    </div>)
}
