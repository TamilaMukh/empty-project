<template> 
  <div> 
    <div class="bg-black text-white py-16"> 
      <div class="container mx-auto"> 
        <div class="flex justify-between items-center"> 
          <div class="block"> 
            <h1 class="font-bold text-4xl mb-5">{{ movies[curId].title }}</h1> 
            <div class="flex items-center border-t border-b border-gray-500 py-4"> 
              <div class="w-full"> 
                <h3 class="uppercase text-lg mb-4">Metascore</h3> 
                <p class="w-2/3">Generally favorable reviews based on 68 Critic Reviews</p> 
              </div> 
              <p class="bg-green-500 font-bold text-xl p-3 rounded-xl text-white">{{ movies[curId].meta }}</p> 
            </div> 
            <div class="flex items-center border-b border-gray-500 py-4"> 
              <div class="w-full"> 
                <h3 class="uppercase text-lg mb-4">User Score</h3> 
                <p class="w-2/3">Universal acclaim based on 1172 Ratings</p> 
              </div> 
              <p class="bg-green-500 font-bold text-xl p-3 rounded-xl text-white">{{ movies[curId].user }}</p> 
            </div> 
          </div> 
          <video class="w-1/2" autoplay muted controls :src="movies[curId].video"></video> 
        </div> 
      </div> 
    </div> 
    <div class="container mx-auto">
      <div class="flex items-start">
      <div class="metascore w-1/4 mr-8">
        <!-- <h1 class="text-xl font-bold">Metascore</h1>
        <div class="border-b-4 border-black w-6 mt-2"></div>
        <div class="flex items-center 4/5">
          <p class="bg-red-500 font-bold text-3xl w-16 p-4 text-center rounded-xl text-white mr-3 mt-3">27</p>
        <div><div class="relative border-b-4 border-gray-300 w-56 mt-2"><div class="absolute border-b-4 border-green-500 w-10"></div></div>
        <p class="text-sm text-black uppercase">All: {{  }} </p></div>
        </div> -->
        <h2 class="text-2xl border-b border-gray-300 py-2 mt-6">Critic reviews</h2>
        <div class="border-b border-gray-300 pb-6 mt-6" v-for="critic of movies[curId].metacritic" :key="critic.id">
          <div class="items-center flex mb-2">
            <p class="bg-green-500 font-bold text-xl p-3 rounded-xl text-white mr-3"> {{ critic.rate }} </p>
            <div>
              <img class="mb-2" :src="critic.img" alt="">
              <div class="flex items-center">
                <p class="font-bold mr-3"> {{ critic.name }} </p>
                <p class="text-sm text-gray-500"> {{ critic.date }} </p>
              </div>
            </div>
          </div>
          <p>{{ critic.review }}</p>
        </div>
      </div>
      <div class="userscore w-1/4">
        <h2 class="text-2xl border-b border-gray-300 py-2 mt-6">User reviews</h2>
        <div class="border-b border-gray-300 pb-6 mt-6" v-for="critic of movies[curId].usercritic" :key="critic.id">
          <div class="items-center flex mb-2">
            <p class="bg-green-500 font-bold text-xl p-3 rounded-full text-white mr-3"> {{ critic.rate }} </p>
            <div>
              <img class="mb-2" :src="critic.img" alt="">
              <div class="block">
                <p class="font-bold mr-3"> {{ critic.name }} </p>
                <p class="text-sm text-gray-500"> {{ critic.date }} </p>
              </div>
            </div>
          </div>
          <p>{{ critic.review }}</p>
        </div>
      </div>
    </div>
    </div>
  </div> 
</template> 
 
<script> 
import axios from "axios"; 
 
export default { 
  data() { 
    return { 
      movies: [],
      curId: this.$route.params.id - 1, 
    }; 
  }, 
  async created() { 
    try { 
      const res = await axios.get(`http://localhost:3001/movies`); 
      this.movies = res.data; 
    } catch (e) { 
      console.error(e); 
    } 
  }, 
}; 
</script>
