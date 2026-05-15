# piggy-vacation-web

猪猪的假期 / Piggy Getaway 官网落地页工程。

## 当前内容
- App 介绍页 / landing page
- 8 张真机截图展示
- 本地开发预览
- GitHub Pages 自动部署

## 本地运行

```bash
npm install
npm run dev
```

默认本地地址：
- http://localhost:4173

## 构建

默认构建用于 NAS `/app/` 路径：

```bash
npm run build
```

如果要构建 GitHub Pages 版本：

```bash
BASE_PATH=/piggy-vacation-web/ npm run build
```

## 部署地址
- NAS 路径：`https://api.piggyvacation.top/app/`
- GitHub Pages：`https://adeb008.github.io/piggy-vacation-web/`

## 说明
- `vite.config.js` 会根据 `BASE_PATH` 切换静态资源前缀
- 本仓库内已包含真机截图资源，不依赖本地软链接
