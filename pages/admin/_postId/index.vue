<template>
  <div class="admin-post-page">
  <section class="update-form">
  <AdminPostForm :post="loadedPost" />
  </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Christine',
        title: 'My New Lipstick Obsession',
        content: 'I only want to wear bright colors and gloss',
        thumbnailLink: 'https://www.seekpng.com/png/full/474-4740034_pop-art-lips.png'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form{
    width: 500px;
  }
}

</style>
