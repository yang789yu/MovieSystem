<template>
  <div class="container mx-auto  border-b border-gray-600 px-4 py-4">
    <h2 class="text-4xl font-semibold mb-5">
        Cast
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="mr-2" v-for="(cast, index) in casts" :key="index">
            <img 
                :src="castProfileImage(cast.profile_path)"
                alt=""
                class="hover:opacity-75 transition ease-in-out duration-150"
            >              
            <span class="text-gray-300">{{ cast.name }}r</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        casts: {
            required: true,
        }
    },
    methods:{
        castProfileImage(profile_path){
            if(profile_path){
                return "https://image.tmdb.org/t/p/w500/" + profile_path;
            }else{
                return "https://via.placeholder.com/300x450";
            }

        }
    }
}
</script>

<style>

</style>