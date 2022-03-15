<template>
    <div>
        {{ movies[this.$route.params.id - 1].title }}
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
