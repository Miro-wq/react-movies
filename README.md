# ✨ Movie search application. ✨

## 🛠 Tools used

[![My Skills](https://skillicons.dev/icons?i=html,css,js,react,npm,webpack,vscode)](https://skillicons.dev)

![Description](https://img.shields.io/badge/Description-purple?style=for-the-badge)
>This is a homework task project for a movie search and storage application built with React.js, leveraging the themoviedb.org API for fetching movie data. It showcases popular movies, allows users to search for specific titles, and provides detailed information about each movie, including cast and reviews. The application also implements React features like routing, code splitting, and lazy loading to ensure a smooth user experience. This project is designed to deepen my knowledge of React, API integration, and modern web development practices.

![Features](https://img.shields.io/badge/Features-purple?style=for-the-badge)

- **Movie Search:** Users can search for movies by title using the The Movie Database (TMDB) API.
- **Movie Details Page:** Displays detailed information about a selected movie, including the title, release date, overview, and more.
- **Cast and Reviews:** Separate pages to explore the movie's cast and read user reviews.
- **Dynamic Routing:** Implements navigation between pages using React Router.

![Technologies Used:](https://img.shields.io/badge/Technologies%20Used-purple?style=for-the-badge)

- **React:** Core library for building the user interface.
- **React Router:** For dynamic routing and navigation.
- **Axios:** Simplifies API requests.
- **JavaScript (ES6+):** Used for application logic.
- **CSS Modules:** Component-specific styling.

![Key Learning Objectives:](https://img.shields.io/badge/Key%20Learning%20Objectives-purple?style=for-the-badge)

This project showcases how to build a multi-page application with React Router and integrate external APIs for dynamic content. It's a great reference for understanding routing and state management in React.

![API: themoviedb.org](https://img.shields.io/badge/API:%20themoviedb.org-purple?style=for-the-badge)

For the backend, use the [themoviedb.org](https://www.themoviedb.org/) API. You need to register and obtain an API key. In this task, you will use the following endpoints:

- `/trending/get-trending` - the list of today’s most popular movies to create a collection on the homepage.
- `/search/search-movies` - search for a movie by keywords on the movie search page.
- `/movies/get-movie-details` - request detailed information about a movie for the movie details page.
- `/movies/get-movie-credits` - request cast information for the movie details page.
- `/movies/get-movie-reviews` - request reviews for the movie details page.  
[Link to the documentation](https://developers.themoviedb.org/3)

![Routes](https://img.shields.io/badge/Routes-purple?style=for-the-badge)

The application should have the following routes. If the user accesses a non-existent route, they should be redirected to the homepage.

- `'/'` - Home component, the homepage with the list of popular movies.
- `'/movies'` - Movies component, the search page for movies by keyword.
- `'/movies/:movieId'` - MovieDetails component, the detailed movie information page.
- `'/movies/:movieId/cast'` - Cast component, cast information displayed on the MovieDetails page.
- `'/movies/:movieId/reviews'` - Reviews component, reviews displayed on the MovieDetails page.

## Code Splitting ![Code Splitting](https://img.shields.io/badge/Code%20Splitting-purple?style=for-the-badge)

Add asynchronous JS code loading for the application routes using `React.lazy()` and `<Suspense>`.
