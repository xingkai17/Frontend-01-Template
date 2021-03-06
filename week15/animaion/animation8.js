class TimeLine {
  constructor() {
    this.animation = [];
    this.requestID = null;
    this.state = 'inited';
    this.tick = () => {
      let t = Date.now() - this.startTime;

      let animations = this.animation.filter(
        (animation) => !animation.finished,
      );

      for (const animation of animations) {
        let {
          object,
          property,
          template,
          start,
          end,
          duration,
          delay,
          timingFunction,
          addTime,
        } = animation;

        let progression = timingFunction((t - delay - addTime) / duration); // 0-1之间的数字

        if (t > duration + delay + addTime) {
          progression = 1;
          animation.finished = true;
        }

        let value = start + progression * (end - start);

        object[property] = template(value);
      }

      if (animations.length) {
        this.requestID = requestAnimationFrame(this.tick);
      }
    };
  }

  pause() {
    if (this.state !== 'playing') {
      return;
    }
    this.state = 'pause';
    this.pauseTime = Date.now();
    if (this.requestID !== null) {
      cancelAnimationFrame(this.requestID);
    }
  }

  resume() {
    if (this.state !== 'pause') {
      return;
    }
    this.state = 'playing';
    this.startTime += Date.now() - this.pauseTime;
    this.tick();
  }

  start() {
    if (this.state !== 'inited') {
      return;
    }
    this.state = 'playing';
    this.startTime = Date.now();
    this.tick();
  }

  restart() {
    if (this.state === 'playing') {
      this.pause();
    }
    this.animation = [];
    this.requestID = null;
    this.state = 'playing';
    this.startTime = Date.now();
    this.pauseTime = null;
    this.tick();
  }

  add(animation, addTime) {
    console.log(animation);
    this.animation.push(animation);
    animation.finished = false;
    if (this.state === 'playing') {
      animation.addTime =
        addTime !== void 0 ? addTime : Date.now() - this.startTime;
    } else {
      animation.addTime = addTime !== void 0 ? addTime : 0;
    }
  }
}

//
class Animation {
  constructor(
    object,
    property,
    template,
    start,
    end,
    duration,
    delay,
    timingFunction,
  ) {
    this.object = object;
    this.template = template;
    this.property = property;
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.delay = delay || 0;
    this.timingFunction = timingFunction;
  }
}

//
class ColorAnimation {
  constructor(
    object,
    property,
    template,
    start,
    end,
    duration,
    delay,
    timingFunction,
  ) {
    this.object = object;
    this.template =
      template ||
      ((v) => {
        return `rgba(${v.r}, ${v.g}, ${v.b}, ${v.a})`;
      });
    this.property = property;
    this.start = start;
    this.end = end;
    this.duration = duration;
    this.delay = delay || 0;
    this.timingFunction = timingFunction;
  }

  valueFromProgression(progression) {
    return {
      // r:
    };
  }
}

let linear = (t) => t;
let ease = cubicBezier(0.24, 0.1, 0.25, 1);

let el = document.getElementById('el');
let el2 = document.getElementById('el2');
let tl = new TimeLine();

tl.add(
  new Animation(
    el.style,
    'transform',
    (v) => {
      return `translate(${v}px)`;
    },
    0,
    200,
    5000,
    0,
    linear,
  ),
);

tl.start();

document.getElementById('pause-btn').addEventListener('click', () => {
  tl.pause();
});

document.getElementById('resume-btn').addEventListener('click', () => {
  tl.resume();
});

document.getElementById('el2-start-btn').addEventListener('click', () => {
  tl.add(
    new Animation(
      el2.style,
      'transform',
      (v) => {
        return `translate(${v}px)`;
      },
      0,
      200,
      5000,
      0,
      linear,
    ),
    // 0,
  );
});

// document.getElementById('el2').style.transform = 'translateX(200px)';

/* 
let animation = new Animation(object, property, start, end, duration, delay, timingFunction)
let animation2 = new Animation(object2, property2, start, end, duration, delay, timingFunction)
let timeLine = new TimeLine
timeLine.add(animation)
timeLine.add(animation2)
timeLine.start()
timeLine.pause()
timeLine.resume()
timeLine.stop()
setTimeout
setInterval
requestAnimationFrame
 */