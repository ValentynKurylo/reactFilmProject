import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function WatchList({item}) {
    return (
        <div>
            <div key={item.id}>{item.name}    <button><Link to={'/ShowWatchList/' + item.id}>Show</Link></button>
            </div>

        </div>
    )
}