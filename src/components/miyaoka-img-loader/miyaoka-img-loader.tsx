import { Component, Host, h, Prop, State } from '@stencil/core'

@Component({
  tag: 'miyaoka-img-loader',
  styleUrl: 'miyaoka-img-loader.css',
  shadow: true,
})
export class MiyaokaImgLoader {
  @Prop() src: string
  @Prop() alt: string = 'image'
  @Prop() loading: 'lazy' | 'auto' | 'eager' = 'lazy'
  @Prop() scale: number = 0.5
  @Prop() rotate: number = 90
  @Prop() opacity: number = 0
  @Prop() duration: number = 200
  @Prop() delay: number = 50

  @State() img?: HTMLImageElement
  @State() isLoaded = false

  componentDidLoad() {
    if (!this.img) return

    if (this.img.complete) {
      requestAnimationFrame(() => this.resetTransform())
      return
    }
    this.img.onload = () => {
      this.resetTransform()
    }
  }

  resetTransform() {
    this.isLoaded = true
  }

  render() {
    const style = this.isLoaded
      ? {}
      : {
          transform: `scale(${this.scale}) rotate(${this.rotate}deg)`,
          opacity: `${this.opacity}`,
        }
    return (
      <Host>
        <img
          ref={(el) => {
            this.img = el as HTMLImageElement
          }}
          src={this.src}
          alt={this.alt}
          loading={this.loading}
          style={{
            ...style,
            transitionDuration: `${this.duration}ms`,
            transitionDelay: `${this.delay}ms`,
          }}
        ></img>
      </Host>
    )
  }
}
