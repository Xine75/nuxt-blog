<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
  components: {
    PostList
  },
  asyncData (context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: "First Post",
            previewText: "This is my first blog post",
            thumbnail: "https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg"
          },
          {
            id: '2',
            title: "Second Post",
            previewText: "Let's get ready to ruuuumbllle",
            thumbnail: "https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg"
          }
        ]
      })
    }, 1500)
  },
}
</script>

<style scoped>
.posts-page{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
