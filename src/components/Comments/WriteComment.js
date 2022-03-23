import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import UserServer from "../../service/UserServer";
import APIService from "../../service/UserServer";


export default function WriteComment() {
    const dispatch = useDispatch()
    let [comment, setComment] = useState({})
    const movie_id = useSelector((state => state.getAllMovie))
    const user = useSelector((state => state.TokenUserReducer))

    function addComment(e){
        e.preventDefault()
        setComment(comment.movieId = movie_id.inform.id)
        setComment(comment.userId = user.userID)
        setComment(comment.text = e.target.text.value)
        setComment(comment.raiting = (e.target.raiting.value))
        setComment(comment.userName = user.username)
        console.log(typeof comment.raiting)
        console.log(comment);
        console.log(user.token);
        if(user.token) {
            UserServer.PostCommet(comment, user.token)
        }else {
            alert("You need authorize")
        }
    }
    return (
        <div>
            <div>
            <form method={'POST'} onSubmit={addComment}>
               <input name={"text"}  placeholder={"Enter your comment"}/>
               <input name={"raiting"} type={"number"} step={0.1}
                min={0} placeholder={"Enter your raiting"} max={10}/>
               <button type={"submit"}>ADD</button>
            </form>
        </div>
        </div>
    )
}