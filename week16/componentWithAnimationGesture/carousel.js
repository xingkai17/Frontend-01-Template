import {createElement, Wrapper, Text} from './createElement';
import {TimeLine, Animation, linear, ease} from './animation';

// 普通组件
class Carousel {
  constructor() {
    // console.log('config', config);
    // 存储Children
    this.children = [];
    this.attributes = new Map();
    this.properties = new Map();
  }

  setAttribute(name, value) {
    // this.attributes.set(name, value);
    this[name] = value;
  }

  // 通过appendChild，存储子组件
  appendChild(child) {
    this.children.push(child);
  }

  loop(root, children) {
    let tl = new TimeLine({
      loop: true, // 配置循环播放
      // 以下是各事件触发
      onStart: () => {
        console.log('Animation started.');
      },
      onStop: (key) => {
        console.log(`Animation ${key} is stopped.`);
      },
      onRestart: () => {
        console.log(`Animation is restarted.`);
      },
      onPause: () => {
        console.log(`Animation is paused.`);
      },
      onResume: () => {
        console.log(`Animation is resumed.`);
      },
      // 通过在所有动画都执行完毕的事件中，执行restart方法重新开始播放，形成循环。
      onAllStop: () => {
        console.log(`All animations are stopped, you can restart them now.`);
        // 也可以在此处手动调用restart方法实现循环播放
        // tl.restart();
      },
    });
    let position = 0;
    // 每次同时移动的图片有两张，遍历children时，每次设置两张图片的动画
    for (let position = 0; position < children.length; position++) {
      let nextPosition = (position + 1) % children.length;
      tl.add(
        new Animation(
          children[position].style,
          'transform',
          -100 * position,
          -100 - 100 * position,
          3000,
          position * 3000,
          ease,
          (value, time) => {
            return `translate(${value}%)`;
          },
          `position: ${position}`,
        ),
      );
      tl.add(
        new Animation(
          children[nextPosition].style,
          'transform',
          100 - 100 * nextPosition,
          -100 * nextPosition,
          3000,
          position * 3000,
          ease,
          (value, time) => {
            return `translate(${value}%)`;
          },
          `nextPosition: ${nextPosition}`,
        ),
      );
    }
    setTimeout(() => tl.start(), 3000);

    // 基于CSS的轮播方法
    let nextPic = () => {
      let nextPosition = (position + 1) % this.data.length;
      let current = children[position];
      let next = children[nextPosition];

      current.style.transition = 'ease 0s';
      next.style.transition = 'ease 0s';

      current.style.transform = `translateX(${-100 * position}%)`;
      next.style.transform = `translateX(${100 - 100 * nextPosition}%)`;

      // 浏览器会自动合并量测CSS操作，因此需要用计时器等待下一帧的时候再执行。
      // 也可以用requestAnimationFrame(requestAnimationFrame(() => {}))
      setTimeout(() => {
        current.style.transition = ''; // means use css rule: ease 1s
        next.style.transition = '';

        // 终止位置
        current.style.transform = `translateX(${-100 - 100 * position}%)`;
        next.style.transform = `translateX(${-100 * nextPosition}%)`;

        position = nextPosition;
      }, 16);

      // 暂停轮播，处理拖拽功能
      setTimeout(nextPic, 3000);
    };
    // 暂停轮播，处理拖拽功能
    // setTimeout(nextPic, 3000);
  }

  drag(root, children) {
    let position = 0;

    root.addEventListener('mousedown', () => {
      let startX = event.clientX;

      let nextPosition = (position + 1) % this.data.length;
      let lastPosition = (position - 1 + this.data.length) % this.data.length;

      let current = children[position];
      let last = children[lastPosition];
      let next = children[nextPosition];

      current.style.transition = 'ease 0s';
      last.style.transition = 'ease 0s';
      next.style.transition = 'ease 0s';

      current.style.transform = `translateX(${-500 * position}px)`;
      last.style.transform = `translateX(${-500 - 500 * lastPosition}px)`;
      next.style.transform = `translateX(${500 - 500 * nextPosition}px)`;

      let move = (event) => {
        // console.log(event.clientX - startX, event.clientY - startY);
        current.style.transform = `translateX(${
          event.clientX - startX - 500 * position
        }px)`;
        last.style.transform = `translateX(${
          event.clientX - startX - 500 - 500 * lastPosition
        }px)`;
        next.style.transform = `translateX(${
          event.clientX - startX + 500 - 500 * nextPosition
        }px)`;
      };

      let up = (event) => {
        let offset = 0;

        if (event.clientX - startX > 250) {
          offset = 1;
        } else if (event.clientX - startX < -250) {
          offset = -1;
        }

        current.style.transition = ''; // 打开transition
        last.style.transition = '';
        next.style.transition = '';

        current.style.transform = `translateX(${
          offset * 500 - 500 * position
        }px)`;
        last.style.transform = `translateX(${
          offset * 500 - 500 - 500 * lastPosition
        }px)`;
        next.style.transform = `translateX(${
          offset * 500 + 500 - 500 * nextPosition
        }px)`;

        position = (position - offset + this.data.length) % this.data.length;

        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };

      // document绑定的事件，在浏览器外部，如控制台中，也会继续触发
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    });
  }

  render() {
    let children = this.data.map((url) => {
      let element = <img src={url} />;
      element.addEventListener('dragstart', (event) => event.preventDefault());
      return element;
    });
    let root = <div class={'carousel'}>{children}</div>;

    this.loop(root, children);
    // this.drag(root, children);

    return root;
  }

  // 当前节点插入将渲染到页面
  mountTo(parent) {
    this.slot = <div></div>;

    for (const child of this.children) {
      this.slot.appendChild(child);
    }

    this.render().mountTo(parent);
  }
}

// https://reactjs.org/docs/introducing-jsx.html
// 此时调用createElement的顺序为1.Child,2.Child,3.Child,4:Div
// 在JSX中，组件树构建顺序是子元素->父元素
let component = (
  <Carousel
    data={[
      'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
      'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
      'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
      'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',
    ]}
  />
);

// 将组件及其子组件渲染到#root
component.mountTo(document.querySelector('#root'));
