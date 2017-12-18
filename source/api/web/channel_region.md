# Group ChannelRegions

## 渠道大区 [/api/web/channel_regions{?device,user_token,order,query,filters%5b%5d}]
### 渠道大区列表 [GET]
获取渠道大区列表 数据

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: `channel_regions.id desc` (string, optional) - 排序
        + Members
            + channel_regions.id desc
            + channel_regions.created_at desc
    + query: 北京 (string, optional) - 查询
    + filters%5b%5d: filters%5B%5D%5Bfield_type%5D=datetime&filters%5B%5D%5Bname%5D=created_at&filters%5B%5D%5Boperator%5D=within&filters%5B%5D%5Bquery%5D=today (array[Filter], optional) - 过滤参数
        + For example: `filters[][field_type]=datetime&filters[][name]=created_at&filters[][operator]=within&filters[][query]=today`

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 366 (number) - 总条数
            + total_pages: 124 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SampleChannelRegion])

    + Body

            {
              "code": 0,
              "data": {
                "total_count": 1,
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
                    "name": "测试渠道大区",
                    "status": "normal",
                    "status_text": "正常",
                    "updated_at": "2017-11-23T22:42:18.000+08:00",
                    "created_at": "2017-11-23T22:42:18.000+08:00",
                    "channel_users": [
                      {
                        "id": 4,
                        "name": "",
                        "phone": "14524525245",
                        "channel_id": null,
                        "channel_region_id": 2,
                        "role_type": "region_manager",
                        "role_type_text": "渠道管理员",
                        "shopkeeper_user_id": null,
                        "shop_id": null,
                        "created_at": "2017-11-23T22:34:45.000+08:00",
                        "updated_at": "2017-11-23T22:42:18.000+08:00"
                      }
                    ]
                  }
                ]
              }
            }

### 创建渠道大区 [POST]
创建渠道大区

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Request (application/json)
    + Attributes (object)
        + channel_region (ChannelRegionParams)
            + name: 测试渠道大区 (string, required) - 渠道大区名称
            + channel_user (object) - 渠道大区用户信息
                + phone: 12151345123 (string, required) - 手机号
                + email: 12151345123@qq.com (string, required) - 邮箱
                + password: 11111111 (string, required) - 密码

    + Body

            {
                "channel_region": {
                    "name": "测试总代",
                    "channel_user": {
                        "phone": "12151345123",
                        "email": "12151345123@qq.com",
                        "password": "11111111"
                    }
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannelRegion)

    + Body

            {
              "code": 0,
              "data": {
                "id": 2,
                "name": "测试渠道大区",
                "status": "normal",
                "status_text": "正常",
                "updated_at": "2017-11-23T22:42:18.000+08:00",
                "created_at": "2017-11-23T22:42:18.000+08:00",
                "channel_users": [
                  {
                    "id": 4,
                    "name": "",
                    "phone": "14524525245",
                    "channel_id": null,
                    "channel_region_id": 2,
                    "role_type": "region_manager",
                    "role_type_text": "渠道管理员",
                    "shopkeeper_user_id": null,
                    "shop_id": null,
                    "created_at": "2017-11-23T22:34:45.000+08:00",
                    "updated_at": "2017-11-23T22:42:18.000+08:00"
                  }
                ]
              }
            }


## 查看或者编辑渠道大区 [/api/web/channel_regions/{id}{?device,user_token}]
### 渠道大区详情 [GET]
通过渠道大区ID 获取渠道大区详情

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (string, required) - 渠道大区ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannelRegion)

    + Body

            {
              "code": 0,
              "data": {
                "id": 2,
                "name": "测试渠道大区",
                "status": "normal",
                "status_text": "正常",
                "updated_at": "2017-11-23T22:42:18.000+08:00",
                "created_at": "2017-11-23T22:42:18.000+08:00",
                "channel_users": [
                  {
                    "id": 4,
                    "name": "",
                    "phone": "14524525245",
                    "channel_id": null,
                    "channel_region_id": 2,
                    "role_type": "region_manager",
                    "role_type_text": "渠道管理员",
                    "shopkeeper_user_id": null,
                    "shop_id": null,
                    "created_at": "2017-11-23T22:34:45.000+08:00",
                    "updated_at": "2017-11-23T22:42:18.000+08:00"
                  }
                ]
              }
            }

### 更新渠道大区 [PUT]
通过渠道大区id更新渠道大区的名称, 登陆密码, 状态等

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (number, required) - 渠道大区id

+ Request (application/json)
    + Attributes (object)
        + channel_region (ChannelRegionParams)
            + name: 测试渠道大区 (string, required) - 渠道大区名称
            + status: normal (enum[string]) - 状态
                  + Members
                      + normal
                      + locked
            + channel_user (object) - 渠道大区用户信息
                + password: 11111111 (string, required) - 密码

    + Body

            {
                "channel": {
                    "name": "测试渠道大区",
                    "channel_user": {
                        "password": "11111111"
                    }
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannelRegion)

    + Body

            {
              "code": 0,
              "data": {
                "id": 2,
                "name": "测试渠道大区",
                "status": "normal",
                "status_text": "正常",
                "updated_at": "2017-11-23T22:42:18.000+08:00",
                "created_at": "2017-11-23T22:42:18.000+08:00",
                "channel_users": [
                  {
                    "id": 4,
                    "name": "",
                    "phone": "14524525245",
                    "channel_id": null,
                    "channel_region_id": 2,
                    "role_type": "region_manager",
                    "role_type_text": "渠道管理员",
                    "shopkeeper_user_id": null,
                    "shop_id": null,
                    "created_at": "2017-11-23T22:34:45.000+08:00",
                    "updated_at": "2017-11-23T22:42:18.000+08:00"
                  }
                ]
              }
            }

## Data Structures
### ChannelRegionParams (object)
+ name: 测试总代 (string) - 渠道大区名称
+ channel_user (object)
    + name: 测试 (string) - 名称
### SampleChannelRegion (object)
+ id: 1 (number) - 渠道大区ID
+ name: 测试总代 (string) - 渠道大区名称
+ channel_user (object)
    + id: 1 (number) - 用户ID
    + name: 测试 (string) - 名称
    + phone: 1234567890 (string) - 手机
    + created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
    + updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
