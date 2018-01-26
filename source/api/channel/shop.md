# Group 店铺

## 店铺列表 [/api/channel/shops{?device,user_token,order,channel_id,query,filters%5b%5d}]
### 店铺列表 [GET]
获取店铺列表 数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: shopkeepers.order_number desc (enum[string], optional) - 排序
        + Members
            + shopkeepers.order_number desc
            + shopkeepers.commission_income_amount ASC
            + shops.created_at desc
    + channel_id: 1 (enum[string], optional) - 渠道筛选
        + Members
            + 1
            + channel_only - 筛选种子店主
    + query: 张三 (string, optional) - 查询
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
            + models (array[SampleShop], fixed)
    + Body

            {
              "code": 0,
              "data": {
                "total_count": 366,
                "per_page": 2,
                "page": 0,
                "models": [
                  {
                    "id": 10,
                    "name": "cpencil芝蚂店",
                    "shopkeeper_name": "高强",
                    "parent_shopkeeper_name": "高强",
                    "child_count": 3,
                    "indirectly_descendant": 0,
                    "commission_amount": "0.0",
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  },
                  {
                    "id": 19,
                    "name": "路路通",
                    "parent_shopkeeper_name": "嘻嘻嘻",
                    "child_count": 0,
                    "indirectly_descendant": 0,
                    "commission_amount": "0.0",
                    "created_at": "2017-08-10T22:41:19.000+08:00"
                  }
                ]
              }
            }

## 店铺销售 [/api/channel/shops/sales{?device,user_token,channel_id,order,query,filters%5b%5d}]
### 店铺销售 [GET]
获取店铺销售 数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: shopkeepers.order_number desc (string, optional) - 排序
        + Members
            + shopkeepers.order_number desc
            + shopkeepers.order_amount desc
            + shopkeepers.commission_income_amount ASC
            + shops.created_at desc
    + channel_id: 1 (enum[string], optional) - 渠道筛选
        + Members
            + 1
            + channel_only - 筛选种子店主
    + query: 张三 (string, optional) - 查询
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
            + models (array[SampleShop], fixed)
    + Body

            {
              "code": 0,
              "data": {
                "total_count": 366,
                "per_page": 2,
                "page": 0,
                "models": [
                  {
                    "id": 10,
                    "name": "cpencil芝蚂店",
                    "shopkeeper_name": "高强",
                    "user_grade": "grade_platinum",
                    "user_grade_text": "白金店主",
                    "order_amount": 0,
                    "order_number": 0,
                    "created_at": "2017-08-10T04:42:08.000+08:00"
                  },
                  {
                    "id": 19,
                    "name": "路路通",
                    "shopkeeper_name": "嘻嘻嘻",
                    "user_grade": "grade_platinum",
                    "user_grade_text": "白金店主",
                    "order_amount": 0,
                    "order_number": 0,
                    "created_at": "2017-08-10T22:41:19.000+08:00"
                  }
                ]
              }
            }

### 店铺直接邀请 [/api/channel/shops/{id}/children{?device,user_token}]
### 店铺直接邀请 [GET]
通过店铺ID 获取直接邀请店铺列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 490 (string, required) - 店铺ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + id: 490 (number) - 店铺ID
            + name: 818的小店 (string) - 店铺名称
            + children (array[SampleShop], fixed)
    + Body

            {
              "code": 0,
              "data": {
                "id": 490,
                "name": "818的小店",
                "children": [
                  {
                    "id": 492,
                    "name": "擦的小店",
                    "shopkeeper_name": "擦",
                    "user_grade": "grade_platinum",
                    "user_grade_text": "白金店主",
                    "parent_shopkeeper_name": "818",
                    "child_count": 0,
                    "indirectly_descendant": 0,
                    "commission_amount": null,
                    "created_at": "2017-11-07T23:24:17.000+08:00"
                  },
                  {
                    "id": 495,
                    "name": "巴的小店",
                    "shopkeeper_name": "巴",
                    "user_grade": "grade_platinum",
                    "user_grade_text": "白金店主",
                    "parent_shopkeeper_name": "818",
                    "child_count": 0,
                    "indirectly_descendant": 0,
                    "commission_amount": null,
                    "created_at": "2017-11-07T23:41:48.000+08:00"
                  }
                ]
              }
            }


### 店铺详情 [/api/channel/shops/{id}{?device,user_token}]
### 店铺详情 [GET]
通过店铺ID 获取店铺详情

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + id: 10 (string, required) - 店铺ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
          + id: 10 (number) - 店铺ID
          + name: cpencil芝蚂店 (string) - 店铺名称
          + desc: 我的小店开张啦！欢迎大家常来逛 (string) - 店铺描述
          + shopkeeper (shopkeeperProfile) - 店主信息
              + child_count (object) - 直接邀请个数
                  + count: 10 (number) - 个数
                  + grade_platinum_count: 3 (number) - 白金店主个数
                  + grade_gold_count: 7 (number) - 黄金店主个数
              + indirectly_descendant_count (object) - 间接邀请个数
                  + count: 30 (number) - 个数
                  + grade_platinum_count: 8 (number) - 白金店主个数
                  + grade_gold_count: 22 (number) - 黄金店主个数
              + parent (shopkeeperProfile) - 上级店主
                  + tree_list (array[shopkeeperProfile], fixed) - 邀请人列表
              + total_income_amount: 2000 (string) - 账户总收入
              + commission_income_amount: 233 (string) - 佣金收入
              + withdraw_amount: 23 (string) - 已提现金额
              + invite_amount: 23 (string) - 邀请收入 培训奖励
              + invite_number: 23 (number) - 邀请总人数
              + order_amount: 3 (string) - 邀请总人数
              + order_number: 3 (number) - 订单总数
              + share_journal_count: 133 (number) - 分享次数
              + view_journal_count: 35 (number) - 访问次数
    + Body

            {
              "code": 0,
              "data": {
                "id": 10,
                "name": "cpencil芝蚂店",
                "desc": "我的小店开张啦！欢迎大家常来逛",
                "shopkeeper": {
                  "user_name": "嘻嘻嘻",
                  "user_grade": "grade_platinum",
                  "user_grade_text": "白金店主",
                  "user_phone": "13022189206",
                  "user_photo": "http://zmcimg.ishanggang.com/default/shop/keeper/default_avatar.png",
                  "child_count": {
                    "count": 3,
                    "grade_platinum_count": 3,
                    "grade_gold_count": 0
                  },
                  "indirectly_descendant_count": {
                    "count": 0,
                    "grade_platinum_count": 0,
                    "grade_gold_count": 0
                  },
                  "parent": {
                    "user_name": "高强",
                    "user_grade": "grade_platinum",
                    "user_grade_text": "白金店主",
                    "user_phone": "13661638426",
                    "user_photo": "http://inte.ishanggang.com/upload/upload/user/Head/user_25998_1505274624483.jpeg",
                    "tree_list": [
                      {
                        "user_name": "高强",
                        "user_grade": "grade_platinum",
                        "user_grade_text": "白金店主",
                        "user_phone": "13661638426",
                        "user_photo": "http://inte.ishanggang.com/upload/upload/user/Head/user_25998_1505274624483.jpeg"
                      },
                      {
                        "user_name": "嘻嘻嘻",
                        "user_grade": "grade_platinum",
                        "user_grade_text": "白金店主",
                        "user_phone": "13022189206",
                        "user_photo": "http://zmcimg.ishanggang.com/default/shop/keeper/default_avatar.png"
                      }
                    ]
                  },
                  "total_income_amount": "0.0",
                  "withdraw_amount": "0.0",
                  "invite_amount": "0.003",
                  "invite_number": 3,
                  "order_amount": "0.0",
                  "order_number": 3,
                  "share_journal_count": 47,
                  "view_journal_count": 16
                }
              }
            }

## Data Structures
### Filter (object)
+ name: created_at (string, required) - 字段名
+ field_type: datetime (string, optional) - 字段类型
+ operator: within (string) - 操作
+ query: today (string) - 查询值

### SampleShop (object)
+ id: 10 (number) - 店铺ID
+ name: cpencil芝蚂店 (string) - 店铺名称
+ shopkeeper_name: 高强 (string) - 店主姓名
+ parent_shopkeeper_name: 高强 (string) - 上级店主
+ child_count: 3 (number) - 直接邀请数
+ indirectly_descendant: 8 (number) - 间接邀请数
+ commission_amount: 200.0 (string) - 佣金
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间

### shopkeeperProfile (object)
+ user_id: 25998 (number) - 用户ID
+ user_name: 高强 (string) - 店主姓名
+ user_grade: grade_platinum (string) - 店主等级
+ user_grade_text: 白金店主 (string) - 店主等级显示值
+ user_phone: 13661638426 (string) - 店主手机号
+ user_photo: http://url (string) - 店主头像
