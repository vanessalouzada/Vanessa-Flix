import axios from "axios";


//Base da Url: https://api.themoviedb.org/3/
//Url da api: /movie/now_playing?api_key=dc293256bbf582549c153ca49b86ad8b&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;