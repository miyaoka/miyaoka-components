import { newSpecPage } from '@stencil/core/testing';
import { MiyaokaLightbox } from '../miyaoka-lightbox';

describe('miyaoka-lightbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MiyaokaLightbox],
      html: `<miyaoka-lightbox></miyaoka-lightbox>`,
    });
    expect(page.root).toEqualHtml(`
      <miyaoka-lightbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </miyaoka-lightbox>
    `);
  });
});
