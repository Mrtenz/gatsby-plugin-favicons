import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import { CreateWebpackConfigArgs } from 'gatsby';
import { Options, OptionsStruct } from './options';
import { is } from 'superstruct';

export const onCreateWebpackConfig = ({ actions, reporter }: CreateWebpackConfigArgs, options: Options) => {
  if (!is(options, OptionsStruct)) {
    return reporter.panic('Invalid or missing options, please refer to the documentation');
  }

  actions.setWebpackConfig({
    plugins: [
      new FaviconsWebpackPlugin({
        inject: false,
        prefix: 'favicons/',
        ...options
      })
    ]
  });
};
