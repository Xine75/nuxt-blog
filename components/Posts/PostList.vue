<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg"
      title="Has tech gone too far?"
      previewText="It happened to me: I was asked to identify horses made of clouds in a Captcha"
    />
    <PostPreview
      id="2"
      thumbnail="https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg"
      title="My life on Slack"
      previewText="Why can't I hear the audio notification knock knock stick?"
    />
    <PostPreview
      id="3"
      thumbnail="https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg"
      title="Learning Nuxt"
      previewText="This guy talks fast"
    />
    <PostPreview
      id="4"
      thumbnail="https://thumbs.dreamstime.com/z/abstract-tech-background-d-illustration-quantum-computer-architecture-fantastic-night-city-abstract-tech-background-d-illustration-132139771.jpg"
      title="Learning Vue"
      previewText="Just like React, except not"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
