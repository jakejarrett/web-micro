import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'checkout',
  exposes: {
    './Module': 'packages/checkout/src/remote-entry.ts',
  },
};

export default config;
