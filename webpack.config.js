const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {

//   entry: { 
//     app: `${SRC_DIR}/client.jsx`, 
//     appserver: `${SRC_DIR}/server.jsx`
//   },
//   output: {
//     filename: '[name].js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['react', 'env']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         include: SRC_DIR,
//         use: ['css-loader']
//       }
//     ]
//   }
// };

const common = {
  context: SRC_DIR,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env']
          }
        }
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: ['css-loader']
      }
    ]
  }
}

const client = {
  entry: `${SRC_DIR}/client.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'app.js'
  }
};

const server = {
  entry: `${SRC_DIR}/server.jsx`,
  target: 'node',
  output: {
    path: DIST_DIR,
    filename: 'appserver.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];
//get rid of style-loader
//app,js for client bundle
//app-server.js for server bundle