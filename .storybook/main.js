const path = require( 'path' );
const custom = require( '../webpack.config.js' );


module.exports = {
  typescript: {
    reactDocgen: 'none',
  },
  stories: [ '../src/**/*.stories.tsx', '../src/**/Story.tsx' ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
    'storybook-css-modules-preset',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async ( config, { configType } ) => {
    //config.plugins.push( new webpack.HotModuleReplacementPlugin() );

    config.module.rules.push( {
      test: /\.stories\.tsx$/,
      loaders: [
        {
          loader: require.resolve( '@storybook/source-loader' ),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    } );
    config.module.rules.push( {
      test: /\.tsx?$/,
      include: path.resolve( __dirname, "src" ),
      use: [
        require.resolve( "babel-loader" )
      ],
    } );
    // 2b. Run `source-loader` on story files to show their source code
    // automatically in `DocsPage` or the `Source` doc block.
    config.module.rules.push( {
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve( '@storybook/source-loader' ),
      exclude: [ /node_modules/ ],
      enforce: 'pre',
    } );


    return {
          ...config,
          resolve: custom.resolve,
          module: { 
            ...config.module, 
            rules: custom.module.rules 
          },
        };
      },
};