如果你正在使用 `markdown` 来编写 `api` 文档的话，**API Blueprint** 一定会成为你的更好的选择。
API Blueprint 是一套基于 `markdown` 的 `API` 描述语言规范。

## 语法与例子

学习 API Blueprint Language 非常简单, 只要你有用 markdown 写过东西, 那你一定能快速的掌握它.

首先, 查看官方提供的[例子](https://github.com/apiaryio/api-blueprint/tree/master/examples) .

然后可以看一下 [语法规范](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md) , 当前的稳定版本是 1A9。

官方的解释器 是完全支持 1A9 格式的。有了这个解析器，就可以很容易的扩展自己的相关工具了（比如代码生成等）。

## 配套工具

### 编辑器插件

对于不熟悉语法的同学，强烈建议安装预览插件，相当于即时检查。

*  [sublime](https://github.com/apiaryio/api-blueprint-sublime-plugin)
*  [atom-language](https://atom.io/packages/language-api-blueprint)
*  [atom-preview](https://atom.io/packages/api-blueprint-preview)
*  [vim](https://github.com/kylef/apiblueprint.vim)

### Mock 服务

*  [api-mock](https://github.com/localmed/api-mock)
*  [drakov](https://github.com/Aconex/drakov)

两者都是可以根据 api-blueprint 的文档创建一个本地的 mock server 的工具。使用它们可以避免前后端开发在时间差上的无谓等待。

安装与使用都非常简单，确保本地装有 node 环境：

```shell
npm install -g api-mock
api-mock ./apiary.md --port 3000
```

```shell
npm install -g drakov
drakov -f apiary.md -p 3000
```

## 静态 HTML 生成

`aglio` 是一个可以根据 api-blueprint 的文档生成静态 HTML 页面的工具。

其生成的工具不是简单的 markdown 到 html 的转换, 而是可以生成类似 rdoc 这样的拥有特定格式风格的查询文档。

安装与使用都非常简单，确保本地装有 node 环境：

```shell
npm install -g aglio
aglio -i foo.md -o bar.html
```

## Get Started

新建一个 `hello.md` 文件, 输入如下内容:

```markdown
FORMAT: 1A9

# Example API

hello world

## 消息 [/messages]

### 获取消息 [GET]

+ Response 200 (application/json)

        {
          "hello": "world",
          "foo": 'bar'
        }

## message [/message]

### Create a New Message [POST]

You may create your own message using this action. It takes a JSON object
containing a message.

+ message (string) - The message

+ Request (application/json)

            {
                "message": "who?"
            }

+ Response 201 (application/json)

    + Headers

            Location: /messages/1

    + Body

            {
                "message": "who?",
                "published_at": "2014-11-11T08:40:51.620Z",
                "url": "/messages/1"
            }
```

然后试着

```shell
aglio -i hello.md -o hello.html
```

来看看生成的 html 文档.

再试试

```shell
api-mock ./hello.md --port 3000
```

或者

```shell
drakov -f ./hello.md -p 3000
````

访问 `localhost:3000/message`, 以及

```shell
curl localhost:3000/message -H "Content-Type: application/json" -X POST -d '{"message": "who?"}'
```

## 如何给 BI 编写文档

我们可以考虑单独创建一个 api 文档 repo，并且基于 Blueprint 规范来编写文档，最后通过 aglio 来生成
静态的 html

## 参考资料

- [aglio guide](https://github.com/danielgtaylor/aglio)
- [blueprint tutorial](https://apiblueprint.org/documentation/examples)
- [blueprint bpecification](https://apiblueprint.org/documentation/specification.html)
- [drakov guide](https://github.com/Aconex/drakov)
