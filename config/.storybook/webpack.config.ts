import webpack, { RuleSetRule } from "webpack"
import { BuildPaths } from '../build/types/config'
import path from "path"
import { buildCssLoaders } from "../build/loaders/buildCssLoaders"

export default ({config}: {config:webpack.Configuration}) =>{
  const paths: BuildPaths ={
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname,'..','..','src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts','.tsx')

    // eslint-disable-next-line no-param-reassign
    if (config.module) {
      config.module.rules = (config.module.rules || []).map((rule: false | "" | 0 | RuleSetRule | "..." | null | undefined) => {
        if (rule && typeof rule === 'object' && 'test' in rule && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
        }
    
        return rule;
      });
    
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }
    
  config.module?.rules?.push(buildCssLoaders(true))
  return config
}