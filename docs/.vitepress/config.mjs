import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的知识库',
  description: '个人知识管理与笔记系统',
  
  // 部署配置 - GitHub Pages
  base: '/my-knowledge-base/',
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '工作笔记', link: '/work/' },
      { text: '学习笔记', link: '/study/' },
      { text: '随手记', link: '/notes/' },
      { text: '关于', link: '/about' }
    ],

    // 侧边栏
    sidebar: {
      '/work/': [
        {
          text: '工作笔记',
          items: [
            { text: '项目文档', link: '/work/projects/' },
            { text: '会议记录', link: '/work/meetings/' },
            { text: '技术方案', link: '/work/tech/' }
          ]
        }
      ],
      '/study/': [
        {
          text: '学习笔记',
          items: [
            { text: '前端技术', link: '/study/frontend/' },
            { text: '后端技术', link: '/study/backend/' },
            { text: '读书笔记', link: '/study/books/' }
          ]
        }
      ],
      '/notes/': [
        {
          text: '随手记',
          items: [
            { text: '灵感收集', link: '/notes/ideas/' },
            { text: '问题记录', link: '/notes/issues/' },
            { text: '工具推荐', link: '/notes/tools/' }
          ]
        }
      ]
    },

    // 搜索配置
    search: {
      provider: 'local'
    },

    // 页脚
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ],

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/你的用户名/my-knowledge-base/edit/main/docs/:path'
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 可以在这里添加自定义 markdown 插件
    }
  },

  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ]
})
