import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederationForSSR } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const defaultConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact({ ssr: true }),
  withModuleFederationForSSR(defaultConfig)
);
