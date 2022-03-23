export default class APIMovieListService {
    // Insert an article

    static getMovieLists(token, userId) {
        return fetch('/watchList/User/' + userId, {
            'method': 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            return response
        })
    }
    static PostWatchList(body, token) {
        return fetch('/watchList/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(body)
        })

    }
    static getMovieListsMovie(token, watchListId) {
        return fetch('/watchList/Get/' + watchListId, {
            'method': 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            return response
        })
    }
    static PostWatchListAddMovie(body, token) {
        return fetch('/watchList/Post/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(body)
        })

    }

}