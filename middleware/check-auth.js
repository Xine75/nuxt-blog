export default function (context) {
  console.log('[Middleware] InitAuth')
  if (process.client) {
    context.store.dispatch('initAuth')
  }
}
