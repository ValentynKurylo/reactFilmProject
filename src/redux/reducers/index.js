import {combineReducers} from "redux";
import {getMoviesReducer} from './AllMoviesReducer'
import {TokenReducer} from "./UserReducer";
import {MovieListReducer} from "./MovieListReducer";

export default combineReducers({
    getAllMovie: getMoviesReducer,
    TokenUserReducer: TokenReducer,
    WatchListReducer: MovieListReducer
});