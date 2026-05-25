export function scrollToTop(behavior: ScrollBehavior = 'instant') {
  window.scrollTo({ top: 0, left: 0, behavior })
}

export function scrollToHash(hash: string, behavior: ScrollBehavior = 'smooth') {
  const id = hash.replace(/^#/, '')
  if (!id) {
    scrollToTop(behavior)
    return
  }
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' })
  })
}
