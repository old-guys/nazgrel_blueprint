# Group Ping

## Ping [/api/channel/ping{?device}]

### Request ping [GET]
ping api 服务器

+ Parameters
    + device: h5 (string, required) - 设备类型

+ Response 200 (application/json;charset=UTF-8)
    + Body

            {
                "ping": "pong"
            }

## ping db [/api/channel/ping/ping_db{?device}]
### Request ping_db [GET]
ping api 服务器数据库，得到最新的用户信息

+ Attributes (object)
    + id 1 (number) - 用户 `id`
    + email test@qq.com (string) - 用户邮箱
    + created_at (string) - 创建时间
    + updated_at (string) - 更新时间

+ Parameters
    + device: h5 (string, required) - 设备类型

+ Response 200 (application/json;charset=UTF-8)
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
