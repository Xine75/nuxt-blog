//  page view for creating or editing a post
<template>
  <div>
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedPost.author">
        Author Name
      </AppControlInput>
      <AppControlInput v-model="editedPost.title">
        Title
      </AppControlInput>
      <AppControlInput v-model="editedPost.thumbnail">
        Thumbnail Link
      </AppControlInput>
      <AppControlInput
        v-model="editedPost.content"
        control-type="textarea"
      >
        Content
      </AppControlInput>
      <AppControlInput
        v-model="editedPost.previewText"
        control-type="textarea"
      >
        Preview Text
      </AppControlInput>
      <AppButton type="submit">
        Save
      </AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
      >
        Cancel
      </AppButton>
    </form>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  //  creating props object which are handled by method onSave() below
  //  ternary slugs in values if the post is being edited or fills with empty strings if created
  data () {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: ''
          }
    }
  },
  //  emits on button click and notifies _postId/index.vue for edit or new-post/index.vue for add
  methods: {
    onSave () {
      // save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel () {
      // navigate back
      this.$router.push('/admin')
    }
  }
}
</script>
