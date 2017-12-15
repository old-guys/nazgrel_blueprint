# Group ChannelUesrs

## 渠道 [/api/web/channel_users{?device,user_token,channel_id}]
### 渠道列表 [GET]
获取渠道列表 数据

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + channel_id: 1 (number, optional) - 渠道ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 2 (number) - 总条数
            + total_pages: 1 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SampleChannelUser])

    + Body

            {
              "code": 0,
              "data": {
                "total_count": 2,
                "total_pages": 1,
                "current_page": 1,
                "next_page": null,
                "prev_page": null,
                "first_page?": true,
                "last_page?": true,
                "per_page": 15,
                "page": 0,
                "models": [
                  {
                    "id": 2,
                    "name": "",
                    "phone": "124525245",
                    "channel_id": 1,
                    "role_type": "normal_user",
                    "role_type_text": "普通用户",
                    "shopkeeper_user_id": 26049,
                    "shop_id": 1,
                    "created_at": "2017-11-22T13:39:38.000+08:00",
                    "updated_at": "2017-11-22T13:39:38.000+08:00"
                  },
                  {
                    "id": 1,
                    "name": "",
                    "phone": "1234567890",
                    "channel_id": 1,
                    "role_type": "normal_user",
                    "role_type_text": "普通用户",
                    "shopkeeper_user_id": 25998,
                    "shop_id": 2,
                    "created_at": "2017-11-16T14:42:21.000+08:00",
                    "updated_at": "2017-11-20T12:25:32.000+08:00"
                  }
                ]
              }
            }

### 创建渠道用户 [POST]
创建渠道用户

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Request (application/json)
    + Attributes (object)
        + channel_user (ChannelUserParams)
            + name: 测试总代 (string, required) - 渠道用户名称
            + phone: 123456789 (number, required) - 手机号
            + password: 11111111 (string, required) - 密码
            + role_type: manager (enum[string], required) - 角色类型
                + Members
                    + manager
                    + normal_user
            shopkeeper_user_id: 25998 (string, optional) - 角色类型

    + Body

            {
                "channel_user": {
                    "name": "测试总代",
                    "phone": "123456789",
                    "password": "11111111",
                    "role_type": "manager",
                    "shopkeeper_user_id": "25998"
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannelUser)

    + Body

            {
              "code": 0,
              "data": {
                "id": 2,
                "name": "",
                "phone": "124525245",
                "channel_id": 1,
                "role_type": "normal_user",
                "role_type_text": "普通用户",
                "shopkeeper_user_id": 26049,
                "shop_id": 1,
                "created_at": "2017-11-22T13:39:38.000+08:00",
                "updated_at": "2017-11-22T13:39:38.000+08:00"
              }
            }


## 查看或者编辑渠道用户 [/api/web/channels_users/{id}{?device,user_token}]
### 渠道用户详情 [GET]
通过渠道用户ID 获取渠道用户详情

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (string, required) - 渠道用户ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannelUser)

    + Body

            {
              "code": 0,
              "data": {
                "id": 2,
                "name": "",
                "phone": "124525245",
                "channel_id": 1,
                "role_type": "normal_user",
                "role_type_text": "普通用户",
                "shopkeeper_user_id": 26049,
                "shop_id": 1,
                "created_at": "2017-11-22T13:39:38.000+08:00",
                "updated_at": "2017-11-22T13:39:38.000+08:00"
              }
            }

### 更新渠道用户 [PUT]
通过渠道id更新渠道用户的名称, 登陆密码, 状态等

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (number, required) - 渠道用户id

+ Request (application/json)
    + Attributes (object)
        + channel_user (ChannelUserParams)
            + name: 测试总代 (string, required) - 渠道用户名称
            + phone: 123456789 (number, required) - 手机号
            + password: 11111111 (string, required) - 密码
            + role_type: manager (enum[string], required) - 角色类型
                + Members
                    + manager
                    + normal_user

    + Body

            {
                "channel_user": {
                    "name": "测试总代",
                    "phone": "123456789",
                    "password": "11111111",
                    "role_type": "manager"
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannelUser)

    + Body

            {
              "code": 0,
              "data": {
                "id": 2,
                "name": "",
                "phone": "124525245",
                "channel_id": 1,
                "role_type": "normal_user",
                "role_type_text": "普通用户",
                "shopkeeper_user_id": 26049,
                "shop_id": 1,
                "created_at": "2017-11-22T13:39:38.000+08:00",
                "updated_at": "2017-11-22T13:39:38.000+08:00"
              }
            }

### 删除渠道用户 [DELETE]
通过渠道id删除渠道用户

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (number, required) - 渠道用户id

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannelUser)

    + Body

            {
              "code": 0,
              "data": {
                "id": 2,
                "name": "",
                "phone": "124525245",
                "channel_id": 1,
                "role_type": "normal_user",
                "role_type_text": "普通用户",
                "shopkeeper_user_id": 26049,
                "shop_id": 1,
                "created_at": "2017-11-22T13:39:38.000+08:00",
                "updated_at": "2017-11-22T13:39:38.000+08:00"
              }
            }

## Data Structures
### ChannelUserParams (object)
+ name: 测试总代 (string) - 渠道用户名称
### SampleChannelUser (object)
+ id: 1 (number) - 用户ID
+ name: 测试 (string) - 名称
+ phone: 1234567890 (string) - 手机
+ channel_id: 1 (number) - 渠道
+ role_type: normal_user (enum[string]) - 角色类型
      + Members
          + manager
          + normal_user
+ role_type_text: 普通用户 (enum[string]) - 角色类型
      + Members
          + 管理员
          + 普通用户
+ shopkeeper_user_id: 1 (number) - 店主用户ID
+ shop_id: 2 (number) - 店铺ID
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
