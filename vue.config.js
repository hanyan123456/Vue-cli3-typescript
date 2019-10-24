/*
 * @Author: 寒嫣
 * @Date: 2019-10-22 15:48:55
 * @Description: file content
 */
module.exports = {
    // 反向代理
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://vuets-api.herokuapp.com/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    }
};