# 读书笔记

## 阅读清单

### 技术类

#### 《代码整洁之道》

**作者**：Robert C. Martin

**核心观点**：
- 代码是写给人看的，顺便给机器执行
- 命名要清晰、有意义
- 函数要短小、只做一件事
- 注释要说明"为什么"，而非"做什么"

**实践要点**：
1. 命名规范
   ```javascript
   // Bad
   const d = new Date()
   
   // Good
   const currentDate = new Date()
   ```

2. 函数设计
   ```javascript
   // Bad - 一个函数做太多事
   function processUser(user) {
     validate(user)
     save(user)
     sendEmail(user)
     updateLog(user)
   }
   
   // Good - 拆分成小函数
   function validateUser(user) { }
   function saveUser(user) { }
   function notifyUser(user) { }
   ```

3. 错误处理
   ```javascript
   // Bad
   try {
     // 一堆代码
   } catch (e) {
     console.log(e)
   }
   
   // Good
   try {
     const result = riskyOperation()
     return result
   } catch (error) {
     logger.error('Operation failed', error)
     throw new BusinessError('操作失败', error)
   }
   ```

**个人感悟**：
> 写代码和写文章一样，清晰表达比炫技更重要。好的代码应该像好的散文一样，读起来流畅自然。

---

### 非技术类

#### 《如何阅读一本书》

**作者**：莫提默·J. 艾德勒

**核心方法**：
1. **基础阅读**：理解字面意思
2. **检视阅读**：快速把握全书结构
3. **分析阅读**：深入理解内容
4. **主题阅读**：跨书比较研究

**实践要点**：
- 先看书评和目录，判断值不值得读
- 带着问题阅读
- 做笔记、画思维导图
- 定期回顾

---

## 读书笔记模板

```markdown
# 书名

**作者**：
**阅读时间**：YYYY-MM-DD ~ YYYY-MM-DD
**推荐指数**：⭐⭐⭐⭐⭐

## 核心观点

1. 
2. 
3. 

## 关键内容

### 章节一：xxx

### 章节二：xxx

## 实践应用

### 可以立即应用的
1. 
2. 

### 需要长期实践的
1. 
2. 

## 个人感悟

> 

## 相关资源

- 
-
```

## 阅读计划

| 月份 | 书名 | 类型 | 状态 |
|------|------|------|------|
| 1月 | 《代码整洁之道》 | 技术 | ✅ 已完成 |
| 2月 | 《设计模式》 | 技术 | 🔄 进行中 |
| 3月 | 《人类简史》 | 历史 | ⏳ 计划中 |

## 推荐书单

### 技术类
1. 《代码整洁之道》- Robert C. Martin
2. 《设计模式》- GoF
3. 《重构》- Martin Fowler
4. 《人月神话》- Frederick Brooks
5. 《黑客与画家》- Paul Graham

### 思维类
1. 《思考，快与慢》- Daniel Kahneman
2. 《原则》- Ray Dalio
3. 《认知觉醒》- 周岭

### 效率类
1. 《番茄工作法》
2. 《Getting Things Done》
3. 《深度工作》- Cal Newport
