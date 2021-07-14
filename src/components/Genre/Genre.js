import {Link} from "react-router-dom";

import './Genre.css'

export default function Genre({item}){
    return (<div>
        <div className={'LinkWrap'}>
            <Link to={'/genre/' + item.id}>{item.name}</Link>
        </div>
    </div>)
}