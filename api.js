import axios from 'axios';

const KEY = "a992d1fae6c06b990f53908e421ee199";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const makeRequest = (path, params) => {
    return axios.get(`${path}`, {
        params: {
            ...params,
            api_key:KEY,
            language: 'ko',
        }
    })
}

const getAnything = async (path, params = {}) => {
    try {
        const {data: { results }, data} = await makeRequest(path, params);
        return [results || data, null];
    } catch (e) {
        return [null, e];
    }
};

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
    search: query => getAnything("/search/movie", { query }),
    movie: id => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie")
}

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", { query }),
    show: id => getAnything(`/tv/${id}`)
}