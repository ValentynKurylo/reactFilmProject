

export default class APIService {
    // Insert an article
    static PostUser(body) {
        return fetch('/authUser/', {

            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

            .catch(error => console.log(error)).then(response => response.json())

    }

    static EnterUser(body) {

        return fetch('/auth/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            console.log(response);
            return response
        })
    }
    static GetCurrentUser(username, token){
        return fetch('/authUser/current_user/' + username, {
            'method': 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            console.log(response);
            return response
        })
    }
    static getComments(token, id) {

        return fetch('/comments/MovieId/' + id, {
            'method': 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }).catch(error => console.log(error)).then(response => response.json()).then(response =>{
            console.log(response);
            return response
        })
    }
    static PostCommet(body, token) {
        return fetch('/comments/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(body)
        })
    }


}