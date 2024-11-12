<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500">
      <NarbarIndex></NarbarIndex>
      <SearchbarIndex></SearchbarIndex>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NarbarIndex from './components/header/NavbarIndex.vue';
import SearchbarIndex from './components/header/SearchbarIndex.vue';
export default {
  name: 'App',
  components:{
    NarbarIndex,
    SearchbarIndex,
  }

}
</script>

<style>


</style>
