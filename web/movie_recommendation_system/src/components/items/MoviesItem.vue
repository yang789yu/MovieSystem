<template>
    <div>
        <router-link :to="`/movie/${movie.id}`">
            <img 
                :src="posterPath" 
                class="hover:opacity-75 transition ease-in-out duration-150"
            >
        </router-link>
        <h3>{{ movie.title }}</h3>
        <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500 w-4">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
            </svg>

            <span class="ml-2">{{ Math.ceil(movie.vote_average * 10) }}  % | {{ movie.release_date }} </span><br>
        </div>
        <span class="text-sm text-gray-500">
            <span v-for="(genre_id, index) in movie.genre_ids" :key="genre_id">
                {{ genreTypeName(genre_id, index)}}
            </span>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        movie: {
            required: true,
        },
        genres: {
            required: true,
        }
    },
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
        }
    },
    methods: {
        genreTypeName(genre_id, index) {
            for(const item of this.genres){
                if(genre_id === item.id){
                    if (index === this.movie.genre_ids.length - 1){
                        return item.name;
                    }else{
                        return item.name + ",";
                    }

                }
            }
        }
    }
}
</script>

<style>

</style>