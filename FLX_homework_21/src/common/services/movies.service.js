export class MoviesService {
  constructor($http) {
    this.$http = $http;
  }

  findMovieById(id) {
    return this.$http.get(`https://reactjs-cdp.herokuapp.com/movies/${id}`)
      .then(result =>
        result.data);
  }

  getAllMovies() {
    return this.$http.get(`https://reactjs-cdp.herokuapp.com/movies?limit=100`)
      .then(result =>
        result.data.data);
  }
}

MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];
