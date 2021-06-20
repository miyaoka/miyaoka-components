import { newE2EPage } from '@stencil/core/testing';

describe('miyaoka-lightbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<miyaoka-lightbox></miyaoka-lightbox>');

    const element = await page.find('miyaoka-lightbox');
    expect(element).toHaveClass('hydrated');
  });
});
