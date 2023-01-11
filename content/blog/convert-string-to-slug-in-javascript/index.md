---
title: Convert string to slug in js
date: "2023-01-12T14:16:57.387Z"
description: ""
---
```js
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-') // replaces space with '-'
    .replace(/^-+|-+$/g, ''); // removes special characters
    
// Example
slugify('Blog Not $Found'); // 'blog-not-found'
```
```