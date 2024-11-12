<template>
  <div class="container mx-auto ">
    <PopularMovies></PopularMovies>
    <UpcomingMovies></UpcomingMovies>
  </div>
</template>

<script>

import PopularMovies from "./PopularMovies.vue"
import UpcomingMovies from "./UpcomingMovies.vue";

export default {
  components:{
    PopularMovies,
    UpcomingMovies
  }
}
</script>

<style>

</style>