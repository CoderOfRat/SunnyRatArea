---
title: JavaScript中reduce的数组求和用法
---

```js
[{a: 0},{a: 2}].reduce((preRes,currentItem) => {
    return preRes + currentItem.a;
}, 0)
// => 2 = 0 + 2
[{a: 0,b: "1"},{a: 2, b: "3"}].reduce((preRes,currentItem) => {
    return preRes + currentItem.a + Number(currentItem.b);
}, 3)
// => 9 = 3 + 0 + 1 + 2 + 3
```
`易错点为，错误习惯地把preRes当做item项，其实它是上次的结果值 `
---