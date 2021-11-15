## H5 中的微信支付

::: tip 介绍
调用微信内置浏览的宿主 api 只能在微信中使用 需要做宿主判断
:::

```js
//解决微信内置对象报错
function weixinPay(params) {
  var that = this;
  if (typeof WeixinJSBridge == "undefined") {
    if (document.addEventListener) {
      document.addEventListener(
        "WeixinJSBridgeReady",
        that.onBridgeReady(params),
        false
      );
    } else if (document.attachEvent) {
      document.attachEvent("WeixinJSBridgeReady", that.onBridgeReady(params));
      document.attachEvent("onWeixinJSBridgeReady", that.onBridgeReady(params));
    }
  } else {
    that.onBridgeReady();
  }
}
//微信内置浏览器类，weChatParameter对象中的参数是3.步骤代码中从后端获取的数据
function onBridgeReady() {
  var that = this;
  var timestamp = Math.round(that.weChatParameter.timeStamp).toString();
  WeixinJSBridge.invoke(
    "getBrandWCPayRequest",
    {
      debug: false,
      appId: that.weChatParameter.appId, //公众号名称，由商户传入
      timeStamp: timestamp, //时间戳，自1970年以来的秒数
      nonceStr: that.weChatParameter.nonceStr, //随机串
      package: that.weChatParameter.package,
      signType: that.weChatParameter.signType, //微信签名方式：
      paySign: that.weChatParameter.paySign, //微信签名
      jsApiList: ["chooseWXPay"],
    },
    function(res) {
      // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      if (res.err_msg == "get_brand_wcpay_request:ok") {
        //支付成功后的操作
      } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
        //取消支付的操作
      } else {
        //支付失败的操作
      }
    }
  );
}
```

查看详情 [微信开发者文档](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)
