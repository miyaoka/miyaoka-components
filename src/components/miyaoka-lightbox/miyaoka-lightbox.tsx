import { Component, Host, h, Prop, State } from '@stencil/core'

@Component({
  tag: 'miyaoka-lightbox',
  styleUrl: 'miyaoka-lightbox.css',
  shadow: true,
})
export class MiyaokaLightbox {
  @Prop() src: string
  @State() visible: boolean = false

  render() {
    return (
      <Host>
        <div onClick={() => (this.visible = true)}>
          {this.visible && (
            <div
              onClick={(e) => {
                e.stopPropagation()
                this.visible = false
              }}
              class="container"
              style={{
                'background-image': `url(${this.src})`,
              }}
            ></div>
          )}
          <slot></slot>
        </div>
      </Host>
    )
  }
}
