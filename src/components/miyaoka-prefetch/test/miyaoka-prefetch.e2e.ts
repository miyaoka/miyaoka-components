import { newE2EPage } from '@stencil/core/testing';

describe('miyaoka-prefetch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<miyaoka-prefetch></miyaoka-prefetch>');

    const element = await page.find('miyaoka-prefetch');
    expect(element).toHaveClass('hydrated');
  });
});
