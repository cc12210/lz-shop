module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.106.240.143',
                changeOrigin: true
            }
        }
    },
    // pages: {
    //     index: {
    //         //webpack编译时，编译entry的js文件，并且读取template的html文件。
    //         // 合并在一起，输出为filename的文件

    //         // page 的入口
    //         entry: 'src/index/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: '',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']//对应页面需要引入的js
    //     },
    //     // index: 'src/index/main.js',


    //     homePage: {
    //         entry: 'src/homePage/main.js',
    //         template: 'public/homePage.html',
    //         filename: 'homePage.html',
    //         title: '首页',
    //         chunks: ['chunk-vendors', 'chunk-common', 'homePage']
    //     },
    //     // setting: 'src/setting/main.js',



    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    // }
}