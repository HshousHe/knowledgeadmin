## **proto** 怎么读

**proto** 读作“dunder proto”，“double underscore proto”的缩写。并且它前后两边 分别是 两个 “\_”(下划线)。

::: tip 用途
**proto**属性来连接对象，直到 null，就是所谓的“原型链”
:::

## 为什么 浏览器的 navigator.appCodeName 永远是 ‘Mozilla’ (火狐浏览器的内核)

::: tip 了解
以下内容来自机翻请加上个人语言感情阅读理解 看完之后发现竟是一个有趣的故事
:::

#### 浏览器用户代理字符串的历史记录

最初有 NCSA Mosaic, Mosaic 自称为 NCSA_Mosaic/2.0 (Windows 3.1)， Mosaic 显示图片和文本，有很多令人欣喜的地方。

瞧，后来又出现了一种名为“Mozilla”的新浏览器，是“Mosaic Killer”的缩写，但 Mosaic 并不觉得好笑，于是更名为 Netscape，网景也称自己为 Mozilla/1.0 (Win3.1)。 Netscape 支持框架，框架在人们中流行起来，但是 Mosaic 不支持框架，因此出现了“用户代理嗅探”，“Mozilla”网站管理员向“Mozilla”发送框架，但向其他浏览器不发送框架。

网景说，让我们取笑微软，称 Windows 为"调试不良的设备驱动程序"微软很生气。 于是微软开发了自己的网络浏览器，他们称之为 Internet Explorer，希望它能成为“网景杀手”。 Internet Explorer 支持框架，但不是 Mozilla，所以没有框架。 微软变得不耐烦了，不希望等待网站管理员了解 IE 并开始发送帧，因此 IE 宣布它是“Mozilla 兼容的”，并开始模仿网景，称自己为 Mozilla/1.22(兼容; MSIE 2.0; Windows 95)和 ie 浏览器都收到了帧，所有微软公司都很高兴，但网站管理员们却很困惑。

微软将 IE 与 Windows 一起销售，并使其优于网景，于是第一次浏览器大战在这片土地上打响。 看，网景被杀了，而微软却欢欣鼓舞。 但是网景以 Mozilla 的名字重生了，Mozilla 开发了 Gecko，并将自己命名为 Mozilla/5.0 (Windows; U; Windows NT 5.0; en - us; rv:1.1) Gecko/20020826, Gecko 是渲染引擎，Gecko 很好。 后来，Mozilla 变成了火狐，并将自己命名为 Mozilla/5.0 (Windows; U; Windows NT 5.1; sv-SE; rv:1.7.5) Gecko/20041108 Firefox/1.0, Firefox 非常好。 Gecko 开始繁衍，其他使用它代码的浏览器也诞生了，它们称自己为 Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en - us; rv:1.7.2) Gecko/20040825 Camino/0.8.1 的一个，和 Mozilla/5.0 (Windows; U; Windows NT 5.1; 德; 另一个是 Gecko/20071008 SeaMonkey/1.0，每个都假装是 Mozilla，所有这些都是由 Gecko 驱动的。

Gecko 很好，IE 不行，嗅探得到了重生，Gecko 得到了很好的网页代码，其他浏览器没有。 和 Linux 的追随者从忧愁,因为他们建造了 Konqueror,引擎的 KHTML,他们认为和壁虎一样好,但它不是壁虎,所以没有考虑到良好的页面,所以 Konquerer 开始假装“壁虎”页面,并自称 Mozilla / 5.0(兼容; Konqueror / 3.2; FreeBSD) (KHTML，像 Gecko)，还有很多混乱。

然后是 Opera，它说:“我们当然应该让用户来决定我们应该模仿哪个浏览器。”于是 Opera 创建了一个菜单项，并将自己命名为 Mozilla/4.0(兼容; MSIE 6.0; Windows NT 5.1; en) Opera 9.51，或 Mozilla/5.0 (Windows NT 6.0; U; en; Gecko/20061208 Firefox/2.0.0 Opera 9.51，或 Opera/9.51 (Windows NT 5.1; U; En)取决于用户选择的选项。

苹果开发了 Safari，并使用了 KHTML，但添加了许多功能，并将项目分成了分支，并将其命名为 WebKit，但希望为 KHTML 编写页面，因此 Safari 称自己为 Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML，像 Gecko) Safari/85.5，它变得更糟。

微软非常害怕火狐，于是 ie 卷土重来，称自己为 Mozilla/4.0(兼容; MSIE 8.0; Windows NT 6.0)，它呈现良好的代码，但只有在网站管理员命令它这样做。

谷歌构建了 Chrome, Chrome 使用了 Webkit，就像 Safari，想要为 Safari 构建页面，所以假装自己是 Safari。 因此 Chrome 使用 WebKit，假装是 Safari, WebKit 假装是 KHTML, KHTML 假装是 Gecko，所有的浏览器都假装是 Mozilla, Chrome 称自己为 Mozilla/5.0 (Windows; U; Windows NT 5.1; 苹果 webkit /525.13 (KHTML，像 Gecko) Chrome/0.2.149.27 Safari/525.13，用户代理字符串是一个完全混乱的，几乎无用，每个人都假装是其他所有人，充满了困惑。

原文地址 [https://webaim.org/](https://webaim.org/blog/user-agent-string-history/)

## 一段离谱的正则

Mail::RFC822::Address:基于 regexp 的地址验证  
Mail::RFC822::Address 是一个 Perl 模块，用于根据 RFC822 语法验证电子邮件地址。 它提供了与 RFC::RFC822::Address 相同的功能，但使用 Perl 正则表达式而不是 Parse::RecDescent 解析器。 这意味着加载模块要快得多，因为它不需要在启动时编译语法。

下载 Mail::RFC822::Address-0.4.tar.gz 或阅读文档。

如果您想测试模块的行为，可以使用在线版本。

RFC 822 中描述的语法非常复杂。 使用正则表达式实现验证在某种程度上突破了使用正则表达式所能做的事情的限制，尽管 Perl 处理得很好。 下面的正则表达式显示了复杂性，尽管它在本页上的包含引起了一些混淆:

我没有手写这个正则表达式。 它是由 Perl 模块通过连接一组更简单的正则表达式生成的，这些正则表达式直接与 RFC 中定义的语法相关。  
正则表达式不处理电子邮件地址中的注释。 RFC 允许任意嵌套注释。 单个正则表达式无法处理此问题。 Perl 模块对电子邮件地址进行预处理，以便在应用邮件正则表达式之前删除注释。  
我不维护下面的正则表达式。 其中可能有一些在 Perl 模块中已经修复的错误。

正则地址 [点击查看](http://www.ex-parrot.com/~pdw/Mail-RFC822-Address.html)

## 下划线命名对象键值 直呼恶心心

::: tip 用途
就是在一次逛知乎看了一段全是下划线命名变量的代码 于是自己用 js 尝试着写了一下
就图一乐 代码很简单 嘿嘿
效果如下 也实现了反编译的
:::

```js
// 使用
let key = "queryyy";
let testdata = {};
let Keydata = { name: "shou", age: 12, set: "男" };
let keyValue = new rulercode();
testdata[keyValue.compiler("name")] = "shou";
testdata[keyValue.compiler("age")] = "12";
testdata[keyValue.compiler("set")] = "男";
```

方法

```js
class rulercode {
  searching = [];
  codecharacter =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-=_/.|";
  constructor(data = false) {
    this.iscode = data;
    this.searchinginit();
  }
  searchinginit() {
    for (let i = 0; i < this.codecharacter.length; i++) {
      this.searching.push({
        index: i + 1,
        keyValue: this.codecharacter.charAt(i),
      });
    }
  }
  compiler(edata) {
    let data = [];
    this.searching.map((item) => {
      for (let i = 0; i < edata.length; i++) {
        let _length = 0;
        let _string = new String();
        if (item.keyValue == edata[i]) {
          for (let t = 0; t < item.index; t++) {
            _string += "_";
          }
          data.push({
            value: _string,
            index: i,
          });
        }
      }
    });
    data = data.sort(this.cpmpare("index"));
    let rundata = [];
    data.map((item) => {
      rundata.push(item.value);
    });
    if (this.iscode) {
      return rundata.join("-");
    } else {
      return rundata.join("");
    }
  }
  cpmpare(property) {
    return function(a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
    };
  }
  reverse(data) {
    let _stringdata = data.split("-");
    let _codedata = new String();
    _stringdata.map((item) => {
      let _stringketlength = 0;
      for (let i = 0; i < item.length; i++) {
        _stringketlength++;
      }
      this.searching.map((itemall) => {
        if (itemall.index == _stringketlength) {
          _codedata += itemall.keyValue;
        }
      });
    });
    return _codedata;
  }
}
```
