import path from 'path'
import CracoLessPlugin from 'craco-less'
const resolve = pathname => path.resolve(__dirname, pathname)


export default {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src")
    }
  }
}
