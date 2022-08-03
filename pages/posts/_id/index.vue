<template>
  <div class="single-page-post">
    <section class="post">
      <div class="post-details">
        <h1 class="post-title">Title of Post</h1>
        <div class="post-detail">Last updated on: </div>
        <div class="post-detail">Written by: </div>
        <p class="post-content">Content of the post</p>
        <p class="post-feedback">Let me know what you think about the post, send a message to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a></p>

      </div>
    </section>
  </div>
</template>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}

</style>
