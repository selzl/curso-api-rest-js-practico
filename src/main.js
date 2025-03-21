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
import {headerSection, trendingPreviewSection,popularTvShowPreviewSection, categoriesPreviewSection, genericSection,
    movieDetailSection, searchForm, trendingMoviesPreviewList, popularTvShowPreviewTvShowList,
    categoriesPreviewList, movieDetailCategoriesList, relatedMoviesContainer, headerTitle,
    arrowBtn, headerCategoryTitle, searchFormInput, searchFormBtn, trendingBtn, popularTvShowPreviewBtn,
    movieDetailTitle, movieDetailDescription, movieDetailScore} from "./nodes.js"


    //Utils
    function createMovies(movies, container) {
        container.innerHTML = '';

        movies.forEach(movie => {
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('movie-container');
    
            const movieImg = document.createElement('img');
            movieImg.classList.add('movie-img');
            movieImg.setAttribute('alt', movie.title);
            movieImg.setAttribute(
                'src', 
                'https://image.tmdb.org/t/p/w300' + movie.poster_path);
    
            movieContainer.appendChild(movieImg);
            container.appendChild(movieContainer);
        });
    }

    function createCategories(categories, container) {
        container.innerHTML = "";

        categories.forEach(category => {
            const categoryContainer = document.createElement('div');
            categoryContainer.classList.add('category-container');
    
            const categoryTitle = document.createElement('h3');
            categoryTitle.classList.add('category-title');
            categoryTitle.setAttribute('id', 'id' + category.id);
            categoryTitle.addEventListener('click', () => {
                location.hash = '#category=' + category.id + '-' +  category.name;
            })
            const categoryTitleText = document.createTextNode(category.name);
    
            categoryTitle.appendChild(categoryTitleText);
            categoryContainer.appendChild(categoryTitle);
            container.appendChild(categoryContainer);
            
        });
    }

    function createTvShows(series, container) {
        container.innerHTML = '';

        series.forEach(serie => {
            const tvShowContainer = document.createElement('div');
            tvShowContainer.classList.add('movie-container');
    
            const tvShowImg = document.createElement('img');
            tvShowImg.classList.add('movie-img');
            tvShowImg.setAttribute('alt', serie.title);
            tvShowImg.setAttribute(
                'src', 
                'https://image.tmdb.org/t/p/w300' + serie.poster_path);
    
                tvShowContainer.appendChild(tvShowImg);
                container.appendChild(tvShowContainer);
        });
    }

    //Lamados API

export async function getTrendingMoviesPreview() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    createMovies(movies, trendingMoviesPreviewList);
}

export async function getCategoriesPreview() {
    const { data } = await api('genre/movie/list');
    const categories = data.genres;

    createCategories(categories, categoriesPreviewList);
}

export async function getMoviesByCategory(id) {
    const { data } = await api('discover/movie', {
        params: {
            with_genres: id,
        },
    });
    const movies = data.results;

    createMovies(movies, genericSection);
}

export async function getTvShowsPreview() {
    const { data } = await api('tv/popular');
    const series = data.results;

    createTvShows(series, popularTvShowPreviewTvShowList);
}

export async function getMoviesBySearch(query) {
    const { data } = await api('search/movie', {
        params: {
            query,
        },
    });
    const movies = data.results;

    createMovies(movies, genericSection);
}