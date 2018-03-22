# Group Ping

## Ping [/api/zmall/mobile/ping{?device}]

### 服务器 [GET]
ping api 服务器

+ Parameters
    + device: h5 (string, required) - 设备类型

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + ping: ping (string)
    + Body

            {
                "ping": "ping"
            }

## ping db [/api/zmall/mobile/ping/ping_db{?device}]
### 服务器数据库 [GET]
ping api 服务器数据库，得到最新的用户信息

+ Parameters
    + device: h5 (string, required) - 设备类型

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + id 1 (number) - 用户 `id`
            + email test@qq.com (string) - 用户邮箱
            + created_at (string) - 创建时间
            + updated_at (string) - 更新时间
    + Body

            {
                "code": 0,
                "data": {
                    "id": 1,
                    "email": "test@qq.com",
                    "created_at": "2017-11-08T07:53:13.000Z",
                    "updated_at": "2017-11-08T09:43:49.000Z"
                }
            }
