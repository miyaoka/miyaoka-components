import { Component, Host, h, Prop, Element } from '@stencil/core'
import { loadScript } from '../../utils/loadScripts'

const twReg = new RegExp('https://twitter.com/[^/]+/status/(\\d+)')
const twWidgetSrc = 'https://platform.twitter.com/widgets.js'

@Component({
  tag: 'miyaoka-embed-tweet',
  styleUrl: 'miyaoka-embed-tweet.css',
  shadow: false,
})
export class MiyaokaEmbedTweet {
  @Prop() src: string = ''
  @Element() el: HTMLElement

  connectedCallback() {
    const matched = this.src.match(twReg)
    if (!matched) return
    const [, tweetId] = matched

    const observer = new IntersectionObserver(
      (entryList) => {
        entryList.forEach((entry) => {
          if (!entry.isIntersecting) return
          observer.unobserve(this.el)
          this.embedTweet(tweetId)
        })
      },
      { rootMargin: '200%' }
    )
    observer.observe(this.el)
  }
  async embedTweet(tweetId: string) {
    const win = window as any

    if (!win.twttr?.ready) {
      await loadScript({
        src: twWidgetSrc,
        id: 'twitter-widgets',
      })
    }

    await win.twttr?.widgets?.createTweet(tweetId, this.el, {
      align: 'center',
    })

    this.el.children[0].remove()
    this.el.classList.add('embedTweetLoaded')
  }

  render() {
    return (
      <Host>
        <p>
          <a href={this.src} target="_blank" rel="noopener noreferrer">
            {this.src}
          </a>
        </p>
      </Host>
    )
  }
}
