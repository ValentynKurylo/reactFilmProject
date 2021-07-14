import {combineReducers} from "redux";
import {getMoviesReducer} from './AllMoviesReducer'

export default combineReducers({
    getAllMovie: getMoviesReducer
});