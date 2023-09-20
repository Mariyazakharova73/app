import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // автоматически открывать браузер с приложением
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
