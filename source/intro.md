# Group Introduction

## 认证参数
登录成功后，可以在请求参数中携带身份验证信息（即在请求参数中传、user_token、version_code、device），也可以将身份信息放到请求头的Authorization里，即在每个请求头中都加入如下参数：

        Authorization: Token token="{user_token}",version_code="{version_code}",device="{device}"

## API 统一格式

正确结果

        { "code": 0, "data": {} }

错误结果

        { "code": 10000, "message": "" }

## API 参数说明

全局输入参数说明
字段名 | 是否必填 | 描述
--------- | ------- | -----------
user_token | true | 必须要有的（除了登陆接口）
version_code | true | 必须要有的
device | true | 设备类型（ios, android, h5, pc）

全局返回参数说明
字段名 | 数据类型 | 描述
--------- | --------- | -----------
code | int | 返回代码，`0` 表示返回结果正常，其它值表示出错
message | string | 错误消息（当`code`不为`0`时，返回该字段）
remark | string | 用户可读的消息
data | json | 实际数据（当`code`为`0`时，返回该字段）
