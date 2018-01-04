# Group 店铺

## 店铺详情接口 [/api/open/mobile/shops/{shop_id}/summary{?device,user_token}]
### 店铺详情接口 [GET]
店主分析页面获取地店铺详情

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
          + `user_phone`: 17500000007 (string) - 店主手机号
          + `commission_income_amount`: 23.0 (string) - 店铺佣金
          + `balance_amount`: 23.0 (string) - 账户余额
          + `withdraw_amount`: 1.0 (string) - 已提现金额
          + `last_three_day_descendant_count`: 3 (number) - 近3天开拓店主数
          + `descendant_count`: 15 (number) - 总开拓店主数

    + Body

            {
                "code": 0,
                "data": {
                    "id": 8458,
                    "shop_name": "17500000007的小店",
                    "shopkeeper_name": "17500000007",
                    "province": "北京",
                    "city": "北京",
                    "user_phone": "17500000007",
                    "commission_income_amount": "0.0",
                    "balance_amount": "0.0",
                    "withdraw_amount": "0.0",
                    "last_three_day_descendant_count": 3,
                    "descendant_count": 15,
                    "created_at": "2017-12-28T15:37:51.000+08:00"
                }
            }

## 直属下线排名 [/api/open/mobile/shops/{shop_id}/children_rank{?device,user_token,limit,time_range}]
### 直属下线排名 [GET]
该店铺直属下线店铺的排名数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, required) - 店铺ID
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
        + data (array[ShowShopChildrenRank])

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "index": 1,
                        "shop_id": 302,
                        "shop_name": "法拉利的小店",
                        "Shopkeeper_name": "法拉利2017",
                        "order_amount": "0.0",
                        "commission_income_amount": "0.0",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 2,
                        "shop_id": 332,
                        "shop_name": "奥迪的小店",
                        "Shopkeeper_name": "奥迪",
                        "order_amount": "0.0",
                        "commission_income_amount": "0.0",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 3,
                        "shop_id": 525,
                        "shop_name": "万里长城",
                        "Shopkeeper_name": "万里",
                        "order_amount": "0.0",
                        "commission_income_amount": "0.0",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 4,
                        "shop_id": 324,
                        "shop_name": "玛莎拉蒂的小店2018",
                        "Shopkeeper_name": "玛莎拉蒂V8",
                        "order_amount": "0.007",
                        "commission_income_amount": "0.007",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 5,
                        "shop_id": 528,
                        "shop_name": "阿里",
                        "Shopkeeper_name": "十7",
                        "order_amount": "0.005",
                        "commission_income_amount": "0.005",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 6,
                        "shop_id": 25,
                        "shop_name": "测试",
                        "Shopkeeper_name": "123",
                        "order_amount": "162.305",
                        "commission_income_amount": "162.305",
                        "city": "南昌",
                        "count": 1
                    },
                    {
                        "index": 7,
                        "shop_id": 521,
                        "shop_name": "王秉飞的小店",
                        "Shopkeeper_name": "王秉飞",
                        "order_amount": "0.006",
                        "commission_income_amount": "0.006",
                        "city": "",
                        "count": 1
                    },
                    {
                        "index": 8,
                        "shop_id": 530,
                        "shop_name": "田的小店",
                        "Shopkeeper_name": "田",
                        "order_amount": null,
                        "commission_income_amount": null,
                        "city": "长春",
                        "count": 1
                    }
                ]
            }

## 城市分析 [/api/open/mobile/shops/{shop_id}/city_rank{?device,user_token,limit,time_range}]
### 城市分析 [GET]
获取当月该店铺下所有直属下级所在城市排名

+ Parameters
    + `device`: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, required) - 店铺ID
    + `limit`: 10 (number, optional) - 排行数目

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (array[ShowShopCityRank])

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "index": 1,
                        "city": "南宁",
                        "count": 6,
                        "state": "up"
                    },
                    {
                        "index": 2,
                        "city": "长春",
                        "count": 1,
                        "state": "up"
                    },
                    {
                        "index": 3,
                        "city": "上海",
                        "count": 1,
                        "state": "up"
                    },
                    {
                        "index": 4,
                        "city": "北京",
                        "count": 1,
                        "state": "up"
                    }
                ]
            }

## 店铺运营分析 [/api/open/mobile/shops/{shop_id}/stat{?device,user_token}]
### 店铺运营分析 [GET]
获取该店铺的所有下级数量，直属下级数量，所有下级的总订单数量以及总销售额(包括本人订单)，本人订单数量以及销售额。最近30天内开拓下级最多的直属下级店铺详情，以及该店铺最近30天的开拓下级数量和在所有下级中的占比,最近30天内销售额最高的直属下级

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + shop_id: 2 (number, required) - 店铺ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
          + `id`: 2 (number) - 店铺ID
          + `descendant_count`: 379 (number) - 下属店主数
          + `children_count`: 46 (number) - 直接邀请店主数
          + `order_number`: 2 (number) - 本店订单数
          + `order_amount`: "12990.03" (string) - 本店订单金额
          + `all_order_number`: 462 (number) - 下属订单数
          + `all_order_amount`: `81425.62` (string) - 下属订单金额
          + `fast_add_shop` (object) - 30天内开拓下级最多的直属下级店铺
            + `shop_id`: 302 (number) - 店铺ID
            + `shop_name`: `法拉利的小店` (string) - 店铺名
            + `shopkeeper_name`: `法拉利2017` (string) - 店主姓名
            + `city`: `南宁` (string) - 城市
            + `count`: 1 (number) - 数量
            + `proportion`: `0.1%` (string) - 在所有下级中的占比
          + `top_sales_shop` (object) - 30天内销售额最高的直属下级
            + `shop_id`: 489 (number) - 店铺ID
            + `shop_name`: `见习的小店` (string) - 店铺名
            + `shopkeeper_name`: `见习` (string) - 店主姓名
            + `city`: `南宁` (string) - 城市
            + `amount`: 0.02 (string) - 金额

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "descendant_count": 379,
                    "children_count": 46,
                    "order_number": 2,
                    "order_amount": "12990.03",
                    "all_order_number": 460,
                    "all_order_amount": "68435.59",
                    "fast_add_shop": {
                        "shop_id": 302,
                        "shop_name": "法拉利的小店",
                        "shopkeeper_name": "法拉利2017",
                        "city": "南宁",
                        "count": 1,
                        "proportion": "0.1%"
                    },
                    "top_sales_shop": {
                        "shop_id": 489,
                        "shop_name": "见习的小店",
                        "shopkeeper_name": "见习",
                        "city": "",
                        "amount": "0.02"
                    }
                }
            }

## Data Structures
### ShowShopChildrenRank (object)
+ `index`: 1 (number) - 排名
+ `shop_id`: 12 (number) - 店铺ID
+ `shop_name`: `XP测试店铺2018` (string) - 店铺名
+ `Shopkeeper_name`: `兰博基尼` (string) - 店主姓名
+ `order_amount`: `0.0` (string) - 销售额
+ `commission_income_amount`: `0.0` (string) - 佣金额
+ `city`: `上海` (string) - 城市
+ `count`: 3 (number) - 数量
### ShowShopCityRank (object)
+ `index`: 1 (number) - 排名
+ `city`: 南宁 (string) - 店铺ID
+ `count`: 6 (number) - 数量
+ `state`: up (string) - up 上升, down 下降, eq 不变
