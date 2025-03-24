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
    movieDetailSection, serieDetailSection, searchForm, trendingMoviesPreviewList, popularTvShowPreviewTvShowList,
    categoriesPreviewList, movieDetailCategoriesList, serieDetailCategoriesList, relatedMoviesContainer, headerTitle,
    arrowBtn, headerCategoryTitle, searchFormInput, searchFormBtn, trendingBtn, popularTvShowPreviewBtn,
    movieDetailTitle, movieDetailDescription, movieDetailScore, serieDetailTitle, serieDetailDescription, serieDetailScore} from "./nodes.js"


    //Utils
    function createMovies(movies, container) {
        container.innerHTML = '';

        movies.forEach(movie => {
            const movieContainer = document.createElement('div');
            movieContainer.classList.add('movie-container');
            movieContainer.addEventListener('click', () => {
                location.hash = '#movie=' + movie.id;
            });
    
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
            tvShowContainer.addEventListener('click', () => {
                location.hash = '#serie=' + serie.id;
            });
    
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

export async function getTrendingMovies() {
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    createMovies(movies, genericSection);
}

export async function getTvShows() {
    const { data } = await api('tv/popular');
    const series = data.results;

    createTvShows(series, genericSection);
}

export async function getMovieById(id) {
    const { data: movie } = await api('movie/' + id);
    
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;
    
    const movieImgUrl ='https://image.tmdb.org/t/p/w500' + movie.poster_path;
    headerSection.style.background = `
    linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%
        ),
    url(${movieImgUrl})`;
    createCategories(movie.genres, movieDetailCategoriesList);
}

export async function getSerieById(id) {
    const { data: serie } = await api('tv/' + id);
    
    serieDetailTitle.textContent = serie.name;
    serieDetailDescription.textContent = serie.overview;
    serieDetailScore.textContent = serie.vote_average;
    
    const serieImgUrl ='https://image.tmdb.org/t/p/w500' + serie.poster_path;
    headerSection.style.background = `
    linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.35) 19.27%, 
        rgba(0, 0, 0, 0) 29.17%
        ),
    url(${serieImgUrl})`;
    createCategories(serie.genres, serieDetailCategoriesList);
}