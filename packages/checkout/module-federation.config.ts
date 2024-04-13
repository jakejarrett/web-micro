import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'checkout',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  additionalShared: [
    {
      libraryName: "@reduxjs/toolkit",
      sharedConfig: {
        singleton: true,
        requiredVersion: "2.2.3",
      }
    },
    {
      libraryName: "react-redux",
      sharedConfig: {
        singleton: true,
        requiredVersion: "9.1.0",
      }
    },
    {
      libraryName: "redux",
      sharedConfig: {
        singleton: true,
        requiredVersion: "5.0.1",
      }
    },
    {
      libraryName: "redux-saga",
      sharedConfig: {
        singleton: true,
        requiredVersion: "1.3.0",
      }
    },
    {
      libraryName: "react-error-boundary",
      sharedConfig: {
        singleton: true,
        requiredVersion: "4.0.13",
      }
    },
  ],
};

export default config;
