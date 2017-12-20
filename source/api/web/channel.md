# Group 渠道

## 渠道 [/api/web/channels{?device,user_token,order,query,filters%5b%5d}]
### 渠道列表 [GET]
获取渠道列表 数据

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: `channels.id desc` (string, optional) - 排序
        + Members
            + channels.id desc
            + channels.created_at desc
    + query: 测试 (string, optional) - 查询
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
            + models (array[SampleChannel])

    + Body

            {
              "code": 0,
              "data": {
                "total_count": 0,
                "per_page": 1,
                "page": 0,
                "models": [
                  {
                    "id": 1,
                    "name": "测试总代",
                    "category": "seed_shopkeeper",
                    "category_text": "种子店主",
                    "source": "always",
                    "source_text": "奥维思",
                    "status": "normal",
                    "status_text": "正常",
                    "updated_at": "2017-11-16T14:42:21.000+08:00",
                    "created_at": "2017-11-16T14:42:21.000+08:00",
                    "channel_user": {
                      "id": 1,
                      "name": "",
                      "phone": "1234567890",
                      "created_at": "2017-11-16T14:42:21.000+08:00",
                      "updated_at": "2017-11-19T16:40:31.000+08:00"
                    }
                  }
                ]
              }
            }

### 创建渠道 [POST]
创建渠道

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Request (application/json)
    + Attributes (object)
        + channel (ChannelParams)
            + name: 测试总代 (string, required) - 渠道名称
            + category: seed_shopkeeper (string, required) - 渠道类型
            + source: always (string, required) - 渠道来源
            + shopkeeper_user_id: 25998 (number, required) - 店主用户ID
            + channel_user (object) - 渠道用户信息
                + password: 11111111 (string, required) - 密码

    + Body

            {
                "channel": {
                    "name": "测试总代",
                    "category": "seed_shopkeeper",
                    "source": "always",
                    "shopkeeper_user_id": "25998",
                    "channel_user": {
                        "password": "11111111"
                    }
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannel)

    + Body

            {
              "code": 0,
              "data": {
                "id": 1,
                "name": "测试总代",
                "category": "seed_shopkeeper",
                "category_text": "种子店主",
                "source": "always",
                "source_text": "奥维思",
                "status": "normal",
                "status_text": "正常",
                "updated_at": "2017-11-16T14:42:21.000+08:00",
                "created_at": "2017-11-16T14:42:21.000+08:00",
                "channel_user": {
                  "id": 1,
                  "name": "",
                  "phone": "1234567890",
                  "created_at": "2017-11-16T14:42:21.000+08:00",
                  "updated_at": "2017-11-19T16:40:31.000+08:00"
                }
              }
            }


## 查看或者编辑渠道 [/api/web/channels/{id}{?device,user_token}]
### 渠道详情 [GET]
通过渠道ID 获取渠道详情

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (string, required) - 渠道ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannel)

    + Body

            {
              "code": 0,
              "data": {
                "id": 1,
                "name": "测试总代",
                "category": "seed_shopkeeper",
                "category_text": "种子店主",
                "source": "always",
                "source_text": "奥维思",
                "status": "normal",
                "status_text": "正常",
                "updated_at": "2017-11-16T14:42:21.000+08:00",
                "created_at": "2017-11-16T14:42:21.000+08:00",
                "channel_user": {
                  "id": 1,
                  "name": "",
                  "phone": "1234567890",
                  "created_at": "2017-11-16T14:42:21.000+08:00",
                  "updated_at": "2017-11-19T16:40:31.000+08:00"
                }
              }
            }

### 更新渠道 [PUT]
通过渠道id更新渠道的名称, 登陆密码, 状态等

+ Parameters
    + device: web (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 1 (number, required) - 渠道id

+ Request (application/json)
    + Attributes (object)
        + channel (ChannelParams)
            + name: 测试总代 (string, required) - 渠道名称
            + status: locked (string) - 渠道状态
            + channel_user (object) - 渠道用户信息
                + password: 11111111 (string, required) - 密码

    + Body

            {
                "channel": {
                    "name": "测试总代",
                    "category": "seed_shopkeeper",
                    "status": "always",
                    "channel_user": {
                        "password": "11111111"
                    }
                }
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (SampleChannel)

    + Body

            {
              "code": 0,
              "data": {
                "id": 1,
                "name": "测试总代",
                "category": "seed_shopkeeper",
                "category_text": "种子店主",
                "source": "always",
                "source_text": "奥维思",
                "status": "normal",
                "status_text": "正常",
                "updated_at": "2017-11-16T14:42:21.000+08:00",
                "created_at": "2017-11-16T14:42:21.000+08:00",
                "channel_user": {
                  "id": 1,
                  "name": "",
                  "phone": "1234567890",
                  "created_at": "2017-11-16T14:42:21.000+08:00",
                  "updated_at": "2017-11-19T16:40:31.000+08:00"
                }
              }
            }

## Data Structures
### ChannelParams (object)
+ name: 测试总代 (string) - 渠道名称
+ channel_user (object)
    + name: 测试 (string) - 名称
### SampleChannel (object)
+ id: 1 (number) - 渠道ID
+ name: 测试总代 (string) - 渠道名称
+ category: seed_shopkeeper (string) - 类型
+ category_text: 种子店主 (string) - 类型显示值
+ source: always (string) - 来源
+ source_text: 奥维思 (string) - 来源显示值
+ status: normal (string) - 状态
+ status_text: 正常 (string) - 状态显示值
+ channel_user (object)
    + id: 1 (number) - 用户ID
    + name: 测试 (string) - 名称
    + phone: 1234567890 (string) - 手机
    + created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
    + updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
