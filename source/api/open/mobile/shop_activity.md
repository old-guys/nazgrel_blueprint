# Group 店主流量分析

## 店主浏览量排名 [GET /api/open/mobile/shop_activities/view_count_rank{?device,user_token,shop_id,limit,time_range}]
获取当天全平台或者该店铺下，店铺的浏览量排名

+ Parameters
    + `device`: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据
    + `limit`: 10 (number, optional) - 排行数目
    + `time_range`: 3_day_ago (enum[string], required) - 时间范围
        + Members
          + 3_day_ago - 近3天
          + 7_day_ago - 近7天
          + 1_month_ago - 近1月
          + 1_year_ago - 近1年

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (array[ShopActivityViewCountRank])

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": [
                    {
                        "index": 1,
                        "shop_id": 1,
                        "shop_name": "张三小店12千千万",
                        "Shopkeeper_name": "Andox",
                        "city": "杭州",
                        "amount": 1490
                    },
                    {
                        "index": 2,
                        "shop_id": 34,
                        "shop_name": "@fd**",
                        "Shopkeeper_name": "美美",
                        "city": "南京",
                        "amount": 1324
                    },
                    {
                        "index": 3,
                        "shop_id": 12,
                        "shop_name": "XP测试店铺2018",
                        "Shopkeeper_name": "兰博基尼",
                        "city": "",
                        "amount": 1073
                    },
                    {
                        "index": 4,
                        "shop_id": 13,
                        "shop_name": "何以解忧 唯有暴富",
                        "Shopkeeper_name": "王秉飞1",
                        "city": "",
                        "amount": 473
                    },
                    {
                        "index": 5,
                        "shop_id": 8,
                        "shop_name": "¥ātomoの㊣",
                        "Shopkeeper_name": "郑明",
                        "city": "长沙",
                        "amount": 382
                    },
                    {
                        "index": 6,
                        "shop_id": 376,
                        "shop_name": "❤️我的",
                        "Shopkeeper_name": "(ಥ_ಥ)✔",
                        "city": "",
                        "amount": 381
                    },
                    {
                        "index": 7,
                        "shop_id": 29,
                        "shop_name": "I'm",
                        "Shopkeeper_name": "OK",
                        "city": "",
                        "amount": 360
                    },
                    {
                        "index": 8,
                        "shop_id": 180,
                        "shop_name": "哈哈哈",
                        "Shopkeeper_name": "",
                        "city": "上海",
                        "amount": 354
                    },
                    {
                        "index": 9,
                        "shop_id": 527,
                        "shop_name": "徐千四的小店",
                        "Shopkeeper_name": "徐千四",
                        "city": "南宁",
                        "amount": 342
                    },
                    {
                        "index": 10,
                        "shop_id": 524,
                        "shop_name": "徐千一的小店2018",
                        "Shopkeeper_name": "徐千一（徐）",
                        "city": "南宁",
                        "amount": 287
                    }
                ]
            }

## 店主分享排名 [GET /api/open/mobile/shop_activities/shared_count_rank{?device,user_token,shop_id,limit,time_range}]
获取当天全平台或者该店铺下，店铺的分享量排名

+ Parameters
    + `device`: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据
    + `limit`: 10 (number, optional) - 排行数目
    + `time_range`: 3_day_ago (enum[string], required) - 时间范围
        + Members
          + 3_day_ago - 近3天
          + 7_day_ago - 近7天
          + 1_month_ago - 近1月
          + 1_year_ago - 近1年
+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (array[ShopActivitySharedCountRank])

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": [
                    {
                        "index": 1,
                        "shop_id": 34,
                        "shop_name": "@fd**",
                        "Shopkeeper_name": "美美",
                        "city": "南京",
                        "count": 117
                    },
                    {
                        "index": 2,
                        "shop_id": 12,
                        "shop_name": "XP测试店铺2018",
                        "Shopkeeper_name": "兰博基尼",
                        "city": "",
                        "count": 79
                    },
                    {
                        "index": 3,
                        "shop_id": 29,
                        "shop_name": "I'm",
                        "Shopkeeper_name": "OK",
                        "city": "",
                        "count": 62
                    },
                    {
                        "index": 4,
                        "shop_id": 25,
                        "shop_name": "测试",
                        "Shopkeeper_name": "123",
                        "city": "南昌",
                        "count": 62
                    },
                    {
                        "index": 5,
                        "shop_id": 376,
                        "shop_name": "❤️我的",
                        "Shopkeeper_name": "(ಥ_ಥ)✔",
                        "city": "",
                        "count": 55
                    },
                    {
                        "index": 6,
                        "shop_id": 524,
                        "shop_name": "徐千一的小店2018",
                        "Shopkeeper_name": "徐千一（徐）",
                        "city": "南宁",
                        "count": 51
                    },
                    {
                        "index": 7,
                        "shop_id": 38,
                        "shop_name": "罗掌柜",
                        "Shopkeeper_name": "罗康3",
                        "city": "",
                        "count": 40
                    },
                    {
                        "index": 8,
                        "shop_id": 521,
                        "shop_name": "王秉飞的小123",
                        "Shopkeeper_name": "王秉飞",
                        "city": "",
                        "count": 37
                    },
                    {
                        "index": 9,
                        "shop_id": 8,
                        "shop_name": "¥ātomoの㊣",
                        "Shopkeeper_name": "郑明",
                        "city": "长沙",
                        "count": 33
                    },
                    {
                        "index": 10,
                        "shop_id": 522,
                        "shop_name": "王秉飞2的小店",
                        "Shopkeeper_name": "王秉飞2",
                        "city": "",
                        "count": 29
                    }
                ]
            }

## 店铺访客量排名 [GET /api/open/mobile/shop_activities/viewer_count_rank{?device,user_token,shop_id,limit,time_range}]
获取当天全平台或者该店铺下，店铺的访客量排名

+ Parameters
    + `device`: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据
    + `limit`: 10 (number, optional) - 排行数目
    + `time_range`: 3_day_ago (enum[string], required) - 时间范围
        + Members
          + 3_day_ago - 近3天
          + 7_day_ago - 近7天
          + 1_month_ago - 近1月
          + 1_year_ago - 近1年

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (array[ShopActivityViewerCountRank])

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": [
                    {
                        "index": 1,
                        "shop_id": 8,
                        "shop_name": "¥ātomoの㊣",
                        "Shopkeeper_name": "郑明",
                        "city": "长沙",
                        "count": 21
                    },
                    {
                        "index": 2,
                        "shop_id": 34,
                        "shop_name": "@fd**",
                        "Shopkeeper_name": "美美",
                        "city": "南京",
                        "count": 20
                    },
                    {
                        "index": 3,
                        "shop_id": 376,
                        "shop_name": "❤️我的",
                        "Shopkeeper_name": "(ಥ_ಥ)✔",
                        "city": "",
                        "count": 16
                    },
                    {
                        "index": 4,
                        "shop_id": 440,
                        "shop_name": "徐易三的小店",
                        "Shopkeeper_name": "徐易三",
                        "city": "南宁",
                        "count": 14
                    },
                    {
                        "index": 5,
                        "shop_id": 13,
                        "shop_name": "何以解忧 唯有暴富",
                        "Shopkeeper_name": "王秉飞1",
                        "city": "",
                        "count": 14
                    },
                    {
                        "index": 6,
                        "shop_id": 29,
                        "shop_name": "I'm",
                        "Shopkeeper_name": "OK",
                        "city": "",
                        "count": 13
                    },
                    {
                        "index": 7,
                        "shop_id": 521,
                        "shop_name": "王秉飞的小123",
                        "Shopkeeper_name": "王秉飞",
                        "city": "",
                        "count": 13
                    },
                    {
                        "index": 8,
                        "shop_id": 49,
                        "shop_name": "培训奖励11111",
                        "Shopkeeper_name": "培训奖励测试1",
                        "city": "昆明",
                        "count": 11
                    },
                    {
                        "index": 9,
                        "shop_id": 1,
                        "shop_name": "张三小店12千千万",
                        "Shopkeeper_name": "Andox",
                        "city": "杭州",
                        "count": 11
                    },
                    {
                        "index": 10,
                        "shop_id": 91,
                        "shop_name": "徐氏子店铺12",
                        "Shopkeeper_name": "徐小十二",
                        "city": "南宁",
                        "count": 11
                    }
                ]
            }

## 店铺流量渠道汇总 [/api/open/mobile/shop_activities/{shop_id}/summary{?device,user_token}]
### 店铺流量渠道汇总 [GET]
店铺流量渠道汇总

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + shop_id: 532 (number, required) - 店铺ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
          + `id`: 10 (number) - 店铺ID
          + `shop_name`: cpencil芝蚂店 (string) - 店铺名称
          + `shopkeeper_name`: 17500000007 (string) - 店主姓名
          + `province`: 北京 (string) - 省份
          + `city`: 北京 (string) - 城市
          + `descendant_activation_rate`: `98.4%` (string) - 下级店铺激活率
          + `descendant_count`: 384 (number) - 下级店铺数
          + `activity_info` (array[ShopActivityActivityInfo]) - 流量信息

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "shop_name": "解忧杂货店",
                    "shopkeeper_name": "高强",
                    "province": "上海",
                    "city": "",
                    "descendant_activation_rate": "98.4%",
                    "descendant_count": 384,
                    "activity_info": [
                        {
                            "type": "wechat_friend",
                            "type_text": "微信好友",
                            "view_count": 9,
                            "shared_count": 0
                        },
                        {
                            "type": "app",
                            "type_text": "app",
                            "view_count": 0,
                            "shared_count": 0
                        },
                        {
                            "type": "wechat_moment",
                            "type_text": "微信朋友圈",
                            "view_count": 0,
                            "shared_count": 0
                        },
                        {
                            "type": "qq",
                            "type_text": "qq",
                            "view_count": 0,
                            "shared_count": 0
                        },
                        {
                            "type": "qq_zone",
                            "type_text": "qq空间",
                            "view_count": 0,
                            "shared_count": 0
                        },
                        {
                            "type": "sms",
                            "type_text": "短信",
                            "view_count": 1,
                            "shared_count": 0
                        },
                        {
                            "type": "qrcord",
                            "type_text": "二维码",
                            "view_count": 0,
                            "shared_count": 0
                        }
                    ]
                }
            }

## 店铺每日流量详情 [/api/open/mobile/shop_activities/{shop_id}{?device,user_token,time_range}]
### 店铺每日流量详情 [GET]
根据店铺ID和时间段获取店铺的每日流量详情

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + shop_id: 532 (number, required) - 店铺ID
    + `time_range`: 3_day_ago (enum[string], required) - 时间范围
        + Members
          + 3_day_ago - 近3天
          + 7_day_ago - 近7天
          + 1_month_ago - 近1月
          + 1_year_ago - 近1年

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
          + `view_count`: 30 (number) - 浏览量
          + `shared_count`: 2 (number) - 分享量
          + `viewer_count`: 5 (number) - 访客量
          + `details` (array[ShopActivityActivityDetail]) - 流量信息

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "view_count": 30,
                    "shared_count": 2,
                    "viewer_count": 6,
                    "details": [
                        {
                            "date": "2018-01-09",
                            "view_count": 10,
                            "shared_count": 1,
                            "viewer_count": 2
                        },
                        {
                            "date": "2018-01-10",
                            "view_count": 12,
                            "shared_count": 0,
                            "viewer_count": 2
                        },
                        {
                            "date": "2018-01-11",
                            "view_count": 0,
                            "shared_count": 0,
                            "viewer_count": 0
                        },
                        {
                            "date": "2018-01-12",
                            "view_count": 8,
                            "shared_count": 1,
                            "viewer_count": 2
                        },
                        {
                            "date": "2018-01-13",
                            "view_count": 0,
                            "shared_count": 0,
                            "viewer_count": 0
                        },
                        {
                            "date": "2018-01-14",
                            "view_count": 0,
                            "shared_count": 0,
                            "viewer_count": 0
                        },
                        {
                            "date": "2018-01-15",
                            "view_count": 0,
                            "shared_count": 0,
                            "viewer_count": 0
                        },
                        {
                            "date": "2018-01-16",
                            "view_count": 0,
                            "shared_count": 0,
                            "viewer_count": 0
                        }
                    ]
                }
            }

## 店铺激活率排行 [/api/open/mobile/shop_activities/activation_rank{?device,user_token,order,shop_ids%5b%5d}]
### 店铺激活率排行 [GET]
根据指定的多个店铺ID 获得店主激活率排行

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_ids%5b%5d` (string, optional)
        + For example: `shop_ids[]=2&shop_ids[]=3`
    + `order`: `descendant_activation_rate desc` (enum[string], optional) - 排序
        + Members
          + `descendant_activation_rate desc` - 降序
          + `descendant_activation_rate asc` - 升序

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
          + `models` (array[ShopActivityActivationRank])

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "models": [
                        {
                            "shop_id": 1,
                            "shop_name": "张三小店12千千万",
                            "shopkeeper_name": "Andox",
                            "province": "浙江",
                            "city": "杭州",
                            "descendant_activation_rate": "100.0%"
                        },
                        {
                            "shop_id": 2,
                            "shop_name": "解忧杂货店",
                            "shopkeeper_name": "高强",
                            "province": "上海",
                            "city": "",
                            "descendant_activation_rate": "98.4%"
                        }
                    ]
                }
            }

### 店铺激活率排行 [POST]
根据指定的多个店铺ID 获得店主激活率排行

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
+ Request (application/json)
    + Attributes (object)
        + `shop_ids`: 2 (array[number]) - 店铺ID
          + `3`
        + `order`: `descendant_activation_rate desc` (enum[string], optional) - 排序
            + Members
              + `descendant_activation_rate desc` - 降序
              + `descendant_activation_rate asc` - 升序
    + Body

            {
                "shop_ids": [
                   2, 3
                ],
                "order": "descendant_activation_rate desc"
            }

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
          + `models` (array[ShopActivityActivationRank])

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "models": [
                        {
                            "shop_id": 1,
                            "shop_name": "张三小店12千千万",
                            "shopkeeper_name": "Andox",
                            "province": "浙江",
                            "city": "杭州",
                            "descendant_activation_rate": "100.0%"
                        },
                        {
                            "shop_id": 2,
                            "shop_name": "解忧杂货店",
                            "shopkeeper_name": "高强",
                            "province": "上海",
                            "city": "",
                            "descendant_activation_rate": "98.4%"
                        }
                    ]
                }
            }

## Data Structures
### ShopActivityViewCountRank(object)
+ `index`: 1 (number) - 排名
+ `shop_id`: 12 (number) - 店铺ID
+ `shop_name`: `XP测试店铺2018` (string) - 店铺名
+ `Shopkeeper_name`: `兰博基尼` (string) - 店主姓名
+ `city`: `上海` (string) - 城市
+ `count`: 3 (number) - 数量
### ShopActivitySharedCountRank (ShopActivityViewCountRank)
### ShopActivityViewerCountRank (ShopActivityViewCountRank)
### ShopActivityActivityInfo (object)
+ `type`: sms (string) - 类型
+ `type_text`: 短信 (string) - 类型
+ `view_count`: 1 (number) - 浏览量
+ `shared_count`: 0 (number) - 分享量
### ShopActivityActivityDetail (object)
+ `date`: `2018-01-14` (string) - 日期
+ `view_count`: 30 (number) - 浏览量
+ `shared_count`: 2 (number) - 分享量
+ `viewer_count`: 5 (number) - 访客量
### ShopActivityActivationRank (object)
+ `shop_id`: 12 (number) - 店铺ID
+ `shop_name`: `XP测试店铺2018` (string) - 店铺名
+ `Shopkeeper_name`: `兰博基尼` (string) - 店主姓名
+ `city`: `上海` (string) - 城市
+ `descendant_activation_rate`: `98.4%` (string) - 下级店铺激活率
