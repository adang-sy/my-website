# Next.js 独立站模板

一个基于 Next.js 的现代化独立站模板，专为代码小白设计，开箱即用，可快速部署到 Vercel。

## 🚀 特性

- ✅ **现代化技术栈**: Next.js 14 + TypeScript + Tailwind CSS
- ✅ **响应式设计**: 完美适配桌面端和移动端
- ✅ **SEO 优化**: 内置 SEO 最佳实践
- ✅ **快速部署**: 一键部署到 Vercel
- ✅ **易于定制**: 模块化组件，便于修改
- ✅ **专业页面**: 包含首页、关于、服务、联系等完整页面

## 📋 系统要求

- Node.js 16.0 或更高版本
- npm 或 yarn 包管理器
- Git 版本控制工具

## 🛠️ 快速开始

### 1. 克隆项目

```bash
git clone <your-repository-url>
cd nextjs-template
```

### 2. 安装依赖

```bash
npm install
# 或者使用 yarn
yarn install
```

### 3. 启动开发服务器

```bash
npm run dev
# 或者使用 yarn
yarn dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 4. 构建生产版本

```bash
npm run build
npm run start
# 或者使用 yarn
yarn build
yarn start
```

## 📁 项目结构

```
nextjs-template/
├── components/          # 可复用组件
│   ├── Layout.tsx      # 页面布局组件
│   ├── Navbar.tsx      # 导航栏组件
│   └── Footer.tsx      # 页脚组件
├── pages/              # 页面文件
│   ├── _app.tsx        # 应用入口
│   ├── _document.tsx   # HTML 文档结构
│   ├── index.tsx       # 首页
│   ├── about.tsx       # 关于页面
│   ├── services.tsx    # 服务页面
│   └── contact.tsx     # 联系页面
├── styles/             # 样式文件
│   └── globals.css     # 全局样式
├── public/             # 静态资源
│   ├── robots.txt      # 搜索引擎爬虫配置
│   ├── sitemap.xml     # 网站地图
│   └── manifest.json   # PWA 配置
├── package.json        # 项目配置
├── next.config.js      # Next.js 配置
├── tailwind.config.js  # Tailwind CSS 配置
├── tsconfig.json       # TypeScript 配置
└── vercel.json         # Vercel 部署配置
```

## 🎨 自定义配置

### 修改网站信息

1. 编辑 `pages/_app.tsx` 修改网站标题和描述
2. 编辑各个页面文件修改页面内容
3. 编辑 `components/Navbar.tsx` 修改导航菜单
4. 编辑 `components/Footer.tsx` 修改页脚信息

### 修改样式主题

1. 编辑 `tailwind.config.js` 修改颜色主题
2. 编辑 `styles/globals.css` 修改全局样式
3. 使用 Tailwind CSS 类名快速调整组件样式

### 环境变量配置

1. 复制 `.env.example` 为 `.env.local`
2. 根据需要修改环境变量值

```bash
cp .env.example .env.local
```

## 🚀 部署到 Vercel

### 方法一：通过 Vercel CLI（推荐）

1. 安装 Vercel CLI

```bash
npm install -g vercel
```

2. 登录 Vercel

```bash
vercel login
```

3. 部署项目

```bash
vercel
```

按照提示完成部署配置。

### 方法二：通过 GitHub 集成

1. 将代码推送到 GitHub 仓库
2. 访问 [Vercel 官网](https://vercel.com)
3. 使用 GitHub 账号登录
4. 点击 "New Project" 导入 GitHub 仓库
5. 选择项目并点击 "Deploy"

### 方法三：手动上传

1. 构建项目

```bash
npm run build
```

2. 访问 [Vercel 官网](https://vercel.com)
3. 拖拽 `out` 文件夹到 Vercel 部署页面

## 📝 页面说明

### 首页 (/)
- 英雄区域展示主要价值主张
- 特色服务介绍
- 数据统计展示
- 客户评价
- 行动号召区域

### 关于页面 (/about)
- 公司介绍和发展历程
- 使命愿景展示
- 核心价值观
- 团队成员介绍

### 服务页面 (/services)
- 详细服务介绍
- 服务特点和优势
- 价格信息
- 服务流程说明

### 联系页面 (/contact)
- 联系方式信息
- 在线联系表单
- 办公地址和地图
- 工作时间说明

## 🔧 常见问题

### Q: 如何修改网站颜色主题？
A: 编辑 `tailwind.config.js` 文件中的 `colors.primary` 配置。

### Q: 如何添加新页面？
A: 在 `pages` 目录下创建新的 `.tsx` 文件，Next.js 会自动创建对应路由。

### Q: 如何修改导航菜单？
A: 编辑 `components/Navbar.tsx` 文件中的 `navigation` 数组。

### Q: 如何集成分析工具？
A: 在 `.env.local` 中配置分析工具 ID，然后在 `pages/_app.tsx` 中添加相应代码。

### Q: 部署后样式显示异常怎么办？
A: 检查 `next.config.js` 中的配置，确保 `output: 'export'` 和 `images.unoptimized: true` 已正确设置。

## 📚 技术文档

- [Next.js 官方文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs)
- [Vercel 部署文档](https://vercel.com/docs)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个模板。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。

## 💬 支持

如果您在使用过程中遇到问题，可以：

1. 查看本文档的常见问题部分
2. 提交 GitHub Issue
3. 联系技术支持

---

**作者**: Manus AI  
**版本**: 1.0.0  
**更新时间**: 2024年1月

