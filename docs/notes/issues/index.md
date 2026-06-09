# 问题记录

## 记录原则

::: tip 问题记录
记录问题不是为了记住问题，而是为了记住解决方案。
:::

## 问题列表

### 开发问题

#### Q: VitePress 构建失败，提示找不到模块

**环境**：
- Node.js: v18.17.0
- VitePress: v1.0.0

**错误信息**：
```
Error: Cannot find module 'vitepress'
```

**解决方案**：
1. 确认安装依赖
   ```bash
   npm install
   ```

2. 如果仍报错，尝试清除缓存
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm install
   ```

3. 检查 Node.js 版本
   ```bash
   node -v  # 需要 v16+
   ```

**预防措施**：
- 使用 `.nvmrc` 锁定 Node.js 版本
- 提交 `package-lock.json` 到版本控制

---

#### Q: GitHub Pages 部署后样式丢失

**现象**：
页面可以访问，但 CSS 和 JS 加载失败。

**原因**：
路径配置错误，GitHub Pages 项目站点需要配置 `base`。

**解决方案**：
在 `.vitepress/config.mjs` 中配置：
```javascript
export default defineConfig({
  base: '/my-knowledge-base/',  // 仓库名
  // ...
})
```

---

### 工具问题

#### Q: 语雀导出 Markdown 后图片链接失效

**现象**：
导出后图片显示为语雀的临时链接，一段时间后失效。

**解决方案**：
1. 使用 `yuque-exporter` 工具导出
   ```bash
   npx yuque-exporter --token=你的Token
   ```
   该工具会自动下载图片到本地。

2. 手动下载图片
   - 在语雀中右键图片，选择"复制图片地址"
   - 下载到本地 `images/` 目录
   - 修改 Markdown 中的图片路径

3. 使用图床
   - 上传到 GitHub 仓库
   - 或使用免费图床（如 SM.MS）

---

## 问题记录模板

```markdown
#### Q: 问题标题

**环境**：
- 

**现象/错误信息**：
```
```

**解决方案**：
1. 
2. 

**预防措施**：
- 

**参考链接**：
- 
```
