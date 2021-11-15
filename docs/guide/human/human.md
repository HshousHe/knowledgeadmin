## 自定义摄像区域

### 1.核心 api

```js
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(success)
  .catch(error);
```

查看参数说明 [MediaDevices.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)

### 2.使用

::: tip child_process
navigator.mediaDevices.getUserMedia 可能一些古老的东西会存在一些兼容问题 所以需要做兼容适配 具体如下
:::

### 1.创建 video 标签写入自定义摄影框

```html
<video
  :controls="false"
  :show-center-play-btn="false"
  playsinline
  webkit-playsinline="true"
  id="video"
  object-fit="cover"
  class="videocode"
></video>
```

### 2.调用摄像头给 video 推流

```js
    // 回调
    successFunc(stream) {
      console.log(stream);
      this.mediaStreamTrack = stream;
      this.video = document.querySelector("video");
      if ("srcObject" in this.video) {
        this.video.srcObject = stream;
      } else {
        this.video.src =
          (window.URL && window.URL.createObjectURL(stream)) || stream;
      }
      this.video.play();
    }

    errorFunc(err) {
      alert(err.name);
    }

    //访问用户媒体设备的兼容方法
    getUserMedia(constraints, success, error) {
      if (navigator.mediaDevices.getUserMedia) {
        //最新的标准API
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(success)
          .catch(error);
      } else if (navigator.webkitGetUserMedia) {
        //webkit核心浏览器
        navigator.webkitGetUserMedia(constraints, success, error);
      } else if (navigator.mozGetUserMedia) {
        //firfox浏览器
        navigator.mozGetUserMedia(constraints, success, error);
      } else if (navigator.getUserMedia) {
        //旧版API
        navigator.getUserMedia(constraints, success, error);
      }
    }
```

### 3.使用画布截取 video 图片

```js
    //生成图片
    Getcanversimg() {
      var canvas = document.createElement("canvas");
      canvas.width = this.video.videoWidth;
      canvas.height = this.video.videoHeight;
      canvas
        .getContext("2d")
        .drawImage(this.video, 0, 0, canvas.width, canvas.height);
      let src = canvas.toDataURL("image/png");
    },
```

## 视频生成字节码

```js
navigator.mediaDevices.getUserMedia(constraints).then((res) => {
  // 使用MediaStream Recording API
  const recorder = new MediaRecorder();
  //每秒触发一次并传递一个BlobEvent
  recorder.ondataavailable = (event) => {
    //从事件中获取Blob
    const blob = event.data;
    console.log(window.URL.createObjectURL(blob));
  };
  // //每秒钟使数据可用事件触发
  recorder.start(10000);
});
```
