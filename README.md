# 我的知识库

个人知识管理与笔记系统，基于 VitePress 构建。

## 在线访问

🔗 **https://你的用户名.github.io/my-knowledge-base**

## 本地开发

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run docs:dev
```

访问 http://localhost:5173/my-knowledge-base/

### 构建

```bash
npm run docs:build
```

构建结果在 `docs/.vitepress/dist/` 目录。

## 项目结构

```
.
├── docs/                       # 文档目录
│   ├── .vitepress/            # VitePress 配置
│   │   └── config.mjs         # 站点配置
│   ├── work/                  # 工作笔记
│   │   ├── projects/          # 项目文档
│   │   ├── meetings/          # 会议记录
│   │   └── tech/              # 技术方案
│   ├── study/                 # 学习笔记
│   │   ├── frontend/          # 前端技术
│   │   ├── backend/           # 后端技术
│   │   └── books/             # 读书笔记
│   ├── notes/                 # 随手记
│   │   ├── ideas/             # 灵感收集
│   │   ├── issues/            # 问题记录
│   │   └── tools/             # 工具推荐
│   ├── about.md               # 关于页面
│   └── index.md               # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 部署配置
├── package.json               # 项目配置
└── README.md                  # 项目说明
```

## 写作工作流

### 方式一：直接在 GitHub 上编辑

1. 打开 GitHub 仓库
2. 找到要编辑的文件
3. 点击编辑按钮（铅笔图标）
4. 修改内容并提交

### 方式二：本地编辑后推送

1. 克隆仓库
   ```bash
   git clone https://github.com/你的用户名/my-knowledge-base.git
   ```

2. 创建或编辑 Markdown 文件

3. 提交更改
   ```bash
   git add .
   git commit -m "更新笔记"
   git push origin main
   ```

4. GitHub Actions 会自动构建并部署

### 方式三：语雀写作后导出

1. 在语雀中写作
2. 使用 yuque-exporter 导出
   ```bash
   npx yuque-exporter --token=你的Token
   ```
3. 将导出的 Markdown 文件复制到对应目录
4. 提交到 GitHub

## 功能特性

- ✅ **全文搜索** - 基于本地搜索，快速定位内容
- ✅ **响应式设计** - 适配手机、平板、电脑
- ✅ **暗黑模式** - 支持亮色/暗色主题
- ✅ **自动部署** - 推送后自动构建部署
- ✅ **Markdown 支持** - 原生 Markdown 语法
- ✅ **代码高亮** - 支持多种编程语言
- ✅ **目录导航** - 自动生成侧边栏导航

## 自定义配置

编辑 `docs/.vitepress/config.mjs` 文件：

```javascript
export default defineConfig({
  title: '你的知识库名称',
  description: '你的描述',
  base: '/仓库名/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // 添加更多导航项
    ],
    
    sidebar: {
      // 配置侧边栏
    }
  }
})
```

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [GitHub Pages](https://pages.github.com/) - 免费托管
- [GitHub Actions](https://github.com/features/actions) - 自动部署

## 参考文档

- [VitePress 文档](https://vitepress.dev/)
- [Markdown 语法](https://markdown.com.cn/)
- [语雀导出工具](https://github.com/yuque-exporter)

## License

MIT
