import { newE2EPage } from '@stencil/core/testing';

describe('miyaoka-embed-tweet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<miyaoka-embed-tweet></miyaoka-embed-tweet>');

    const element = await page.find('miyaoka-embed-tweet');
    expect(element).toHaveClass('hydrated');
  });
});
