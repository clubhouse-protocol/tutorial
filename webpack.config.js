const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const highlight = require('highlight.js');

const config = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(md)$/,
      use: [
        'html-loader',
        {
          loader: 'markdown-loader',
          options: {
            highlight: (code, lang) => {
              if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                return `<pre class="hljs">${code}</pre>`;
              }
              const html = highlight.highlight(lang, code).value;
              return `<span class="hljs">${html}</span>`;
            },
          },
        },
      ],
    }],
  },
  plugins: [
    new HtmlPlugin(),
    new MonacoWebpackPlugin({
      // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
      languages: ['javascript']
    })
  ],
};

module.exports = config;