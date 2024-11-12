<template>
    <div class="container mx-auto  border-b border-gray-600 px-4 py-4">
      <h2 class="text-4xl font-semibold mb-5">
          Images
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="mr-2 mt-2" v-for="(image, index) in images" :key="index">
            <img
                @click="openModel(image)" 
                :src="ProfileImage(image.file_path)"
                alt=""
                class="hover:opacity-75 transition ease-in-out duration-150"
            >
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        images: {
            required: true,
        }
    },
    methods: {
        ProfileImage(file_path){
            if(file_path){
                return "https://image.tmdb.org/t/p/w500/" + file_path;
            }else{
                return "https://via.placeholder.com/300x450";
            }
        },
        openModel(image){
            let imageFullPath = ""
            if(image.file_path) {
                imageFullPath = "https://image.tmdb.org/t/p/w500/" + image.file_path;
            }else{
                imageFullPath = "https://via.placeholder.com/300x450";
            }
            this.$emit('on-image-click', imageFullPath);
        }
    },
  }
  </script>
  
  <style>
  
  </style>