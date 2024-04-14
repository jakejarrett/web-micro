import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'store',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['product', 'checkout', 'state'],
  additionalShared: [
    {
      libraryName: '@reduxjs/toolkit',
      sharedConfig: {
        singleton: true,
        requiredVersion: '2.2.3',
      },
    },
    {
      libraryName: 'react-redux',
      sharedConfig: {
        singleton: true,
        requiredVersion: '9.1.0',
      },
    },
    {
      libraryName: 'redux',
      sharedConfig: {
        singleton: true,
        requiredVersion: '5.0.1',
      },
    },
    {
      libraryName: 'redux-saga',
      sharedConfig: {
        singleton: true,
        requiredVersion: '1.3.0',
      },
    },
    {
      libraryName: 'react-error-boundary',
      sharedConfig: {
        singleton: true,
        requiredVersion: '4.0.13',
      },
    },
  ],
};

export default config;
