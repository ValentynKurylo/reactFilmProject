import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Movies from "../ListMovie/Movies";
import MovieDetails from "../ListMovie/movieDetails";
import AllMovies from "../AllMovies/AllMovies";
import './MainPage.css'
import GenreMovie from "../Genre/GenreMovie";
import ThisMovie from "../Genre/ThisMovie";

export default function MainPage() {
    return (
        <div className={'MainWrap'}>
            <div><Router>

                <div className={'wrap'}>
                    <p><Link to={'/'}>All movies</Link></p>
                    <p><Link to={'/PopularMovie'}>Popular movies</Link></p>
                    <p><Link to={'/GenreMovie'}>Movie genres</Link></p>
                </div>
                <Switch>
                    <Route exact={true} path={'/'} component={AllMovies}/>
                    <Route exact={true} path={'/PopularMovie'} component={Movies}/>
                    <Route path={'/movie/:id'} component={MovieDetails}/>
                    <Route exact={true} path={'/GenreMovie'} component={GenreMovie}/>
                    <Route path={'/genre/:id'} component={ThisMovie}/>
                </Switch>
            </Router></div>

        </div>
    )
}