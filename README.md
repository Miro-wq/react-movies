# Movie search application.

## 🛠 Tools used

[![My Skills](https://skillicons.dev/icons?i=html,css,js,react,npm,webpack,vscode)](https://skillicons.dev)

**Project Overview**  

This is a homework task project for a movie search and storage application that allows users to explore trending movies, search for specific titles, and view detailed information such as cast, reviews, and more.
By completing this project, I aim to improve my understanding of API integration, React routing, and code splitting techniques like lazy loading. 
Additionally, I will strengthen my knowledge of React Hooks and component structure, making the app efficient and user-friendly.

**Movie Search**  

Create a basic routing system for a movie search and storage application. You can view a preview of the application here.

**API: themoviedb.org**  
For the backend, use the [themoviedb.org](https://www.themoviedb.org/) API. You need to register and obtain an API key. In this task, you will use the following endpoints:

- `/trending/get-trending` - the list of today’s most popular movies to create a collection on the homepage.
- `/search/search-movies` - search for a movie by keywords on the movie search page.
- `/movies/get-movie-details` - request detailed information about a movie for the movie details page.
- `/movies/get-movie-credits` - request cast information for the movie details page.
- `/movies/get-movie-reviews` - request reviews for the movie details page.  
[Link to the documentation](https://developers.themoviedb.org/3)

**Routes**  

The application should have the following routes. If the user accesses a non-existent route, they should be redirected to the homepage.

- `'/'` - Home component, the homepage with the list of popular movies.
- `'/movies'` - Movies component, the search page for movies by keyword.
- `'/movies/:movieId'` - MovieDetails component, the detailed movie information page.
- `'/movies/:movieId/cast'` - Cast component, cast information displayed on the MovieDetails page.
- `'/movies/:movieId/reviews'` - Reviews component, reviews displayed on the MovieDetails page.

**Code Splitting**  

Add asynchronous JS code loading for the application routes using `React.lazy()` and `<Suspense>`.
