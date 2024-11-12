<template>
  <div class="mt-5 flex relative">
    <input
      ref="searchBox" 
      type="text" 
      class="rounded-full bg-gray-600 px-7 w-50 h-10 mr-3 focus:outline-none focus:ring focus:ring-2 focus:ring-blue-500" 
      placeholder="Search.."
      @input="debounceSearch"
      v-model="searchTerm"
      @focus="handleFocus"
    >
    
    <div class="absolute top-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mt-2 ml-2 mt-3 text-gray-300">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </div>

    <div 
      class="absolute mt-12 ml-2 rounded bg-gray-600 w-60 z-50"
    >
      <ul 
        class="mt-3"
        v-if="showSearchResult" 
      >
        <li 
          v-for="(movie, index) in searchResult" 
          :key="index" 
        >
          <router-link 
            :to="`/movie/${movie.id}`" 
            class="flex item-center border-b border-gray-500 p-1"
            @click.native="showSearchResult = false"  
          >
            <img :src="posterPath(movie.poster_path)" alt="" class="w-10 p-1">
            <span class="ml-3">{{ movie.title }}</span>
          </router-link>
        </li>
      </ul>
      <ul
        class="px-3"
        v-if="searchResult.length == 0 && showSearchResult"
      >
        <li>nothing results found for "{{ searchTerm }}"</li>
      </ul>
    </div>
    
    <AccoutDropDown></AccoutDropDown>
  </div>
</template>

<script>
import AccoutDropDown from './AccoutDropDown.vue';
export default {
  components:{
    AccoutDropDown
  },
  data() {
    return {
      searchResult: [],
      noResultFound: false,
      searchTerm:"",
      showSearchResult: false,
    }
  },

  mounted(){
    this.keyboardEvents();
  },

  methods: {
    debounceSearch(event){
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if(event.target.value.length > 2){
          this.fetchSearch(event.target.value);
        }else{
          this.showSearchResult = false;
        }
      },600);
    },
    async fetchSearch(term){
      try {
        const response = await this.$http.get("/search/movie?query=" + term)
        this.searchResult = response.data.results;
        this.showSearchResult = response.data.results ? true : false;
      } catch (error) {
        console.log(error);
      }
    },

    handleFocus() {
      if(this.searchTerm != ""){
        this.showSearchResult = true;
      }
    },  

    keyboardEvents(){
      let windowObj = this

      window.addEventListener("click", (e) => {
        if(!this.$el.contains(e.target)){
          this.showSearchResult = false;
        }
      });

      window.addEventListener("keypress", (e) => {
        if(e.keyCode == "47"){
          e.preventDefault();
          windowObj.$refs.searchBox.focus();
        }
      });

      window.addEventListener("keydown",(e) => {
        if(e.key == "Escape"){
          this.showSearchResult = false;
        }
      })
    },

    posterPath(poster_path) {
      if(poster_path){
        return "https://image.tmdb.org/t/p/w500/" + poster_path
      }else{
        return "https://via.placeholder.com/50x75";
      }

    },
  }
}
</script>

<style>

</style>