# 自定义指南

本指南将帮助您轻松自定义 Next.js 独立站模板，即使您是代码小白也能快速上手。

## 🎨 基础自定义

### 1. 修改网站基本信息

#### 修改网站标题和描述

编辑 `pages/_app.tsx` 文件：

```tsx
<Head>
  <title>您的网站名称</title>
  <meta name="description" content="您的网站描述" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
</Head>
```

#### 修改品牌名称

编辑 `components/Navbar.tsx` 文件，找到：

```tsx
<span className="text-2xl font-bold text-primary-600">我的品牌</span>
```

将 "我的品牌" 替换为您的品牌名称。

#### 修改页脚信息

编辑 `components/Footer.tsx` 文件：

1. **公司名称**：找到 `<h3 className="text-2xl font-bold mb-4">我的品牌</h3>`
2. **公司描述**：修改公司介绍文字
3. **联系信息**：更新邮箱、电话、地址信息

### 2. 修改导航菜单

编辑 `components/Navbar.tsx` 文件，找到 `navigation` 数组：

```tsx
const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '服务', href: '/services' },
  { name: '案例', href: '/portfolio' },  // 可以添加新页面
  { name: '联系我们', href: '/contact' },
]
```

您可以：
- 修改菜单名称
- 添加新的菜单项
- 删除不需要的菜单
- 修改链接地址

### 3. 修改颜色主题

编辑 `tailwind.config.js` 文件：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',   // 最浅色
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',  // 主色调
        600: '#2563eb',  // 常用色
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',  // 最深色
      },
    },
  },
},
```

**常用颜色方案**：

- **蓝色主题**（默认）：`#3b82f6`
- **绿色主题**：`#10b981`
- **紫色主题**：`#8b5cf6`
- **红色主题**：`#ef4444`
- **橙色主题**：`#f97316`

## 📄 页面内容自定义

### 1. 首页自定义

编辑 `pages/index.tsx` 文件：

#### 英雄区域
```tsx
<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
  专业的
  <span className="text-primary-600"> 解决方案</span>
  <br />
  助力您的业务成长
</h1>
```

修改标题文字，突出您的核心价值。

#### 特色服务
找到 `features` 数组，修改服务特点：

```tsx
const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary-600" />,
    title: "您的特色1",
    description: "描述您的第一个特色服务"
  },
  // 添加更多特色...
]
```

#### 数据统计
修改统计数据：

```tsx
<div className="text-4xl font-bold text-white mb-2">500+</div>
<div className="text-primary-100">成功项目</div>
```

将数字和描述改为您的实际数据。

### 2. 关于页面自定义

编辑 `pages/about.tsx` 文件：

#### 公司故事
修改公司介绍文字，讲述您的品牌故事。

#### 团队介绍
更新 `team` 数组：

```tsx
const team = [
  {
    name: "张总",
    position: "创始人 & CEO",
    description: "拥有10年行业经验，致力于为客户提供最优质的服务。"
  },
  // 添加更多团队成员...
]
```

### 3. 服务页面自定义

编辑 `pages/services.tsx` 文件：

#### 服务列表
修改 `services` 数组：

```tsx
const services = [
  {
    icon: <Code className="w-12 h-12 text-primary-600" />,
    title: "您的服务名称",
    description: "服务描述",
    features: ["特点1", "特点2", "特点3", "特点4"],
    price: "¥5,000起"
  },
  // 添加更多服务...
]
```

#### 服务流程
更新 `process` 数组来反映您的服务流程。

### 4. 联系页面自定义

编辑 `pages/contact.tsx` 文件：

#### 联系信息
修改 `contactInfo` 数组：

```tsx
const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-primary-600" />,
    title: "邮箱地址",
    content: "your-email@example.com",
    description: "随时发送邮件给我们"
  },
  // 更新其他联系方式...
]
```

## 🖼️ 添加图片和媒体

### 1. 添加 Logo

1. 将您的 Logo 文件放入 `public` 文件夹
2. 在 `components/Navbar.tsx` 中添加图片：

```tsx
<Link href="/" className="flex-shrink-0 flex items-center">
  <img src="/your-logo.png" alt="Logo" className="h-8 w-auto mr-2" />
  <span className="text-2xl font-bold text-primary-600">您的品牌</span>
</Link>
```

### 2. 添加背景图片

在 CSS 中使用背景图片：

```css
.hero-section {
  background-image: url('/your-background.jpg');
  background-size: cover;
  background-position: center;
}
```

### 3. 添加产品图片

在页面中添加图片：

```tsx
<img 
  src="/product-image.jpg" 
  alt="产品描述" 
  className="w-full h-64 object-cover rounded-lg"
/>
```

## 📱 响应式设计调整

### 移动端优化

使用 Tailwind CSS 的响应式类名：

```tsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  标题文字
</div>
```

- `text-2xl`：默认（移动端）
- `md:text-4xl`：中等屏幕
- `lg:text-6xl`：大屏幕

### 常用响应式断点

- `sm:`：640px 及以上
- `md:`：768px 及以上
- `lg:`：1024px 及以上
- `xl:`：1280px 及以上

## 🔧 高级自定义

### 1. 添加新页面

1. 在 `pages` 文件夹中创建新文件，如 `portfolio.tsx`
2. 复制现有页面的结构
3. 修改内容
4. 在导航菜单中添加链接

### 2. 添加新组件

1. 在 `components` 文件夹中创建新文件
2. 创建可复用的组件：

```tsx
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-colors duration-200";
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### 3. 添加动画效果

使用 CSS 过渡和变换：

```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 4. 集成第三方服务

#### Google Analytics

1. 在 `.env.local` 中添加：
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

2. 在 `pages/_app.tsx` 中添加跟踪代码。

#### 在线客服

添加客服聊天组件：

```tsx
// components/ChatWidget.tsx
const ChatWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors">
        <MessageCircle size={24} />
      </button>
    </div>
  );
};
```

## 🎯 SEO 优化自定义

### 1. 页面元数据

为每个页面添加独特的元数据：

```tsx
<Head>
  <title>页面标题 - 您的网站名称</title>
  <meta name="description" content="页面描述，包含关键词" />
  <meta name="keywords" content="关键词1, 关键词2, 关键词3" />
  <meta property="og:title" content="页面标题" />
  <meta property="og:description" content="页面描述" />
  <meta property="og:image" content="/og-image.jpg" />
</Head>
```

### 2. 结构化数据

添加 JSON-LD 结构化数据：

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "您的公司名称",
      "url": "https://yourwebsite.com",
      "logo": "https://yourwebsite.com/logo.png"
    })
  }}
/>
```

## 📊 性能优化

### 1. 图片优化

使用 Next.js Image 组件：

```tsx
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="描述"
  width={500}
  height={300}
  priority // 对于首屏重要图片
/>
```

### 2. 代码分割

使用动态导入：

```tsx
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

## 🔍 测试和调试

### 1. 本地测试

```bash
npm run dev
```

在浏览器中测试所有功能。

### 2. 构建测试

```bash
npm run build
npm run start
```

测试生产版本。

### 3. 移动端测试

使用浏览器开发者工具的设备模拟器测试移动端显示效果。

## 💡 自定义技巧

### 1. 快速修改颜色

使用查找替换功能，将 `primary-600` 替换为您想要的颜色类名。

### 2. 批量修改文字

使用编辑器的查找替换功能批量修改相同的文字内容。

### 3. 组件复用

将重复的 UI 元素提取为独立组件，便于维护和修改。

### 4. 样式一致性

使用 Tailwind CSS 的设计系统，保持间距、颜色、字体大小的一致性。

---

通过以上指南，您应该能够轻松自定义您的独立站。记住，每次修改后都要测试效果，确保网站正常运行。

**祝您自定义愉快！** 🎨

