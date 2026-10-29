# Blarmer's Blog

> “非典型”产品自白留地 · [blarmer.site](https://blarmer.site)

基于 [Astro](https://astro.build) 驱动的个人博客，已完整恢复 2017–2020 年的 9 篇历史文章 Markdown 源码，并保持原有 URL 结构兼容。

## 常用命令

```bash
# 本地启动开发预览 (http://localhost:4321)
npm run dev

# 构建静态站点到 dist/
npm run build

# 预览构建产物
npm run preview
```

## 写作指南

所有博客文章统一存放在 `src/content/blog/` 目录下，新建 `.md` 文件即可：

```markdown
---
title: "文章标题"
pubDate: "2026-10-29"
tags: ["思考", "产品"]
---

在这里开始写正文...
```
