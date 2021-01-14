import { newE2EPage } from '@stencil/core/testing';

describe('miyaoka-img-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<miyaoka-img-loader></miyaoka-img-loader>');

    const element = await page.find('miyaoka-img-loader');
    expect(element).toHaveClass('hydrated');
  });
});
