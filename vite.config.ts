import react from '@vitejs/plugin-react';
import type { PluginOption, UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';
import {readFile} from 'node:fs/promises'
import {resolve} from 'node:path';

const hillaFormVersion = JSON.parse(await readFile(resolve('./frontend/hilla/packages/ts/form/package.json'), { encoding: 'utf-8' })).version;

const customConfig: UserConfigFn = (env) => ({
  // Here you can add custom Vite parameters
  // https://vitejs.dev/config/
  plugins: [
    react({
      include: '**/*.tsx',
    }),
  ],
  define: {
    '__VERSION__': `'${hillaFormVersion}'`,
  },
  resolve: {
    alias: {
      '@hilla/form': resolve('./frontend/hilla/packages/ts/form/src/index.ts'),
      '@hilla/react-form': resolve('./frontend/hilla/packages/ts/react-form/src/index.ts'),
    },
  },
});

export default overrideVaadinConfig(customConfig);
