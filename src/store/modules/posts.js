export default {
  state: {
      posts: []
  },
  getters: {
    allPosts(state) {
        return state.posts
    },
  },
  mutations: {
    updatePosts(state, posts) {
        state.posts = posts
    },
  },
  actions: {
    async fetchPosts(acceptedData) {
        const res = await fetch(
            'http://localhost:3001/movies'
        )
        const posts = await res.json()
        acceptedData.commit('updatePosts', posts)
    }
  },
  modules: {
  }
}
