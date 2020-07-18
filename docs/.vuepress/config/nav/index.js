//导航栏
module.exports = [
    { text: '主页', link: '/index.html', icon: 'reco-home' },
    { text: '其它', icon: 'reco-document',
      items: [{
          text: 'Projects🎈',
          items: [{
              text: 'My Project',
              link: '/other/project',
          }]
      }, {
          text: 'Common sites🎈',
          items: [{
              text: 'JavaScript',
              link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
          }, {
              text: 'ES6',
              link: 'https://es6.ruanyifeng.com/',
          }, {
              text: 'HTML',
              link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
          },  {
              text: 'LeetCode',
              link: 'https://leetcode-cn.com/',
          }, {
              text: 'Vue.js',
              link: 'https://cn.vuejs.org/v2/guide/',
          },  {
              text: '编程语言排行榜',
              link: 'https://www.tiobe.com/tiobe-index/',
          }]
      }, ]
    },
    { text: '时间线', link: '/timeline/', icon: 'reco-date' },
    { text: '关于我', link: '/about/',icon: 'reco-message'}
]