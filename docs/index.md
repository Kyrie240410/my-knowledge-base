---
layout: home

hero:
  name: 我的知识库
  text: 第二大脑
  tagline: 随时随地记录、整理、回顾你的知识与灵感
  image:
    src: /logo.svg
    alt: 知识库
  actions:
    - theme: brand
      text: 开始浏览
      link: /work/
    - theme: alt
      text: GitHub
      link: https://github.com/你的用户名/my-knowledge-base

features:
  - icon: 📚
    title: 工作笔记
    details: 项目文档、会议记录、技术方案，工作相关的知识集中管理
    link: /work/
  
  - icon: 🎓
    title: 学习笔记
    details: 技术学习、读书笔记、课程笔记，构建个人学习体系
    link: /study/
  
  - icon: 💡
    title: 随手记
    details: 灵感收集、问题记录、工具推荐，捕捉每一个有价值的想法
    link: /notes/
  
  - icon: 🔍
    title: 全文搜索
    details: 基于本地搜索，快速定位需要的知识点
    link: '#'
  
  - icon: 📱
    title: 随时随地
    details: 响应式设计，支持手机、平板、电脑访问
    link: '#'
  
  - icon: 🆓
    title: 完全免费
    details: 基于开源工具构建，零成本部署和维护
    link: '#'
---

## 快速开始

### 写作流程

```mermaid
graph LR
    A[语雀写作] --> B[导出 Markdown]
    B --> C[放入 docs 目录]
    C --> D[Git 提交]
    D --> E[自动部署]
    E --> F[在线访问]
```

### 目录结构

```
docs/
├── .vitepress/          # 配置文件
│   └── config.mjs       # 站点配置
├── work/                # 工作笔记
│   ├── projects/        # 项目文档
│   ├── meetings/        # 会议记录
│   └── tech/            # 技术方案
├── study/               # 学习笔记
│   ├── frontend/        # 前端技术
│   ├── backend/         # 后端技术
│   └── books/           # 读书笔记
├── notes/               # 随手记
│   ├── ideas/           # 灵感收集
│   ├── issues/          # 问题记录
│   └── tools/           # 工具推荐
├── about.md             # 关于页面
└── index.md             # 首页
```

### 常用命令

```bash
# 本地开发
npm run docs:dev

# 构建
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 特点

- **📝 Markdown 原生支持**：使用 Markdown 写作，专注内容
- **🔍 全文搜索**：内置本地搜索，快速找到需要的内容
- **📱 响应式设计**：完美适配手机、平板、电脑
- **🌙 暗黑模式**：支持亮色/暗色主题切换
- **⚡ 极速加载**：静态网站，CDN 加速
- **🆓 完全免费**：零成本搭建和维护

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [GitHub Pages](https://pages.github.com/) - 免费托管
- [语雀](https://www.yuque.com/) - 写作平台（可选）
