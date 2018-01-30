# Group 工作台

## 首页 [GET /api/open/mobile/dashboard{?device,user_token,shop_id}]
  当天运营数据接口

+ Parameters
    + `device`: `h5` (string, required) - 设备类型
    + `user_token`: `waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4=` (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + datetime: `2018-01-12 13:44:55` (string) - 日期
            + shop_count: 5 (number) - 开店数
            + order_count: 3 (number) - 订单数
            + commission_income_amount: `0.08` (string) - 佣金收入
            + order_amount: 11.33 (string) - 销售金额
            + shop (object) - 当前店铺
              + `id`: 2 (number) - 店铺ID
              + `name`: `解忧杂货店` (string) - 店铺名
              + `shop_img_url`: `http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg` (string) - 店铺头像
              + `shopkeeper_user_name`: `高强` (string) - 店主名
              + `shopkeeper_user_phone`: `13661638426` (string) - 店主手机号
    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "shop_count": 0,
                    "order_count": 1,
                    "commission_income_amount": "4.0",
                    "order_amount": "40.0",
                    "datetime": "2018-01-14 14:09:32",
                    "shop": {
                        "id": 2,
                        "name": "解忧杂货店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "shopkeeper_user_name": "高强",
                        "shopkeeper_user_phone": "13661638426"
                    }
                }
            }


## 等级店铺数量 [GET /api/open/mobile/dashboard/user_grade_stat{?device,user_token,shop_id}]
获取各等级店铺数量

+ Parameters
    + `device`: `h5` (string, required) - 设备类型
    + `user_token`: `waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4=` (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (array[TotalShopKeeperUsergrade], fixed-type)

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

## 开拓速度排名 [GET /api/open/mobile/dashboard/children_rank{?device,user_token,shop_id,limit,time_range}]
获取开拓直属下线最快的店铺排名数据

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
        + data (array[ShopkeeperChildrenRank], fixed-type)

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "index": 1,
                        "shop_id": 12,
                        "shop_name": "XP测试店铺2018",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "兰博基尼",
                        "city": "",
                        "count": 8
                    },
                    {
                        "index": 2,
                        "shop_id": 29,
                        "shop_name": "I'm",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "OK",
                        "city": "",
                        "count": 8
                    },
                    {
                        "index": 3,
                        "shop_id": 502,
                        "shop_name": "徐见习生03的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐见习生03",
                        "city": "南宁",
                        "count": 4
                    },
                    {
                        "index": 4,
                        "shop_id": 25,
                        "shop_name": "测试",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "123",
                        "city": "南昌",
                        "count": 4
                    },
                    {
                        "index": 5,
                        "shop_id": 490,
                        "shop_name": "818的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "818",
                        "city": "",
                        "count": 2
                    },
                    {
                        "index": 6,
                        "shop_id": 483,
                        "shop_name": "徐易八的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐易八",
                        "city": "南宁",
                        "count": 2
                    },
                    {
                        "index": 7,
                        "shop_id": 521,
                        "shop_name": "王秉飞的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "王秉飞",
                        "city": "",
                        "count": 2
                    },
                    {
                        "index": 8,
                        "shop_id": 332,
                        "shop_name": "奥迪的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "奥迪",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 9,
                        "shop_id": 525,
                        "shop_name": "万里长城",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "万里",
                        "city": "南宁",
                        "count": 1
                    },
                    {
                        "index": 10,
                        "shop_id": 324,
                        "shop_name": "玛莎拉蒂的小店2018",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "玛莎拉蒂V8",
                        "city": "南宁",
                        "count": 1
                    }
                ]
            }

## 店铺订单销售金额排名 [GET /api/open/mobile/dashboard/order_amount_rank{?device,user_token,shop_id,limit,time_range}]
销售达人排名

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
        + data (array[ShopkeeperOrderAmountRank], fixed-type)

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "index": 1,
                        "shop_id": 293,
                        "shop_name": "王秉飞的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "王秉飞",
                        "city": "",
                        "amount": "122.0"
                    },
                    {
                        "index": 2,
                        "shop_id": 483,
                        "shop_name": "徐易八的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐易八",
                        "city": "南宁",
                        "amount": "333.0"
                    },
                    {
                        "index": 3,
                        "shop_id": 502,
                        "shop_name": "徐见习生03的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐见习生03",
                        "city": "南宁",
                        "amount": "55.0"
                    },
                    {
                        "index": 4,
                        "shop_id": 512,
                        "shop_name": "徐易到25的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐易到25",
                        "city": "南宁",
                        "amount": "0.0"
                    },
                    {
                        "index": 5,
                        "shop_id": 520,
                        "shop_name": "徐钉钉的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐钉钉",
                        "city": "南宁",
                        "amount": "0.0"
                    },
                    {
                        "index": 6,
                        "shop_id": 530,
                        "shop_name": "田的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "田",
                        "city": "长春",
                        "amount": "0.0"
                    },
                    {
                        "index": 7,
                        "shop_id": 2,
                        "shop_name": "解忧杂货店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "高强",
                        "city": "",
                        "amount": "0.0"
                    },
                    {
                        "index": 8,
                        "shop_id": 294,
                        "shop_name": "wangbingfei的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "wangbingfei",
                        "city": "",
                        "amount": "0.0"
                    },
                    {
                        "index": 9,
                        "shop_id": 484,
                        "shop_name": "徐易九的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐易九",
                        "city": "南宁",
                        "amount": "0.0"
                    },
                    {
                        "index": 10,
                        "shop_id": 503,
                        "shop_name": "徐易十三的小店",
                        "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                        "Shopkeeper_name": "徐易十三",
                        "city": "南宁",
                        "amount": "0.0"
                    }
                ]
            }

## 热点城市排名 [GET /api/open/mobile/dashboard/city_rank{?device,user_token,shop_id,limit,time_range}]
获取全国各城市新增店铺排名数据

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
        + data (array[ShopkeeperCityRank], fixed-type)

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
+ `shop_img_url`: `http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg` (string) - 店铺头像
+ `Shopkeeper_name`: `兰博基尼` (string) - 店主姓名
+ `city`: `上海` (string) - 城市
+ `count`: 3 (number) - 数量
### ShopkeeperOrderAmountRank (object)
+ `index`: 1 (number) - 排名
+ `shop_id`: 12 (number) - 店铺ID
+ `shop_name`: `XP测试店铺2018` (string) - 店铺名
+ `shop_img_url`: `http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg` (string) - 店铺头像
+ `Shopkeeper_name`: `兰博基尼` (string) - 店主姓名
+ `city`: `上海` (string) - 城市
+ `amount`: `30.00` (string) - 金额
### ShopkeeperCityRank(object)
+ `index`: 1 (number) - 排名
+ `city`: `南宁` (string) - 城市
+ `count`: 3 (number) - 数量
