import { Component } from '@stencil/core'

@Component({
  tag: 'miyaoka-prefetch',
  shadow: true,
})
export class MiyaokaPrefetch {
  componentDidLoad() {
    const host = location.host
    const linkList = Array.from(
      document.querySelectorAll('a[data-prefetch]')
    ) as HTMLAnchorElement[]

    const hrefMap = {}
    const sameHostLinks = linkList.filter(({ href }) => {
      const url = new URL(href)
      if (url.host !== host || hrefMap[href]) return false
      hrefMap[href] = true
      return true
    })

    sameHostLinks.forEach((link) => {
      const observer = new IntersectionObserver((entryList) => {
        entryList.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(link)
          this.addPrefetch(link.href)
        })
      })
      observer.observe(link)
    })
  }
  addPrefetch(href: string) {
    const el = document.createElement('link')
    el.rel = 'prefetch'
    el.href = href
    document.head.appendChild(el)
  }
}
