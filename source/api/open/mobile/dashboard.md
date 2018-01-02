# Group 工作台

## 首页 [GET /api/channel/dashboard{?device,user_token}]
  当天运营数据接口

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + date: `2017-12-29` (string) - 日期
            + shop_count: 5 (number) - 开店数
            + order_count: 3 (number) - 订单数
            + order_amount: 11.33 (string) - 销售金额
    + Body

            {
                "code": 0,
                "data": {
                  "date": "2017-12-29",
                  "shop_count": 5,
                  "order_count": 3,
                  "order_amount": "11.33"
                }
            }


## 等级店铺数量 [GET /api/channel/dashboard/user_grade_stat{?device,user_token}]
获取各等级店铺数量

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (array[TotalShopKeeperUsergrade])

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "user_grade": "grade_platinum",
                        "user_grade_text": "白金店主",
                        "count": 366
                    },
                    {
                        "user_grade": "grade_gold",
                        "user_grade_text": "黄金店主",
                        "count": 51
                    },
                    {
                        "user_grade": "grade_trainee",
                        "user_grade_text": "见习店主",
                        "count": 2
                    }
                ]
            }

## 开拓速度排名 [GET /api/channel/dashboard/children_rank{?device,user_token,limit,time_range}]
获取开拓直属下线最快的店铺排名数据

+ Parameters
    + `device`: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
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
        + data (array[ShopkeeperChildrenRank])

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "index": 1,
                        "shop_id": 12,
                        "shop_name": "XP测试店铺2018",
                        "Shopkeeper_name": "兰博基尼",
                        "city": "",
                        "count": 8
                    },
                    {
                        "index": 2,
                        "shop_id": 29,
                        "shop_name": "I'm",
                        "Shopkeeper_name": "OK",
                        "city": "",
                        "count": 8
                    },
                    {
                        "index": 3,
                        "shop_id": 502,
                        "shop_name": "徐见习生03的小店",
                        "Shopkeeper_name": "徐见习生03",
                        "city": "南宁",
                        "count": 4
                    },
                    {
                        "index": 4,
                        "shop_id": 25,
                        "shop_name": "测试",
                        "Shopkeeper_name": "123",
                        "city": "南昌",
                        "count": 4
                    },
                    {
                        "index": 5,
                        "shop_id": 490,
                        "shop_name": "818的小店",
                        "Shopkeeper_name": "818",
                        "city": "",
                        "count": 2
                    },
                    {
                        "index": 6,
                        "shop_id": 483,
                        "shop_name": "徐易八的小店",
                        "Shopkeeper_name": "徐易八",
                        "city": "南宁",
                        "count": 2
                    },
                    {
                        "index": 7,
                        "shop_id": 521,
                        "shop_name": "王秉飞的小店",
                        "Shopkeeper_name": "王秉飞",
                        "city": "",
                        "count": 2
                    },
                    {
                        "index": 8,
                        "shop_id": 332,
                        "shop_name": "奥迪的小店",
                        "Shopkeeper_name": "奥迪",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 9,
                        "shop_id": 525,
                        "shop_name": "万里长城",
                        "Shopkeeper_name": "万里",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 10,
                        "shop_id": 324,
                        "shop_name": "玛莎拉蒂的小店2018",
                        "Shopkeeper_name": "玛莎拉蒂V8",
                        "city": "南宁",
                        "count": 1
                    }
                ]
            }

## 热点城市排名 [GET /api/channel/dashboard/city_rank{?device,user_token,limit,time_range}]
获取全国各城市新增店铺排名数据

+ Parameters
    + `device`: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
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
        + data (array[ShopkeeperCityRank])

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "index": 1,
                        "city": "南宁",
                        "count": 20
                    },
                    {
                        "index": 2,
                        "city": "马鞍山",
                        "count": 2
                    },
                    {
                        "index": 3,
                        "city": "西安",
                        "count": 1
                    },
                    {
                        "index": 4,
                        "city": "济南",
                        "count": 1
                    },
                    {
                        "index": 5,
                        "city": "长治",
                        "count": 1
                    },
                    {
                        "index": 6,
                        "city": "长春",
                        "count": 1
                    },
                    {
                        "index": 7,
                        "city": "上海",
                        "count": 1
                    },
                    {
                        "index": 8,
                        "city": "北京",
                        "count": 1
                    }
                ]
            }

## Data Structures
### TotalShopKeeperUsergrade (object)
+ `user_grade`: `grade_platinum` (string) - 用户等级
+ `user_grade_text`: 白金店主 (string) - 用户等级
+ count: 234 (number) - 店主数
### ShopkeeperChildrenRank(object)
+ `index`: 1 (number) - 排名
+ `shop_id`: 12 (number) - 店铺ID
+ `shop_name`: `XP测试店铺2018` (string) - 店铺名
+ `Shopkeeper_name`: `兰博基尼` (string) - 店主姓名
+ `city`: `上海` (string) - 城市
+ `count`: 3 (number) - 数量
### ShopkeeperCityRank(object)
+ `index`: 1 (number) - 排名
+ `city`: `南宁` (string) - 城市
+ `count`: 3 (number) - 数量
