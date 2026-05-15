# web-share-h5

Piggy Vacation 分享确认页 H5 骨架工程。

## 已完成
- Vite + React + TypeScript 独立工程
- 对接后端公开接口：
  - `GET /public/trip-shares/:token`
  - `POST /public/trip-shares/:token/confirm`
- 分享详情页基础布局
- 确认表单
- 二次确认弹窗
- 成功 / 重复确认 / 加载失败 基础状态

## 本地运行

```bash
cp .env.example .env.local
npm install
npm run dev
```

默认本地地址：
- http://localhost:4173

## 环境变量
- `VITE_API_BASE_URL=http://localhost:3000/api/v1`

## 当前访问方式
当前页面会优先从 URL path 末段读取 token，例如：
- `http://localhost:4173/share/TOKEN`

也兼容 query：
- `http://localhost:4173/?token=TOKEN`

## 下一步建议
1. 接真实分享 token 做页面联调
2. 补链接失效 / 空日程 / 预算摘要等更细状态
3. 再补更贴近设计稿的移动端视觉样式
4. 视部署方案决定是否改成 `/share/:token` 正式路由
