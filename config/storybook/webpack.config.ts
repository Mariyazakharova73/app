import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
  }
  config?.resolve?.modules?.push(paths.src)
  config?.resolve?.extensions?.push('.ts', '.tsx')
  // @ts-ignore
  config?.module?.rules = config?.module?.rules?.map(
    // @ts-ignore
    (rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }
      return rule
    }
  )
  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config?.module?.rules?.push(buildCssLoaders(true))
  return config
}