const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    params: {
        'api_key': API_KEY,

    },
});
import { API_KEY } from "./secrets.js";

export async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    movies.forEach(movie => {
        const trendingMoviesPreviewList = document.querySelector('#trendingPreview .trendingPreview-movieList')

        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute(
            'src', 
            'https://image.tmdb.org/t/p/w300' + movie.poster_path);

        movieContainer.appendChild(movieImg);
        trendingMoviesPreviewList.appendChild(movieContainer);
    });
}


export async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');
    const categories = data.genres;
    categories.forEach(category => {
        const categoriesPreviewList = document.querySelector('#categoriesPreview .categoriesPreview-list')

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id' + category.id);
        const categoryTitleText = document.createTextNode(category.name);

        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        categoriesPreviewList.appendChild(categoryContainer);
        
    });
}

export async function getTvShowsPreview() {
    const { data } = await api('tv/popular');
    const series = data.results;
    series.forEach(serie => {
        const popularTvShowPreviewTvShowList = document.querySelector('#popularTvShowPreview .popularTvShowPreview-tvShowList')

        const tvShowContainer = document.createElement('div');
        tvShowContainer.classList.add('movie-container');

        const tvShowImg = document.createElement('img');
        tvShowImg.classList.add('movie-img');
        tvShowImg.setAttribute('alt', serie.title);
        tvShowImg.setAttribute(
            'src', 
            'https://image.tmdb.org/t/p/w300' + serie.poster_path);

            tvShowContainer.appendChild(tvShowImg);
            popularTvShowPreviewTvShowList.appendChild(tvShowContainer);
    });
}
