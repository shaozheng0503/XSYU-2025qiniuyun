# AI 角色扮演网页设计文档

## 1. 系统架构设计

### 1.1 整体架构
采用前后端分离的架构设计，前端使用 React + TypeScript，后端使用 Node.js + Express，AI 服务通过 OpenAI API 集成。

### 1.2 技术栈选择

**前端技术栈**
- React 18 + TypeScript：提供现代化的用户界面开发体验
- Tailwind CSS：快速样式开发，响应式设计
- Vite：快速的构建工具和开发服务器
- Web Speech API：浏览器原生语音识别和合成
- Zustand：轻量级状态管理

**后端技术栈**
- Node.js + Express：轻量级后端服务
- OpenAI API：GPT-4 模型集成
- WebSocket：实时通信支持
- MongoDB：用户数据和对话历史存储

**AI 服务集成**
- OpenAI GPT-4：核心对话模型
- 角色提示词工程：为每个角色定制专属提示词
- 语音处理：Web Speech API + 自定义 TTS

## 2. 功能模块设计

### 2.1 角色管理模块
- 角色数据库设计
- 角色搜索和筛选
- 角色详情展示
- 角色收藏功能

### 2.2 对话系统模块
- 语音识别处理
- 文本预处理和清洗
- AI 角色响应生成
- 语音合成播放

### 2.3 用户界面模块
- 角色选择界面
- 对话界面
- 设置界面
- 历史记录界面

## 3. 数据库设计

### 3.1 角色表（characters）
```javascript
{
  id: String,
  name: String,
  category: String, // 历史人物、文学角色、科学家等
  description: String,
  personality: String,
  knowledge_domain: String,
  voice_style: String,
  prompt_template: String,
  avatar_url: String,
  created_at: Date,
  updated_at: Date
}
```

### 3.2 对话记录表（conversations）
```javascript
{
  id: String,
  user_id: String,
  character_id: String,
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

## 4. API 设计

### 4.1 角色相关 API
- `GET /api/characters`：获取角色列表
- `GET /api/characters/:id`：获取角色详情
- `GET /api/characters/search`：搜索角色

### 4.2 对话相关 API
- `POST /api/conversations`：创建新对话
- `POST /api/conversations/:id/messages`：发送消息
- `GET /api/conversations/:id`：获取对话历史

### 4.3 AI 服务 API
- `POST /api/ai/chat`：AI 对话接口
- `POST /api/ai/tts`：文本转语音接口

## 5. 角色提示词设计

### 5.1 苏格拉底角色提示词
```
你是一位古希腊哲学家苏格拉底。你的特点是：
- 使用苏格拉底问答法，通过提问引导思考
- 语言风格简洁而深刻
- 关注道德、知识和真理
- 经常说"我知道我一无所知"
- 对话风格：温和但坚持，善于引导对方思考

请以苏格拉底的身份和用户对话，保持角色的真实性和教育意义。
```

### 5.2 爱因斯坦角色提示词
```
你是一位理论物理学家阿尔伯特·爱因斯坦。你的特点是：
- 对物理学有深刻理解，特别是相对论
- 语言风格通俗易懂，善于用比喻解释复杂概念
- 对科学和哲学都有思考
- 性格温和，有幽默感
- 经常用"想象一下"来引导思考

请以爱因斯坦的身份和用户对话，用简单的方式解释复杂的科学概念。
```

### 5.3 莎士比亚角色提示词
```
你是一位英国剧作家威廉·莎士比亚。你的特点是：
- 语言优美，富有诗意
- 善于用比喻和修辞
- 对人性有深刻洞察
- 经常引用自己的作品
- 对话风格：优雅而富有哲理

请以莎士比亚的身份和用户对话，用诗意的语言表达深刻的思想。
```

## 6. 用户界面设计

### 6.1 主页面设计
- 顶部导航栏：Logo、搜索框、用户菜单
- 角色分类导航：历史人物、文学角色、科学家等
- 角色卡片展示：头像、姓名、简介、开始对话按钮
- 底部：热门角色推荐

### 6.2 对话页面设计
- 左侧：角色信息面板
- 中间：对话消息区域
- 右侧：语音控制面板
- 底部：消息输入框和发送按钮

### 6.3 响应式设计
- 移动端：单列布局，对话界面全屏
- 平板端：双列布局，角色列表和对话并排
- 桌面端：三列布局，充分利用屏幕空间

## 7. 性能优化策略

### 7.1 前端优化
- 代码分割和懒加载
- 图片压缩和 CDN 加速
- 缓存策略优化
- 虚拟滚动（长对话列表）

### 7.2 后端优化
- Redis 缓存（角色信息和对话历史）
- 数据库索引优化
- API 响应压缩
- 连接池管理

### 7.3 AI 服务优化
- 提示词模板缓存
- 对话上下文管理
- 流式响应处理
- 错误重试机制
