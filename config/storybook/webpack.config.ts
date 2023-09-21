import { DefinePlugin } from 'webpack'
import type webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config.module.rules.push(buildCssLoaders(true))
  config.plugins.push(new DefinePlugin({ __IS_DEV__: true }))
  return config
}
