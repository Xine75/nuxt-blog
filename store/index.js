import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts',
              [
                {
                  id: '1',
                  title: 'First Post',
                  previewText: 'This is my first blog post',
                  thumbnail: 'https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg'
                },
                {
                  id: '2',
                  title: 'Second Post',
                  previewText: 'Let\'s get ready to ruuuumbllle',
                  thumbnail: 'https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg'
                }
              ])
            resolve()
          }, 1000)
        })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
