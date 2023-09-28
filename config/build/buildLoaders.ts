import type webpack from 'webpack'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { type BuildOptions } from './types/config'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = buildCssLoaders(options.isDev)
  const babelLoader = buildBabelLoader(options)

  return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader]
}
