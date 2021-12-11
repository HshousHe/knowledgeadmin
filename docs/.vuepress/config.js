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
            { text: '关于', link: '/social/' },
            { text: "github", link: "https://github.com/HshousHe/knowledgeadmin.git" }
        ],
        sidebar: {
            '/guide/': [
                ...gather
            ],
            '/nest/': [
                ...nest
            ]
        }
    }
}