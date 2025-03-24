import {getTrendingMoviesPreview, getCategoriesPreview, getTvShowsPreview, getMoviesByCategory, getMoviesBySearch, getTrendingMovies, getTvShows, getMovieById, getSerieById} from "./main.js"
import {headerSection, trendingPreviewSection,popularTvShowPreviewSection, categoriesPreviewSection, genericSection,
        movieDetailSection, serieDetailSection, searchForm, trendingMoviesPreviewList, popularTvShowPreviewTvShowList,
        categoriesPreviewList, movieDetailCategoriesList,serieDetailCategoriesList, relatedMoviesContainer, headerTitle,
        arrowBtn, headerCategoryTitle, searchFormInput, searchFormBtn, trendingBtn, popularTvShowPreviewBtn,
        movieDetailTitle, movieDetailDescription, movieDetailScore, serieDetailTitle, serieDetailDescription, serieDetailScore} from "./nodes.js"
searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;
});
trendingBtn.addEventListener('click', () => {
    location.hash = '#trends'
});
popularTvShowPreviewBtn.addEventListener('click', () => {
    location.hash = '#tvShows'
});

arrowBtn.addEventListener('click', () => {
    history.back();
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);



function navigator() {
    console.log({location});
    
    if (location.hash.startsWith('#trends')) {
        trendsPage()

    }else if (location.hash.startsWith('#search=')) {
        searchPage() 

    }else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage()

    }else if (location.hash.startsWith('#serie=')) {
        serieDetailsPage()

    }else if (location.hash.startsWith('#tvShows')) {
        tvShowsPage()

    }else if (location.hash.startsWith('#category=')) {
        categoriesPage()

    }else {
        homePage();

    }
}

function homePage() {
    console.log('Home!!!');

    headerSection.classList.remove('header-container--long');
    headerSection.computedStyleMap.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    trendingPreviewSection.classList.remove('inactive');
    popularTvShowPreviewSection.classList.remove('inactive');
    popularTvShowPreviewTvShowList.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
    getTvShowsPreview();
}

function categoriesPage() {
    console.log('Categories!!!');

    headerSection.classList.remove('header-container--long');
    headerSection.computedStyleMap.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularTvShowPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    popularTvShowPreviewTvShowList.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    
    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');
    

    headerCategoryTitle.innerHTML = categoryName;
    getMoviesByCategory(categoryId);
}

function movieDetailsPage() {
    console.log('Movie!!!');

    headerSection.classList.add('header-container--long');
    //headerSection.computedStyleMap.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    popularTvShowPreviewTvShowList.classList.add('inactive');
    popularTvShowPreviewSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    serieDetailSection.classList.add('inactive');

    const [_, movieId] = location.hash.split('=');
    getMovieById(movieId);
}

function serieDetailsPage() {
    console.log('Serie!!!');

    headerSection.classList.add('header-container--long');
    //headerSection.computedStyleMap.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    popularTvShowPreviewTvShowList.classList.add('inactive');
    popularTvShowPreviewSection.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    serieDetailSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, serieId] = location.hash.split('=');
    getSerieById(serieId);
}

function searchPage() {
    console.log('Search!!!');

    headerSection.classList.remove('header-container--long');
    headerSection.computedStyleMap.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularTvShowPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    popularTvShowPreviewTvShowList.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query);
}

function trendsPage() {
    console.log('Trends!!!');

    headerSection.classList.remove('header-container--long');
    headerSection.computedStyleMap.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularTvShowPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    popularTvShowPreviewTvShowList.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = '🎬 Tendencias 🎬';
    getTrendingMovies();
}

function tvShowsPage() {
    console.log('Tv shows!!!');

    headerSection.classList.remove('header-container--long');
    headerSection.computedStyleMap.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    popularTvShowPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    popularTvShowPreviewTvShowList.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = '🔝 Lo mejor de la TV 🔝';
    getTvShows();
}