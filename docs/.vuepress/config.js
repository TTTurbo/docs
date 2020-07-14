module.exports = {
    title: "并肩于雪山之巅",
    description: "百香果的前端进阶",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: '百香果' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍，vuepress 说明，并肩于雪山之巅' }],
      ],
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