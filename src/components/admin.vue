<template>
    <div>
        <form class="block my-10" action="">
          <p class="text-xl font-bold ">enter name: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="text" v-model="form.title" placeholder="enter title..">
          <p class="text-xl font-bold ">enter date: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="text" v-model="form.date" placeholder="enter date..">
          <p class="text-xl font-bold ">enter desc: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="text" v-model="form.desc" placeholder="enter desc..">
          <p class="text-xl font-bold ">enter image: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="text" v-model="form.image" placeholder="enter image..">
          <p class="text-xl font-bold ">enter video: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="text" v-model="form.video" placeholder="enter video..">
          <p class="text-xl font-bold ">enter genre: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="text" v-model="form.genre" placeholder="enter genre..">
          <p class="text-xl font-bold ">enter metascore: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="number" v-model="form.meta" placeholder="enter meta..">
          <p class="text-xl font-bold ">enter userscore: </p>
          <input class="block my-3 border border-gray-300 w-full p-3 rounded-md " type="number" v-model="form.user" placeholder="enter user..">
          <button class="bg-green-400 px-20 mx-auto py-4 text-white block rounded-md font-bold text-2xl mt-10" @click="addMovie()">
            commit movie
          </button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
      baseURL: 'http://localhost:3001/movies',
      form: {
        title: '',
        date: '',
        desc: '',
        image: '',
        video: '',
        meta: 0,
        user: 0,
        genre: ''
      }
    };
  },
  methods: {
    async addMovie() {
      try {
        const res = await axios.post(this.baseURL, { title: this.form.title,
        date: this.form.date,
        desc: this.form.desc,
        image: this.form.image,
        video: this.form.video,
        meta: this.form.meta,
        user: this.form.user,
        genre: this.form.genre,
        });
        this.movies = [...this.movies, res.data];
      } catch (e) {
        console.error(e);
      }
    }
  },
  async created() {
    try {
      const res = await axios.get(this.baseURL);

      this.movies = res.data;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
