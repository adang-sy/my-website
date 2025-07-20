# 详细部署指南

本指南将详细介绍如何将 Next.js 独立站模板部署到 Vercel 平台，适合代码小白用户。

## 📋 准备工作

在开始部署之前，请确保您已经：

1. ✅ 拥有 GitHub 账号
2. ✅ 拥有 Vercel 账号
3. ✅ 下载并解压了项目文件

## 🚀 部署方法一：GitHub + Vercel 自动部署（推荐）

这是最简单且最推荐的部署方式，支持自动更新。

### 步骤 1: 上传代码到 GitHub

1. **登录 GitHub**
   - 访问 [GitHub.com](https://github.com)
   - 使用您的账号登录

2. **创建新仓库**
   - 点击右上角的 "+" 号
   - 选择 "New repository"
   - 仓库名称填写：`my-website`（可自定义）
   - 设置为 "Public"（公开）
   - 点击 "Create repository"

3. **上传项目文件**
   - 在新创建的仓库页面，点击 "uploading an existing file"
   - 将项目文件夹中的所有文件拖拽到上传区域
   - 等待文件上传完成
   - 在底部填写提交信息：`Initial commit`
   - 点击 "Commit changes"

### 步骤 2: 连接 Vercel 部署

1. **登录 Vercel**
   - 访问 [Vercel.com](https://vercel.com)
   - 点击 "Login" 使用 GitHub 账号登录

2. **导入项目**
   - 登录后点击 "New Project"
   - 在 "Import Git Repository" 部分找到您刚创建的仓库
   - 点击仓库右侧的 "Import" 按钮

3. **配置项目**
   - Project Name: 保持默认或自定义
   - Framework Preset: 选择 "Next.js"
   - Root Directory: 保持默认 "./"
   - Build and Output Settings: 保持默认
   - Environment Variables: 暂时跳过

4. **开始部署**
   - 点击 "Deploy" 按钮
   - 等待 2-3 分钟完成部署
   - 部署成功后会显示您的网站地址

### 步骤 3: 配置自定义域名（可选）

1. **在 Vercel 项目设置中**
   - 进入项目 Dashboard
   - 点击 "Settings" 选项卡
   - 选择 "Domains" 部分

2. **添加域名**
   - 输入您的域名（如：`www.yoursite.com`）
   - 点击 "Add"
   - 按照提示配置 DNS 记录

## 🔧 部署方法二：Vercel CLI 部署

适合有一定技术基础的用户，可以本地预览后再部署。

### 步骤 1: 安装 Node.js

1. **下载 Node.js**
   - 访问 [Node.js 官网](https://nodejs.org)
   - 下载 LTS 版本（推荐）
   - 安装到您的电脑

2. **验证安装**
   - 打开命令行工具（Windows: CMD，Mac: Terminal）
   - 输入 `node --version` 检查版本
   - 输入 `npm --version` 检查 npm 版本

### 步骤 2: 本地运行项目

1. **打开项目文件夹**
   - 使用命令行进入项目目录
   - 或在项目文件夹中右键选择"在此处打开命令行"

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **预览网站**
   - 打开浏览器访问 `http://localhost:3000`
   - 检查网站是否正常显示

### 步骤 3: 部署到 Vercel

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```
   - 选择使用 GitHub 账号登录
   - 在浏览器中完成授权

3. **部署项目**
   ```bash
   vercel
   ```
   - 按照提示回答问题：
     - Set up and deploy? `Y`
     - Which scope? 选择您的账号
     - Link to existing project? `N`
     - What's your project's name? 输入项目名称
     - In which directory is your code located? `./`
   - 等待部署完成

## 📝 部署后配置

### 1. 修改网站内容

部署成功后，您可以修改网站内容：

1. **修改基本信息**
   - 编辑 `pages/_app.tsx` 修改网站标题
   - 编辑 `components/Navbar.tsx` 修改品牌名称
   - 编辑 `components/Footer.tsx` 修改联系信息

2. **修改页面内容**
   - `pages/index.tsx` - 首页内容
   - `pages/about.tsx` - 关于页面
   - `pages/services.tsx` - 服务页面
   - `pages/contact.tsx` - 联系页面

3. **重新部署**
   - 如果使用 GitHub 方式：提交代码到 GitHub，Vercel 会自动重新部署
   - 如果使用 CLI 方式：运行 `vercel --prod` 重新部署

### 2. 配置环境变量

1. **在 Vercel Dashboard 中**
   - 进入项目设置
   - 选择 "Environment Variables"
   - 添加需要的环境变量

2. **常用环境变量**
   ```
   NEXT_PUBLIC_SITE_NAME=您的网站名称
   NEXT_PUBLIC_CONTACT_EMAIL=您的邮箱
   NEXT_PUBLIC_CONTACT_PHONE=您的电话
   ```

### 3. 设置分析工具

1. **Google Analytics**
   - 获取 GA 跟踪 ID
   - 在环境变量中添加 `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

2. **百度统计**
   - 获取百度统计代码
   - 在环境变量中添加 `NEXT_PUBLIC_BAIDU_ANALYTICS_ID`

## 🔍 SEO 优化

### 1. 修改网站地图

编辑 `public/sitemap.xml`：
- 将 `your-domain.com` 替换为您的实际域名
- 更新 `lastmod` 日期
- 根据需要添加或删除页面

### 2. 配置 robots.txt

编辑 `public/robots.txt`：
- 将 `your-domain.com` 替换为您的实际域名

### 3. 优化页面标题和描述

在每个页面文件中修改 `<Head>` 部分：
```tsx
<Head>
  <title>您的页面标题</title>
  <meta name="description" content="页面描述" />
</Head>
```

## 🛠️ 常见问题解决

### 问题 1: 部署失败

**可能原因**：
- Node.js 版本过低
- 依赖安装失败
- 代码语法错误

**解决方案**：
1. 确保 Node.js 版本 ≥ 16.0
2. 删除 `node_modules` 文件夹，重新运行 `npm install`
3. 检查代码是否有语法错误

### 问题 2: 样式显示异常

**可能原因**：
- Tailwind CSS 配置问题
- 静态资源路径错误

**解决方案**：
1. 检查 `tailwind.config.js` 配置
2. 确保 `next.config.js` 中设置了 `images: { unoptimized: true }`

### 问题 3: 页面 404 错误

**可能原因**：
- 路由配置错误
- 文件名不正确

**解决方案**：
1. 检查页面文件是否在 `pages` 目录下
2. 确保文件名符合 Next.js 路由规范

### 问题 4: 自定义域名不生效

**可能原因**：
- DNS 配置错误
- 域名解析未生效

**解决方案**：
1. 检查 DNS 记录是否正确配置
2. 等待 DNS 解析生效（通常需要 24-48 小时）

## 📞 获取帮助

如果您在部署过程中遇到问题：

1. **查看 Vercel 部署日志**
   - 在 Vercel Dashboard 中查看详细错误信息

2. **检查官方文档**
   - [Vercel 部署文档](https://vercel.com/docs)
   - [Next.js 部署指南](https://nextjs.org/docs/deployment)

3. **社区支持**
   - [Vercel 社区论坛](https://github.com/vercel/vercel/discussions)
   - [Next.js 社区](https://github.com/vercel/next.js/discussions)

## 🎉 部署成功

恭喜！您已经成功部署了自己的独立站。现在您可以：

1. ✅ 分享您的网站链接
2. ✅ 继续自定义网站内容
3. ✅ 添加更多功能和页面
4. ✅ 配置分析工具跟踪访问数据

记住，每次修改代码后，如果使用 GitHub 方式部署，Vercel 会自动重新部署您的网站。

---

**祝您使用愉快！** 🚀

