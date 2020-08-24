const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
// при build оптимизирует(жжимает, удалает коментарии) 
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if(isProd) {
        config.minimizer = [
            new OptimizeCSSAssetsPlugin(),
            new TerserJSPlugin()
        ]
    }
    return config
}
//паттерны webpack => [...]
//[name](имя файла)[hash](праизвольный хеш)
const fileName = (ext) => {
  
    return isDev ? `${ext}/[name].${ext}` : `${ext}/[name].[hash].${ext}`
}

const cssLoaders = (opt) => {
    const loaders = [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
              hmr: isDev,
              reloadAll: true
          },
        },
        'css-loader',
      ];
      if(opt){
          loaders.push(opt)
      }
      return loaders
}


module.exports = {
    //карневая папка пойска
    context:path.resolve(__dirname,'src'),
    //базовый mode если не указан 
    mode: 'development',
    //входная точка
    entry: {
        main: ['@babel/polyfill','./index.js'],
    },
    //точка выхода
    output: {
        filename: fileName('js'),
        path: path.resolve(__dirname,'dist')
    },
    //если отсутствует разширение искать такое
    resolve:{
        extensions:['.js','.json','.png'],
        //создаем свои пути к файлу 
        alias: {
            '@' : path.resolve(__dirname,'src/js'),
            '@my':path.resolve(__dirname,'src/a')
        }
    },
    //оптимизирует чтобы при импорте и использовании
    // библиотеки в разных js файлах после зборки 
    //во всех этих файлах не нахадился тот же код например код jquery
    //тоесть выносить например код jquery в отдельный файл
    optimization: optimization(),
    //настройка dev Server
    devServer: {
        port: 4200,
        // hot: isDev,
        overlay:true
    },
    //карта кода(исходный код без переделок например без прогона по бабел)
    devtool: isDev ? 'source-map' : '',
    //плагины 
    plugins: [
        //для копирования чего то куда то
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/components'),
                    to: path.resolve(__dirname, 'dist/components'),
                }
            ]
        }),
        // .html каторый нужно использовать
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        // очишает конечный файл от старых данных если они обнавились
        new CleanWebpackPlugin(),
        // css сохраняется в отдельном файле .css
        new MiniCssExtractPlugin({
            filename: fileName('css'),
        })
    ],
    //базово webpack понимает .js и .json для остальных разширений нужны loader
    module: {
        rules:[
            {
                test:/\.css$/,
                use: cssLoaders()
            },
            {
                test:/\.less$/,
                use: cssLoaders('less-loader')
            },
            {
                test:/\.(s[ac]ss)$/,
                use: cssLoaders('sass-loader')
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    publicPath:'../',
                    name: '[path][name].[ext]',
                },
            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    publicPath:'../',
                    name: '[path][name].[ext]',
                }
               
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: {
                    loader:'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}
// if (isDev) {
//     module.exports.module.rules[0].use[0].options = { publicPath: './' };
// }