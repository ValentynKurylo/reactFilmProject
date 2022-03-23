import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Movies from "../ListMovie/Movies";
import MovieDetails from "../ListMovie/movieDetails";
import AllMovies from "../AllMovies/AllMovies";
import './MainPage.css'
import GenreMovie from "../Genre/GenreMovie";
import ThisMovie from "../Genre/ThisMovie";
import Users from "../Users/Users";
import Registration from "../Registration/Registretion";
import Enter from "../Enter/Enter";
import Comments from "../Comments/Comments";
import WriteComment from "../Comments/WriteComment";
import WatchLists from "../WatchLists/WatchLists";
import ShowWatchList from "../WatchLists/ShowWatchList";

export default function MainPage() {
    return (
        <div className={'MainWrap'}>
            <div><Router>

                <div className={'wrap'}>
                    <Link to={'/'}><p>All movies</p></Link>
                    <Link to={'/PopularMovie'}><p>Popular movies</p></Link>
                    <Link to={'/GenreMovie'}><p>Movie genres</p></Link>
                    <Link to={'/users'}><p>Users</p></Link>
                    <Link to={'/WatchLists'}><p>Movies Lists</p></Link>
                    <Link to={'/enter'}><p>Enter</p></Link>
                    <Link to={'/registration'}><p>Registration</p></Link>
                </div>
                <Switch>
                    <Route exact={true} path={'/'} component={AllMovies}/>
                    <Route exact={true} path={'/PopularMovie'} component={Movies}/>
                    <Route path={'/movie/:id'} component={MovieDetails}/>
                    <Route exact={true} path={'/GenreMovie'} component={GenreMovie}/>
                    <Route path={'/genre/:id'} component={ThisMovie}/>
                    <Route exact={true} path={'/users'} component={Users}/>
                    <Route exact={true} path={'/enter'} render={({props})=>{return <Enter/>}}/>
                    <Route exact={true} path={'/registration'} component={Registration}/>
                    <Route exact={true} path={'/comments/'} component={Comments}/>
                    <Route exact={true} path={'/WriteComments/'} component={WriteComment}/>
                    <Route exact={true} path={'/WatchLists/'} component={WatchLists}/>
                    <Route exact={true} path={'/ShowWatchList/:id'} component={ShowWatchList}/>

                </Switch>
            </Router></div>

        </div>
    )
}