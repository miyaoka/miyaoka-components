import { newSpecPage } from '@stencil/core/testing';
import { MiyaokaImgLoader } from '../miyaoka-img-loader';

describe('miyaoka-img-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MiyaokaImgLoader],
      html: `<miyaoka-img-loader></miyaoka-img-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <miyaoka-img-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </miyaoka-img-loader>
    `);
  });
});
