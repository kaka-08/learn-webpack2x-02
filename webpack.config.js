var path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
  	rules:[
      {
      	 test: /\.css$/,  //载入css
         use: [
           'style-loader',
           'css-loader'
          ]
      },
       {
         test: /\.(png|svg|jpg|gif)$/, //载入图像
         use: [
           'file-loader'
         ]
       },
       {
        test: /\.(woff|woff2|eot|ttf|otf)$/, //加载字体
        use: [
           'file-loader'
         ]
       }
  	]
  }
};