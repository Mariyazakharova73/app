import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolves } from './buildResolves'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/'
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolves(options),
    // видеть, где в коде произошла ошибка
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
