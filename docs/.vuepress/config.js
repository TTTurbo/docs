const moment = require('moment');
moment.locale("zh-cn");
module.exports = {
    //base:"/docs/",
    title: "并肩于雪山之巅",
    description: "百香果的前端进阶",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: '百香果' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明，并肩于雪山之巅' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
      ],
    plugins:{
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
      
            // 其他的 Vssue 配置
            owner: 'TTTurbo',
            repo: 'docs',
            clientId: '4f6a58ff26549ae48c53',
            clientSecret: 'e4bc1e1bbc54ff087adce5bc0186572680a1fa5f',
            autoCreateIssue: true
          },
          '@vuepress/last-updated':
        {
          transformer: (timestamp) => {
            
            return moment(timestamp).format("LLLL")
          }
        },
        '@vuepress/pwa':{
            serviceWorker: true,
            updatePopup: {
              message: "发现新内容可用",
              buttonText: "刷新"
            },
            '@vuepress/back-to-top': true
        }

    },
    
    themeConfig: {     
        lastUpdated: '更新时间',    
        logo: '/assets/img/hero.png',
        //navbar: false,
        nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about/' },
        {
            text: 'Languages',
            items: [
                {text:'Group1',items:[
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/about/' },
                ]},
                {text:'Group2',items:[{ text: 'Home', link: '/' },
                { text: 'Guide', link: '/about/' },
                
                ]}
        
            ]
        },
        { text: 'External', link: 'https://google.com' },
        ],
        
        sidebar: {
            "/css/":[
              'c-aaa',
              'c-bbb',
              'c-ccc',
            ],
            "/javascript/":[
              'j-aaa',
              'j-bbb',
              'j-ccc',
            ],   
        }
    }
}