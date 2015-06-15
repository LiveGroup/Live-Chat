/**
 * 项目配置文件
 */

var path = require("path");

var config = {
    // debug 为 true 时，用于本地调试
    debug: true,

    get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

    // 项目基本信息配置
    name: "Live-Chat",
    description: "Live chat",
    keywords: "nodejs, node, express, connect, socket.io",

    site_headers: [
        '<meta name="author" content="yuanzm" />'
    ],
    site_logo: "/public/images/site-logo.jpg",
    site_icon: "/public/images/site-logo.jpg",

    // 话题列表显示的话题数量
    list_topic_count: 20,
    // 评论页面单页的评论量
    list_comment_count: 20,
    // 一页通知的数量
    list_notification_count: 20,
    
    host: "localhost",

    // mongodb配置
    db: "mongodb://127.0.0.1/Live-Chat-SAD",
    
    // redis 配置，默认是本地
    redis_host: 'redis.duapp.com',
    redis_port: 80,
    redis_db: 'PoKxdfdiWxeQGBNuaLCD',
    redis_username: '2b055dc911d4248e6693da81fe6a17ff',
    redis_password: '7d3eec7ab871bf5056a682c5eb4ff956',
    redis_chat_db: 1,

    session_secret: 'yuanzm', // 务必修改
    auth_cookie_name: 'livechat',

    port: 3000,

    create_post_per_day: 1000, // 每个用户一天可以发的主题数
    create_reply_per_day: 1000, // 每个用户一天可以发的评论数
    visit_per_day: 1000, // 每个 ip 每天能访问的次数

    // 7牛的access信息，用于文件上传
    qn_access: {
        accessKey: 'nx36IiBDak_OnvaUMqyl2X3jxku_vANNL9N_ymGc',
        secretKey: '7iWmhVopCL0THV8jXoGC1XLtQe6KtSM5o2BTGK-K',
        bucket: 'live-chat',
        domain: 'http://live-chat.qiniudn.com'
    },

    // 文件上传配置
    // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
    upload: {
        path: path.join(__dirname, 'public/upload/'),
        url: '/public/upload/'
    },

    ACCESS_KEY: 'nx36IiBDak_OnvaUMqyl2X3jxku_vANNL9N_ymGc',
    SECRET_KEY: '7iWmhVopCL0THV8jXoGC1XLtQe6KtSM5o2BTGK-K',
    Uptoken_Url: '/uptoken',
    Bucket_Name: 'live-chat',
    Domain: 'http://7te9k1.com1.z0.glb.clouddn.com/',


    group_chat_id: 'yuan_zi_min'
}

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
