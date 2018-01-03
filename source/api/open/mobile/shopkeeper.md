# Group 店主

## 店主列表 [/api/open/mobile/shopkeepers{?device,user_token,shop_id,city,user_grade}]
### 店主列表 [GET]
获取不同等级，城市下的店主列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据
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
                    "total_count": 27,
                    "total_pages": 2,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 8457,
                            "shop_id": 531,
                            "shop_name": "王1的小店",
                            "shopkeeper_name": "王1",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-12-28T15:23:30.000+08:00"
                        },
                        {
                            "id": 404,
                            "shop_id": 474,
                            "shop_name": "吧的小店",
                            "shopkeeper_name": "吧",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-10-26T15:11:11.000+08:00"
                        },
                        {
                            "id": 379,
                            "shop_id": 449,
                            "shop_name": "15213478062的小店",
                            "shopkeeper_name": "15213478062",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_gold",
                            "user_grade_text": "黄金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-10-19T15:08:45.000+08:00"
                        },
                        {
                            "id": 322,
                            "shop_id": 392,
                            "shop_name": "今天的小店",
                            "shopkeeper_name": "今天",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-10-13T14:59:07.000+08:00"
                        },
                        {
                            "id": 311,
                            "shop_id": 378,
                            "shop_name": "王3的小店",
                            "shopkeeper_name": "王3",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-10-13T11:00:32.000+08:00"
                        },
                        {
                            "id": 310,
                            "shop_id": 377,
                            "shop_name": "王2的小店",
                            "shopkeeper_name": "王2",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-10-13T10:59:19.000+08:00"
                        },
                        {
                            "id": 306,
                            "shop_id": 373,
                            "shop_name": "小二的小店",
                            "shopkeeper_name": "小二",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-10-13T10:44:56.000+08:00"
                        },
                        {
                            "id": 290,
                            "shop_id": 356,
                            "shop_name": "13661467242的小店",
                            "shopkeeper_name": "13661467242",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-23T17:28:26.000+08:00"
                        },
                        {
                            "id": 278,
                            "shop_id": 343,
                            "shop_name": "发图好好的大家的小店",
                            "shopkeeper_name": "发图好好的大家",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-23T14:26:09.000+08:00"
                        },
                        {
                            "id": 276,
                            "shop_id": 341,
                            "shop_name": "15000000098的小店",
                            "shopkeeper_name": "15000000098",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-23T14:23:53.000+08:00"
                        },
                        {
                            "id": 275,
                            "shop_id": 340,
                            "shop_name": "17601234567的小店",
                            "shopkeeper_name": "17601234567",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-23T14:20:28.000+08:00"
                        },
                        {
                            "id": 273,
                            "shop_id": 338,
                            "shop_name": "哦哦哦哦哦哦的小店",
                            "shopkeeper_name": "哦哦哦哦哦哦",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-23T14:15:36.000+08:00"
                        },
                        {
                            "id": 263,
                            "shop_id": 328,
                            "shop_name": "15121048956的小店",
                            "shopkeeper_name": "顾哈",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-22T15:35:53.000+08:00"
                        },
                        {
                            "id": 260,
                            "shop_id": 325,
                            "shop_name": "王秉飞04的小店",
                            "shopkeeper_name": "王秉飞04",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-22T10:40:12.000+08:00"
                        },
                        {
                            "id": 258,
                            "shop_id": 323,
                            "shop_name": "王秉飞03的小店",
                            "shopkeeper_name": "如5u4额如贱人",
                            "province": "上海",
                            "city": "上海",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "today_order_amount": "0.0",
                            "today_order_number": 0,
                            "created_at": "2017-09-22T10:38:44.000+08:00"
                        }
                    ]
                }
            }

## 店主历史总销售额排名 [/api/open/mobile/shopkeepers/sales{?device,user_token,shop_id,city,user_grade}]
### 店主历史总销售额排名 [GET]
获取店主历史总销售额数据，可以按照城市过滤

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据
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
            + models (array[SalesShopkeeper])
    + Body

            {
                "code": 0,
                "data": {
                    "total_count": 27,
                    "total_pages": 2,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 258,
                            "shop_id": 323,
                            "shop_name": "王秉飞03的小店",
                            "shopkeeper_name": "如5u4额如贱人",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "135.0"
                        },
                        {
                            "id": 210,
                            "shop_id": 275,
                            "shop_name": "2的小店",
                            "shopkeeper_name": "2",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "130.05"
                        },
                        {
                            "id": 310,
                            "shop_id": 377,
                            "shop_name": "王2的小店",
                            "shopkeeper_name": "王2",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "10.02"
                        },
                        {
                            "id": 190,
                            "shop_id": 189,
                            "shop_name": "wu的小店",
                            "shopkeeper_name": "wu",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.02"
                        },
                        {
                            "id": 192,
                            "shop_id": 191,
                            "shop_name": "li的小店",
                            "shopkeeper_name": "li",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.01"
                        },
                        {
                            "id": 222,
                            "shop_id": 287,
                            "shop_name": "biubiu",
                            "shopkeeper_name": "",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.01"
                        },
                        {
                            "id": 260,
                            "shop_id": 325,
                            "shop_name": "王秉飞04的小店",
                            "shopkeeper_name": "王秉飞04",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 263,
                            "shop_id": 328,
                            "shop_name": "15121048956的小店",
                            "shopkeeper_name": "顾哈",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 8457,
                            "shop_id": 531,
                            "shop_name": "王1的小店",
                            "shopkeeper_name": "王1",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 273,
                            "shop_id": 338,
                            "shop_name": "哦哦哦哦哦哦的小店",
                            "shopkeeper_name": "哦哦哦哦哦哦",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 275,
                            "shop_id": 340,
                            "shop_name": "17601234567的小店",
                            "shopkeeper_name": "17601234567",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 276,
                            "shop_id": 341,
                            "shop_name": "15000000098的小店",
                            "shopkeeper_name": "15000000098",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 278,
                            "shop_id": 343,
                            "shop_name": "发图好好的大家的小店",
                            "shopkeeper_name": "发图好好的大家",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 26,
                            "shop_id": 24,
                            "shop_name": "孔侑太太的百宝箱",
                            "shopkeeper_name": "李丹",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 290,
                            "shop_id": 356,
                            "shop_name": "13661467242的小店",
                            "shopkeeper_name": "13661467242",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
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
+ `today_order_amount`: 0.0 (string) - 订单销售金额
+ `today_order_number`: 0 (number) - 订单数
+ `created_at`: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
### SalesShopkeeper (object)
+ `id`: 10 (number) - ID
+ `shop_id`: `cpencil芝蚂店` (string) - 店铺ID
+ `shop_name`: `王1的小店` (string) - 店铺名称
+ `shopkeeper_name`: `高强` (string) - 店主姓名
+ `province`: `吉林` (string) - 省份
+ `city`: `长春` (string) - 城市
+ `order_amount`: 0.0 (string) - 订单销售金额
