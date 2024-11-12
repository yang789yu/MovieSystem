<template>
  <div class="mx-5">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold">
        Popular Movies
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <MoviesItem v-for="movie in movies" :key="movie.id" :movie="movie" :genres="genres"></MoviesItem>
    </div>

  </div>
</template>

<script>
import MoviesItem from '../items/MoviesItem.vue'
export default {
    components:{
        MoviesItem
    },
    data() {
      return {
        movies: [],
        genres: [],
      }
    },

    async mounted() {
      this.fetchGenres();
      try {
        const response = await this.$http.get("/movie/popular");
        this.movies = response.data.results;
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    },

    methods: {
      async fetchGenres() {
          try {
            const response = await this.$http.get("/genre/movie/list");
            this.genres = response.data.genres;
            // console.log(this.genres);
        } catch (error) {
            console.log(error);
        }
        }
    }
}
</script>

<style>

</style>