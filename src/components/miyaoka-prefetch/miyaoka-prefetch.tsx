import { Component, State } from '@stencil/core'

@Component({
  tag: 'miyaoka-prefetch',
  shadow: true,
})
export class MiyaokaPrefetch {
  @State() appendedLinks = {}
  componentDidLoad() {
    const linkList = Array.from(
      document.querySelectorAll('a[data-prefetch]')
    ) as HTMLAnchorElement[]

    linkList.forEach((link) => {
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
    if (this.appendedLinks[href]) return
    this.appendedLinks[href] = true
    const el = document.createElement('link')
    el.rel = 'prefetch'
    el.href = href
    document.head.appendChild(el)
  }
}
