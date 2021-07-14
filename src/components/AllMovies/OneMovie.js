import {Link} from "react-router-dom";


export default function OneMovie({item}){

    return( <div>
    <div className={'container'}>
            <center>
                <div>{item?.title} </div>
                <div>
                    <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2" + item?.backdrop_path}/>
                </div>
                <div>
                    <Link to={'/movie/'+item.id}>Details</Link>
                </div>
            </center>
        </div>
    </div>)
}