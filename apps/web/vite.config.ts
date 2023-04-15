import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { UserConfig } from 'vite';

function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir);
}

export default (): UserConfig => {
  return {
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: `${pathResolve('./src')}/`,
        },
      ],
    },
    plugins: [react()],
    server: {
      host: true,
    },
  };
};
