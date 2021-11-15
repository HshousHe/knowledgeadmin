## flex 和 Grid 居中

```css
/* flex */
display: flex;
justify-content: center;
align-items: center;
/* grid */
display: grid;
place-items: center;
```

## css 实现滚动贴合

::: tip 核心属性
 scroll-snap-type  scroll-snap-align
:::
查看详情 [scroll-snap-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-snap-type)

查看详情 [scroll-snap-align](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align)
```css
.container {
  scroll-snap-type: x mandatory;
  height: 100vh;
  overflow: scroll;
}

.Child {
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
}
```
