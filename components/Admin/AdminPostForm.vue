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
import AppControlInput from '~/components/UI/AppControlInput'
import AppButton from '~/components/UI/AppButton'

export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
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

<style scoped>

</style>
editedPost: this.post
? { ...this.post }
: {
author: '',
title: '',
thumbnail: '',
content: '',
previewText: ''
}
