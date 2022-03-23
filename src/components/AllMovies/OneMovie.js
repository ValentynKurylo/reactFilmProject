import {Link} from "react-router-dom";
import Movie from "../ListMovie/Movie";

export default function OneMovie({item}) {

    return (<div>
        <div className={'container'}>
            <Link to={'/movie/' + item.id}>
                <h5>{item?.title} </h5>
                <div>
                    <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + item?.backdrop_path}/>
                </div>
         </Link>
        </div>
    </div>)
}