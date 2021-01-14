import { newSpecPage } from '@stencil/core/testing';
import { MiyaokaEmbedTweet } from '../miyaoka-embed-tweet';

describe('miyaoka-embed-tweet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MiyaokaEmbedTweet],
      html: `<miyaoka-embed-tweet></miyaoka-embed-tweet>`,
    });
    expect(page.root).toEqualHtml(`
      <miyaoka-embed-tweet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </miyaoka-embed-tweet>
    `);
  });
});
