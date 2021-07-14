import { newSpecPage } from '@stencil/core/testing';
import { MiyaokaPrefetch } from '../miyaoka-prefetch';

describe('miyaoka-prefetch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MiyaokaPrefetch],
      html: `<miyaoka-prefetch></miyaoka-prefetch>`,
    });
    expect(page.root).toEqualHtml(`
      <miyaoka-prefetch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </miyaoka-prefetch>
    `);
  });
});
