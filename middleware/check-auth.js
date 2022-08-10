export default function (context) {
  context.store.dispatch('initAuth', context.req)
}
// more changes for stashing example
