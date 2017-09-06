/* eslint-disable no-console */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

const port = process.env.PORT || 5000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  noInfo: false,
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Example app listening at http://0.0.0.0:%s', port);
});
