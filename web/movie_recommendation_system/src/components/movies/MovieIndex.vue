<template>
    <div>
        <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
            <img :src="posterPath" alt="" class="w-64">
            <div class="ml-24">
                <h1 class="text-4xl font-semibold">{{ this.movie.title }}</h1>
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow-500 w-4 mr-2">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-500 text-sm mt-1">
                        {{ Math.ceil(this.movie.vote_average * 10) }} % | {{ this.movie.release_date }}
                        <span v-for="(item, index) in movie.genres" :key="index" class="ml-1">
                            {{ item.name }}<span v-if="(index !== movie.genres.length - 1)">,</span>
                        </span>
                    </span>
                </div>
                <p class="mt-5">
                    {{ this.movie.overview }}
                </p>
                <div class="mt-5">
                    <span class="mt-5 font-semibold">Featured Cast</span>
                    <div class="flex">
                        <div v-for="(crew, index) in movie.credits.crew" :key="index" >
                            <div v-if="index < 2" class="flex flex-col mt-5 mr-5">
                                <span>{{ crew.name }}</span>
                                <span class="text-gray-500">{{ crew.job }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div  class="mt-5">
                    <!-- :href="youtubeVideo" -->
                    <a 
                        @click.prevent="openYouTubeModel"
                        target="blank" 
                        class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd" />
                        </svg>
                        <span class="ml-2">Play Trailer</span>                
                    </a>

                    <a href="#" class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <span class="ml-2">Favourite</span>                
                    </a>
                </div>
            </div>
        </div>

        <CastIndex :casts="movie.credits.cast"></CastIndex>
        <ImagesIndex :images="movie.images.backdrops" v-on:on-image-click="showImageModel"></ImagesIndex>
        <!-- <MediaModel :isShow="modelOpen" @update:isShow="modelOpen = $event" :mediaURL="youtubeVideo"></MediaModel> -->
        <MediaModel v-model="modelOpen" :mediaURL="mediaURL" :isVideo="isVideo"></MediaModel>

    </div>

</template>

<script>
import CastIndex from './CastIndex.vue';
import ImagesIndex from './ImagesIndex.vue';
import MediaModel from '../models/MediaModel.vue';
export default {

    components:{
        CastIndex,
        ImagesIndex,
        MediaModel
    },
    data() {
        return {
            movie: {
                credits:{
                    crew:{}
                },
                images:{
                    backdrops:{}
                }
            },
            modelOpen: false,
            isVideo: false,
            mediaURL:""
        }
    },
    mounted(){
        // this.fetchMovie(this.$route.params.id);
    },

    watch: {
        "$route.params.id": {
            handler() {
                this.fetchMovie(this.$route.params.id);
            },
            immediate: true,
        }
    },

    methods: {
        async fetchMovie(movieId) {
            const response = await this.$http.get("/movie/" + movieId + "?append_to_response=credits,videos,images")
            console.log(response.data);
            this.movie = response.data;
        },

        openYouTubeModel(){
            this.mediaURL = this.youtubeVideo();
            this.isVideo = true;
            this.modelOpen = true;
        },
        openImageModel(){
            this.isVideo = false;
            this.modelOpen = true;
        },
        youtubeVideo(){
            if(!this.movie.videos) return;
            return "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
        },
        showImageModel(imageFullPath){
            this.mediaURL = imageFullPath;
            this.isVideo = false;
            this.modelOpen = true;
        }
    },
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
        },

    },
}
</script>

<style>

</style>