# 每周总结可以写在这里

## 动画

> 如何停止 css 动画？(see ./cssAnimationDemo)
>
> - 改 transition：transition="none";但是元素并没有停在当前位置，而是直接停在了当前动画结束的尾部
> - 需要得到元素当前的位置 getBoundingClientRect
> - css 动画并不总是可控，因此可以考虑用 js 实现动画

- 最重要的两类动画：

  - timeline
  - animation

> transform 不会触发重排
