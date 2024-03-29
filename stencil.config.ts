import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'miyaoka-components',
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    // {
    //   type: 'dist-custom-elements-bundle',
    // },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      indexHtml: 'link.html',
    },
  ],
}
