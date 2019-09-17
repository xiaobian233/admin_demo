module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'localhost:8000', // 设置你调用的接口域名和端口号
                changeOrigin: true,     // 跨域
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        // host: "192.168.1.7",
        port: 8000,
    },
}