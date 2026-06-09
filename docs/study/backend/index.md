# 后端技术

## 知识图谱

```
后端技术
├── 编程语言
│   ├── Node.js
│   ├── Python
│   ├── Java
│   └── Go
├── 数据库
│   ├── 关系型
│   │   ├── MySQL
│   │   └── PostgreSQL
│   ├── NoSQL
│   │   ├── MongoDB
│   │   └── Redis
│   └── 缓存
│       ├── Redis
│       └── Memcached
├── API 设计
│   ├── RESTful
│   ├── GraphQL
│   └── gRPC
├── 架构模式
│   ├── MVC
│   ├── 微服务
│   └── Serverless
└── DevOps
    ├── Docker
    ├── CI/CD
    └── 监控告警
```

## 学习笔记

### Node.js + Express 基础

```javascript
const express = require('express')
const app = express()

// 中间件
app.use(express.json())

// 路由
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.json({
      code: 200,
      data: users,
      message: 'success'
    })
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: error.message
    })
  }
})

// 启动服务
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

### 数据库设计原则

1. **三大范式**
   - 第一范式：字段原子性
   - 第二范式：非主键字段依赖主键
   - 第三范式：消除传递依赖

2. **索引优化**
   - 主键索引
   - 唯一索引
   - 普通索引
   - 联合索引

3. **查询优化**
   - 避免 SELECT *
   - 使用 EXPLAIN 分析
   - 合理使用 JOIN
   - 分页优化

### API 设计规范

```javascript
// RESTful API 示例

// 获取用户列表
GET /api/users?page=1&size=10

// 获取单个用户
GET /api/users/:id

// 创建用户
POST /api/users
{
  "name": "张三",
  "email": "zhangsan@example.com"
}

// 更新用户
PUT /api/users/:id
{
  "name": "张三（更新）"
}

// 删除用户
DELETE /api/users/:id

// 统一响应格式
{
  "code": 200,
  "data": {},
  "message": "success",
  "timestamp": 1234567890
}
```

## 常见问题

### Q: 如何处理高并发？

**A**:
1. **负载均衡**：Nginx 反向代理
2. **缓存**：Redis 缓存热点数据
3. **数据库优化**：读写分离、分库分表
4. **异步处理**：消息队列（RabbitMQ/Kafka）
5. **限流熔断**：保护系统稳定性

### Q: 如何保证数据一致性？

**A**:
1. **事务**：ACID 特性
2. **分布式事务**：
   - 两阶段提交（2PC）
   - TCC（Try-Confirm-Cancel）
   - 最终一致性（消息队列）
3. **乐观锁/悲观锁**

## 学习资源

- [Node.js 官方文档](https://nodejs.org/zh-cn/docs/)
- [Express 官方文档](https://expressjs.com/zh-cn/)
- [MongoDB 大学](https://university.mongodb.com/)
- [Redis 命令参考](http://redisdoc.com/)
