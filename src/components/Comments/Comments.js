import {useEffect, useState} from 'react'
import {useSelector} from "react-redux";

import './Comments.css'
export default function Comments() {

    let [comments, setComments] = useState([])
    const Token = useSelector((state => state.TokenUserReducer))
    const Movie = useSelector((state => state.getAllMovie))
    useEffect(() => {
      if(Token.token) {
          console.log(Movie.inform.id);

          fetch('/comments/MovieId/' + Movie.inform.id, {
                  headers: {
                      'Authorization': 'Bearer ' + Token.token
                  }
              }
          ).catch(e => {
              console.log(e)
          }).then(value => value.json()).then(value => {
              console.log(value);
              setComments([...value])
          })
      }

    }, [])


return (
    <div>

        {
            Token.token ? (
            comments.map(value =>
                <div key={value.id}> <p id={"Wrap-text"}>{Token.username} -  {value.raiting} <p id={'p'}> {value.text}</p></p></div>
            )) : (<div>You need authorize</div>)
        }

    </div>
)

}