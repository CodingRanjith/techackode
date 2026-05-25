import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash, scrollToTop } from '@/lib/scroll'

/** Scrolls to top on route change; scrolls to section when the URL includes a hash. */
export function ScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      scrollToHash(hash)
      return
    }
    scrollToTop()
  }, [pathname, hash])

  return null
}
