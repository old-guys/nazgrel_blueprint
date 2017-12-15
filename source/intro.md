# Group Introduction

## Api 请求目录

目前系统按照 `api/${type}` 来区分请求哪个平台

- `channel` 渠道 app 接口
- `mobile` BI 接口
- `web`, `pc` PC 接口

## 认证参数

::: note
#### <i class="fa fa-warning"></i> 关于头部参数和URI参数

* URI 参数是指将参数按照 `url-encode` 编码的形式放入请求 url
* 头部参数是指在请求头部信息中放入参数数据, 这里我们用于认证的参数名是 `Authorization`
:::

登录成功后，可以在请求参数中携带身份验证信息（即在请求参数中传、user_token、version_code、device），也可以将身份信息放到请求头的Authorization里，即在每个请求头中都加入如下参数：

```http
Authorization: Token token="{user_token}",version_code="{version_code}",device="{device}"
```

::: note
## Extensions
Some non-standard Markdown extensions are also supported, such as this informational container, which can also contain **formatting**. Features include:

* Informational block fenced with `::: note` and `:::`
* Warning block fenced with `::: warning` and `:::`
* [x] GitHub-style checkboxes using `[x]` and `[ ]`
* Emoji support :smile: :ship: :cake: using `:smile:` ([cheat sheet](http://www.emoji-cheat-sheet.com/))

These extensions may change in the future as the [CommonMark specification](http://spec.commonmark.org/) defines a [standard extension syntax](https://github.com/jgm/CommonMark/wiki/Proposed-Extensions).
:::

## API 统一格式

正确结果

```json
{ "code": 0, "data": {} }
```

错误结果

```json
{ "code": 10000, "message": "" }
```

## API 参数说明

全局输入参数说明

字段名 | 是否必填 | 描述
--:   | ------- | -----------
user_token | true | 必须要有的（除了登陆接口）
version_code | true | 必须要有的
device | true | 设备类型（ios, android, h5, pc）

全局返回参数说明

字段名 | 数据类型 | 描述
--:   | ------  | -----------
code | int | 返回代码，`0` 表示返回结果正常，其它值表示出错
message | string | 错误消息（当`code`不为`0`时，返回该字段）
remark | string | 用户可读的消息
data | json | 实际数据（当`code`为`0`时，返回该字段）

## 约定
::: note
#### <i class="fa fa-warning"></i> 关于返回参数空值

* 数据结构是 `object` 的空值返回 `{}`
* 数据结构是 `array` 的空值返回 `[]`
:::