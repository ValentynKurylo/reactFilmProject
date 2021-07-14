import axios from "axios";

let url = 'https://api.themoviedb.org/3/'
let axiosIstance = axios.create({baseURL: url,
     headers: {
         'Authorization': 'u eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E2MjhjMmRhMmQzZDBiOWNlMzQ0MzY3NWYzYTljYyIsInN1YiI6IjYwYzQ3ZmZmYTI4NGViMDA0MDY4NDY5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acI5zOMEkNGJ_RROslscHnHIJoA0elZ2ywDzGt4GgdQ'
    }
})
/*const getAllmovie = ()=>{
    axiosIstance.get('https://api.themoviedb.org/3/movie/popular?api_key=27a628c2da2d3d0b9ce3443675f3a9cc&language=en-US&page=1')
}*/

export {axiosIstance}