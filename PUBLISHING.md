# 发布组件库到 npm

本文档说明如何将 moonwind-ui 组件库发布到 npm�?

## 📋 前置准备

### 1. 注册 npm 账号
如果还没�?npm 账号，请访问 https://www.npmjs.com/ 注册�?

### 2. 登录 npm
在项目根目录执行�?
```bash
npm login
```

按提示输入用户名、密码和邮箱�?

### 3. 检查包名是否可�?
```bash
npm view moonwind-ui
```
如果提示 `npm ERR! 404 Not Found`，说明包名可用�?

## 🚀 发布流程

### 方法 1: 使用 Changesets（推荐）

项目已配�?Changesets，这是管�?monorepo 版本和发布的最佳实践�?

#### 步骤 1: 创建 changeset
```bash
pnpm changeset
```

按提示选择�?
- 要发布的包（选择 `moonwind-ui`�?
- 版本类型（patch/minor/major�?
- 变更描述

#### 步骤 2: 更新版本�?
```bash
pnpm version-packages
```

这会�?
- 更新 package.json 中的版本�?
- 更新 CHANGELOG.md
- 删除 changeset 文件

#### 步骤 3: 构建并发�?
```bash
pnpm release
```

这会�?
- 构建所有包
- 发布�?npm
- 创建 git tag

#### 步骤 4: 推送到 GitHub
```bash
git push --follow-tags
```

### 方法 2: 手动发布

如果你想手动控制发布过程�?

```bash
# 1. 构建
pnpm build

# 2. 进入 moonwind-ui 包目�?
cd packages/moonwind-ui

# 3. 发布
npm publish

# 4. 返回根目�?
cd ../..
```

## 📦 发布检查清�?

发布前请确认�?

- [ ] 所有测试通过：`pnpm test`
- [ ] 代码已提交到 git
- [ ] 版本号已更新
- [ ] CHANGELOG.md 已更�?
- [ ] 构建成功：`pnpm build`
- [ ] 已登�?npm：`npm whoami`

## 🔧 配置 GitHub Actions 自动发布

创建 `.github/workflows/publish.yml`�?

```yaml
name: Publish to npm

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: 'https://registry.npmjs.org'
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - run: pnpm install
      - run: pnpm build
      - run: pnpm release
        env:
          NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
```

然后�?GitHub 仓库设置中添�?`NPM_TOKEN` secret�?

## 📝 版本管理建议

- **patch** (1.0.x): 修复 bug
- **minor** (1.x.0): 新增功能，向后兼�?
- **major** (x.0.0): 破坏性更�?

## 🔗 相关链接

- npm 包地址: https://www.npmjs.com/package/moonwind-ui
- 文档站点: https://windlikeyou.github.io/moonwind-ui/
- GitHub 仓库: https://github.com/windlikeyou/moonwind-ui
