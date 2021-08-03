module.exports={
    title:'hzj\'s blog',
    descrition: '我的个人网站',
    head: [ //注入到当前页面的HTML<head>中的标签
        ['link',{rel:'icon',href:'/logo.jpg'}],
        ['link', { rel: 'manifest', href: '/photo.jpg' }],
        ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
    ],
    serviceWorker: true, // 是否开启 PWA
    base:'/',
    markdown:{
        lineNumbers: false //代码块显示行号
    },
    themeConfig:{
        nav:[
            {text:'前端基础',link:'/accumulate/'},
            {text:'前端框架',link:'/algorithm/'},
            {text:'资料库',link:'https://baidu.com'}
        ],
        sidebar: 'auto',
        sidebarDepth: 2,
    },
}