<template>
    <div id="example">
        <h2 class="uppercase text-yellow-500 font-semibold text-lg mt-20 ml-2">
            Upcoming Movies
        </h2>
        <carousel-3d 
            :controls-visible="true" 
            :clickable="false"
            :key="upcomingMovies.length"
            :listData="upcomingMovies"
            :height="500"
            :autoplay="true" 
            :autoplay-timeout="3000" 
            :display="5"
        >
            <slide :index="i" v-for="(movie, i) in this.upcomingMovies" :key="i">
                <figure>
                    <img :src="posterPath(movie.poster_path)">
                    <figcaption>
                        <router-link :to="`/movie/${movie.id}`">
                            {{ movie.title }}
                        </router-link>
                    </figcaption>
                </figure>
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    components:{
        Carousel3d,
        Slide
    },
    data() {
        return {
            upcomingMovies:[]
        }
    },
    methods:{
        async fetchUpcomingMovies() {
            const response = await this.$http.get("https://api.themoviedb.org/3/movie/upcoming");
            this.upcomingMovies = response.data.results.slice(1, 6);
            console.log("------------------");
            console.log(this.upcomingMovies);
        },
        posterPath(poster_path) {
            return "https://image.tmdb.org/t/p/w500" + poster_path
        }
    },
    mounted() {
        this.fetchUpcomingMovies();
    },
    computed: {

    },
}
</script>

<style>

.carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

</style>