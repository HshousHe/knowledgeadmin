var gather = require('./gather');//集成
var nest = require('./nest');//集成
module.exports = {
    title: 'Shou社',
    description: 'Vue node rn flutter',
    themeConfig: {
        logo: "/logo1.jpg",
        nav: [
            { text: '集成', link: '/guide/' },
            { text: 'nest', link: '/nest/' },
            { text: 'java学习指南', link: '/java/',items:[
                 {text:"SpringCloud01",link: '/java/SpringCloud01'},
                 {text:"SpringCloud实用篇02",link: '/java/SpringCloud实用篇02'},
                 {text:"RabbitMQ",link: '/java/RabbitMQ'},
                 {text:"nacos集群搭建",link: '/java/nacos集群搭建'}
            ] },
            { text: '关于', link: '/social/' },
            { text: "github", link: "https://github.com/HshousHe/knowledgeadmin.git" }
        ],
        sidebar: {
            '/guide/': [
                ...gather
            ],
            '/nest/': [
                ...nest
            ],
            '/java/SpringCloud01':[
                {
                    title: "SpringCloud01",
                    collapsable: true,
                    path: "/java/SpringCloud01",
                },
            ],
            '/java/SpringCloud实用篇02':[
                {
                    title: "SpringCloud实用篇02",
                    collapsable: true,
                    path: "/java/SpringCloud实用篇02",
                },
            ],
            '/java/RabbitMQ':[
                {
                    title: "RabbitMQ",
                    collapsable: true,
                    path: "/java/RabbitMQ",
                },
            ],
            '/java/nacos集群搭建':[
                {
                    title: "nacos集群搭建",
                    collapsable: true,
                    path: "/java/nacos集群搭建",
                },
            ]
        }
    }
}