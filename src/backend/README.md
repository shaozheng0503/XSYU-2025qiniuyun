# 后端服务设计

## 服务架构

### API 服务
- `server.js` - 主服务器文件
- `routes/` - 路由处理
  - `characters.js` - 角色相关路由
  - `conversations.js` - 对话相关路由
  - `ai.js` - AI 服务路由
- `middleware/` - 中间件
  - `auth.js` - 身份验证
  - `cors.js` - 跨域处理
  - `logger.js` - 日志记录

### 数据层
- `models/` - 数据模型
  - `Character.js` - 角色模型
  - `Conversation.js` - 对话模型
  - `User.js` - 用户模型
- `database/` - 数据库配置
  - `connection.js` - 数据库连接
  - `migrations/` - 数据库迁移

### 服务层
- `services/` - 业务逻辑
  - `aiService.js` - AI 服务封装
  - `characterService.js` - 角色管理服务
  - `conversationService.js` - 对话管理服务
- `utils/` - 工具函数
  - `promptBuilder.js` - 提示词构建
  - `voiceProcessor.js` - 语音处理
  - `validation.js` - 数据验证

## API 设计

### 角色相关 API
- `GET /api/characters` - 获取角色列表
- `GET /api/characters/:id` - 获取角色详情
- `GET /api/characters/search` - 搜索角色
- `GET /api/characters/category/:category` - 按分类获取角色

### 对话相关 API
- `POST /api/conversations` - 创建新对话
- `GET /api/conversations/:id` - 获取对话详情
- `POST /api/conversations/:id/messages` - 发送消息
- `GET /api/conversations` - 获取用户对话列表

### AI 服务 API
- `POST /api/ai/chat` - AI 对话接口
- `POST /api/ai/tts` - 文本转语音
- `POST /api/ai/stt` - 语音转文本

## 数据模型设计

### 角色模型 (Character)
```javascript
{
  id: String,
  name: String,
  category: String,
  description: String,
  personality: String,
  knowledge_domain: String,
  voice_style: String,
  prompt_template: String,
  avatar_url: String,
  skills: [String],
  created_at: Date,
  updated_at: Date
}
```

### 对话模型 (Conversation)
```javascript
{
  id: String,
  user_id: String,
  character_id: String,
  title: String,
  messages: [{
    role: String, // user, assistant
    content: String,
    timestamp: Date,
    audio_url: String
  }],
  created_at: Date,
  updated_at: Date
}
```

### 用户模型 (User)
```javascript
{
  id: String,
  username: String,
  email: String,
  preferences: {
    language: String,
    voice_speed: Number,
    theme: String
  },
  created_at: Date,
  updated_at: Date
}
```

## 安全设计

### 身份验证
- JWT Token 认证
- 用户会话管理
- 权限控制

### 数据安全
- 输入验证和清理
- SQL 注入防护
- XSS 攻击防护

### API 安全
- 请求频率限制
- CORS 配置
- 错误信息脱敏

## 性能优化

### 缓存策略
- Redis 缓存角色信息
- 对话历史缓存
- API 响应缓存

### 数据库优化
- 索引优化
- 查询优化
- 连接池管理

### 并发处理
- 异步处理
- 队列管理
- 负载均衡
