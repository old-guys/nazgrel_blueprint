# Group Auth

## 登陆 [/api/channel/auth/login{?device}]

### 用户登陆 [POST]
用户登陆

+ Parameters
    + device: h5 (string, required) - 设备类型

+ Request
    + Body

            {
                "login": "test@qq.com",
                "password": "11111111"
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + id 1 (number) - 用户 `id`
            + email test@qq.com (string) - 用户邮箱
            + created_at (string) - 创建时间
            + updated_at (string) - 更新时间
            + user_token (string) - 用户Token
    + Body

            {
                "code": 0,
                "data": {
                    "id": 1,
                    "email": "test@qq.com",
                    "created_at": "2017-11-08T07:53:13.000Z",
                    "updated_at": "2017-11-09T07:29:25.000Z",
                    "user_token":"waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4="
                }
            }

## ping db [/api/channel/auth/ping_db{?device,user_token}]
### ping api 服务器数据库 [GET]
ping api 服务器数据库，得到最新的用户信息

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

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
