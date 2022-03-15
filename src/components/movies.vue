<template>
    <div class="container mx-auto">
        <div class="py-4 border-b border-gray-500" v-for="movie of movies" :key="movie.id">
            <div @click="$router.push({name: 'movie', params: {id: movie.id}})" class="flex justify-between items-start">
            <img class="mr-3" :src="movie.image" alt="">
            <div class="info w-full">
                <h2 class="font-bold text-xl">{{ movie.id }}. {{ movie.title }}</h2>
                <p class="my-6 text-gray-500 text-sm">{{ movie.date }}</p>
                <p>{{ movie.desc }}</p>
            </div>
            <p class="bg-green-600 font-bold text-xl p-3 rounded-md text-white">{{ movie.meta }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: []
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3001/movies`);

      this.movies = res.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
