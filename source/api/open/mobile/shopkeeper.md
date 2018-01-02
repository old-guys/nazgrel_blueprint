# Group 店主

## 店主列表 [/api/open/mobile/shopkeepers{?device,user_token,order,city,user_grade}]
### 店主列表 [GET]
获取不同等级，城市下的店主列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + order: shops.created_at DESC (enum[string], optional) - 排序
        + Members
            + `shopkeepers.order_number DESC` - 订单数倒序
            + `shopkeepers.order_number ASC` - 订单数升序
            + `shopkeepers.order_amount DESC` - 订单金额倒序
            + `shopkeepers.order_amount ASC` - 订单金额升序
            + `shops.created_at DESC` - 店铺创建时间倒序
            + `shops.created_at ASC` - 店铺创建时间升序
    + `user_grade`: `grade_platinum` (enum[string], optional) - 等级筛选
        + Members
            + `grade_platinum` - 白金店主
            + `grade_gold` - 黄金店主
            + `grade_trainee` - 实习店主
    + city: 上海 (string, optional) - 城市筛选

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
            + models (array[SampleShopkeeper])
    + Body

            {
                "code": 0,
                "data": {
                    "total_count": 51,
                    "total_pages": 4,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 8458,
                            "shop_id": 532,
                            "shop_name": "17500000007的小店",
                            "shopkeeper_name": "17500000007",
                            "province": "北京",
                            "city": "北京",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-28T15:37:51.000+08:00"
                        },
                        {
                            "id": 8457,
                            "shop_id": 531,
                            "shop_name": "王1的小店",
                            "shopkeeper_name": "王1",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-28T15:23:30.000+08:00"
                        },
                        {
                            "id": 8456,
                            "shop_id": 530,
                            "shop_name": "田的小店",
                            "shopkeeper_name": "田",
                            "province": "吉林",
                            "city": "长春",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": null,
                            "order_number": null,
                            "created_at": "2017-12-28T11:41:43.000+08:00"
                        },
                        {
                            "id": 8455,
                            "shop_id": 529,
                            "shop_name": "徐千八的小店",
                            "shopkeeper_name": "你徐千八",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-19T14:15:37.000+08:00"
                        },
                        {
                            "id": 8454,
                            "shop_id": 528,
                            "shop_name": "阿里",
                            "shopkeeper_name": "十7",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.07",
                            "order_number": 3,
                            "created_at": "2017-12-19T14:09:06.000+08:00"
                        },
                        {
                            "id": 8453,
                            "shop_id": 527,
                            "shop_name": "徐千四的小店",
                            "shopkeeper_name": "徐千四",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-18T17:03:31.000+08:00"
                        },
                        {
                            "id": 8452,
                            "shop_id": 526,
                            "shop_name": "徐千三的小店",
                            "shopkeeper_name": "徐千三",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-18T16:57:48.000+08:00"
                        },
                        {
                            "id": 8451,
                            "shop_id": 525,
                            "shop_name": "万里长城",
                            "shopkeeper_name": "万里",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-18T16:51:03.000+08:00"
                        },
                        {
                            "id": 8450,
                            "shop_id": 524,
                            "shop_name": "徐千一的小店",
                            "shopkeeper_name": "徐千一",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-18T14:14:52.000+08:00"
                        },
                        {
                            "id": 8449,
                            "shop_id": 523,
                            "shop_name": "18000000000的小店",
                            "shopkeeper_name": "18000000000",
                            "province": "",
                            "city": "",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-12-05T14:19:28.000+08:00"
                        },
                        {
                            "id": 8448,
                            "shop_id": 522,
                            "shop_name": "王秉飞2的小店",
                            "shopkeeper_name": "王秉飞2",
                            "province": "上海",
                            "city": "",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.01",
                            "order_number": 1,
                            "created_at": "2017-12-05T13:57:37.000+08:00"
                        },
                        {
                            "id": 8446,
                            "shop_id": 520,
                            "shop_name": "徐钉钉的小店",
                            "shopkeeper_name": "徐钉钉",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-11-23T18:45:53.000+08:00"
                        },
                        {
                            "id": 8445,
                            "shop_id": 519,
                            "shop_name": "王的小店",
                            "shopkeeper_name": "王",
                            "province": "上海",
                            "city": "",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-11-23T18:43:17.000+08:00"
                        },
                        {
                            "id": 8444,
                            "shop_id": 518,
                            "shop_name": "hd的小店",
                            "shopkeeper_name": "hd",
                            "province": "安徽",
                            "city": "马鞍山",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.0",
                            "order_number": 0,
                            "created_at": "2017-11-23T18:42:22.000+08:00"
                        },
                        {
                            "id": 8441,
                            "shop_id": 515,
                            "shop_name": "徐六六的小店",
                            "shopkeeper_name": "徐六六",
                            "province": "广西",
                            "city": "南宁",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "order_amount": "0.05",
                            "order_number": 3,
                            "created_at": "2017-11-16T15:15:39.000+08:00"
                        }
                    ]
                }
            }


## Data Structures
### SampleShopkeeper (object)
+ `id`: 10 (number) - ID
+ `shop_id`: `cpencil芝蚂店` (string) - 店铺ID
+ `shop_name`: `王1的小店` (string) - 店铺名称
+ `shopkeeper_name`: `高强` (string) - 店主姓名
+ `province`: `吉林` (string) - 省份
+ `city`: `长春` (string) - 城市
+ `user_grade`: `grade_gold` (string) - 等级
+ `user_grade_text`: `黄金店主` (string) - 等级
+ `order_amount`: 0.0 (string) - 订单销售金额
+ `order_number`: 0 (number) - 订单数
+ `created_at`: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
