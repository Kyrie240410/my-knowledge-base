# 前端技术

## 知识图谱

```
前端技术
├── HTML/CSS
│   ├── 语义化标签
│   ├── 布局方案
│   │   ├── Flexbox
│   │   ├── Grid
│   │   └── 响应式设计
│   └── CSS 预处理器
│       ├── Sass
│       └── Less
├── JavaScript
│   ├── 基础语法
│   ├── ES6+
│   ├── 异步编程
│   │   ├── Promise
│   │   ├── async/await
│   │   └── Event Loop
│   └── 性能优化
├── 框架
│   ├── Vue
│   │   ├── Vue 3 Composition API
│   │   ├── Vue Router
│   │   └── Pinia
│   ├── React
│   │   ├── Hooks
│   │   ├── Redux
│   │   └── Next.js
│   └── 其他
│       ├── Svelte
│       └── Angular
├── 工程化
│   ├── 构建工具
│   │   ├── Vite
│   │   ├── Webpack
│   │   └── Rollup
│   ├── 代码规范
│   │   ├── ESLint
│   │   └── Prettier
│   └── 测试
│       ├── Jest
│       └── Cypress
└── 性能优化
    ├── 加载优化
    ├── 渲染优化
    └── 缓存策略
```

## 学习笔记

### Vue 3 组合式 API

```vue
<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 计算属性
const doubleCount = computed(() => count.value * 2)

// 方法
function increment() {
  count.value++
}

// 生命周期
onMounted(() => {
  console.log('组件已挂载')
})
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <button @click="increment">+1</button>
  </div>
</template>
```

**关键点**：
- `ref` 创建响应式数据
- `computed` 创建计算属性
- `onMounted` 等生命周期钩子
- `<script setup>` 语法糖

### JavaScript 异步编程

```javascript
// Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据')
    }, 1000)
  })
}

// async/await
async function getData() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

// Promise.all
async function getMultipleData() {
  const [data1, data2] = await Promise.all([
    fetchData1(),
    fetchData2()
  ])
}
```

## 常见问题

### Q: Vue 2 和 Vue 3 的区别？

**A**: 
1. **响应式原理**：Vue 2 使用 Object.defineProperty，Vue 3 使用 Proxy
2. **组合式 API**：Vue 3 引入 Composition API，更好的逻辑复用
3. **性能**：Vue 3 性能提升约 1.3~2 倍
4. **TypeScript**：Vue 3 对 TS 支持更好
5. **新特性**：Fragment、Teleport、Suspense 等

### Q: 如何优化首屏加载速度？

**A**:
1. 代码分割（Code Splitting）
2. 懒加载（Lazy Loading）
3. 资源压缩（Gzip/Brotli）
4. CDN 加速
5. 缓存策略
6. 预加载关键资源

## 学习资源

- [Vue.js 官方文档](https://cn.vuejs.org/)
- [React 官方文档](https://zh-hans.react.dev/)
- [MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [前端面试之道](https://yuchengkai.cn/docs/frontend/)
