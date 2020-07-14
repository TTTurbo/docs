const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
const navConf = require("./config/navConf");
const sidebarConf = require("./config/sidebarConf");

module.exports = {
    //base:"/docs/",
    title: "并肩于雪山之巅",
    description: "百香果的前端进阶",
    head: headConf,
    plugins: pluginsConf,
    
    themeConfig: {     
        lastUpdated: '更新时间',    
        logo: '/assets/img/hero.png',
        //navbar: false,
        nav: navConf,
        
        sidebar: sidebarConf
    }
}