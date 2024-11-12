<template>
    <div class="container mx-auto px-4 py-16 flex">
        <div class="flex-none">
            <img 
                :src="profilePath"
                alt=""
            >
            <ul class="flex items-center mt-4">
                <li class="mr-6">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" stroke-width="1.5">
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                    </a>
                </li>
                <li class="mr-6">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" stroke-width="1.5">
                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                            <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        </svg>
                    </a>
                </li>
                <li class="mr-6">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" stroke-width="1.5">
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="32" height="32" stroke-width="1.5">
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                            <path d="M3.6 9h16.8"></path>
                            <path d="M3.6 15h16.8"></path>
                            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>

        <div class="ml-20">
            <h2 class="text-4xl font-semibold">{{ this.actor.name }}</h2>
            <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg>
                <span class="ml-2 text-gray-400 text-sm">{{ this.actor.birthday }} (19)</span>
            </div>
            <p class="text-gray-300" mt-8>
                {{ this.actor.biography }}
            </p>

            <h4 class="mt-12 font-semibold">Known For</h4>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                <div v-for="movie in this.knownFor" :key="movie.id">
                    <router-link 
                        :to="`/movie/${movie.id}`" 
                        class="text-gray-400 text-sm leading-normal hover:text-white"
                    >
                        <img
                            :src="movieImagePath(movie.backdrop_path)" 
                            alt="poster"
                            class="mt-1 hover:opacity-75 transition ease-in-out duration-150 w-185 h-278"
                        >
                        {{ movie.name }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socialDetails: [],
            actor:{},
            knownFor:[],
            castMovies:[],
        }
    },
    mounted(){
        this.fetchActor(this.$route.params.id);
        this.fetchCredits(this.$route.params.id);
    },
    methods:{
        async fetchActor(actorId){
            const response = await this.$http.get('https://api.themoviedb.org/3/person/' + actorId); 
            // console.log(response.data);
            this.actor = response.data;
        },
        async fetchCredits(actorId){
            const response = await this.$http.get('https://api.themoviedb.org/3/person/' + actorId + "/combined_credits"); 
            console.log(response.data);
            this.castMovies = response.data.cast;
            // this.knownFor = response.data.cast.slice(
            //     Math.max(response.data.cast.length - 5, 1)
            // )
            this.knownFor = response.data.cast
            .filter((x) => x.media_type == "movie")
            .slice(1, 6);
            console.log(this.knownFor);
        },
        movieImagePath(path) {
            if(!path){
                return "https://via.placeholder.com/185x278";
            }
            return "https://image.tmdb.org/t/p/w185/" + path;
        },
    },
    computed: {
        profilePath() {
            return "https://image.tmdb.org/t/p/w300/" + this.actor.profile_path;
        },

    }
}
</script>

<style>

</style>