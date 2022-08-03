<template>
  <div class="homepage">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section class="featured-posts">
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
        previewText="Knock knock stick"
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
  </div>
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
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
