<template>
  <div class="home">
    <movies />
  </div>
</template>

<script>
// @ is an alias to /src
import movies from '@/components/movies.vue'

export default {
  name: 'HomeView',
  components: {
  movies
}
}
</script>
