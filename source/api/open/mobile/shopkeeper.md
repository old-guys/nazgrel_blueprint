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

## 店主关系拓扑 [/api/open/mobile/report{?device,user_token,shop_id,city,user_grade}]
### 店主关系拓扑 [GET]
店主关系拓扑图接口

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID，则为该店铺下所有下级店铺的数据

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
            + models (array[ReportShopkeeper])
    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 419,
                    "total_pages": 84,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 5,
                    "page": 0,
                    "models": [
                        {
                            "id": 1,
                            "user_id": 12345,
                            "shopkeeper_name": "Andox",
                            "province": "浙江",
                            "city": "杭州",
                            "user_phone": "15888888888",
                            "shop_name": "张三小店12千千万",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "order_number": 15507,
                            "order_amount": "0.0",
                            "descendant_order_number": 31014,
                            "descendant_order_amount": "0.023",
                            "children_count": 1,
                            "descendant_count": 2,
                            "tree_depth": 1,
                            "parent_names": [
                                "Andox"
                            ],
                            "parent_ids": [
                                "12345"
                            ],
                            "created_at": "2017-07-28T00:54:27.000+08:00"
                        },
                        {
                            "id": 2,
                            "user_id": 25998,
                            "shopkeeper_name": "高强",
                            "province": "上海",
                            "city": "",
                            "user_phone": "13661638426",
                            "shop_name": "解忧杂货店",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "order_number": 2,
                            "order_amount": "12990.03",
                            "descendant_order_number": 460,
                            "descendant_order_amount": "68435.59",
                            "children_count": 46,
                            "descendant_count": 379,
                            "tree_depth": 1,
                            "parent_names": [
                                "高强"
                            ],
                            "parent_ids": [
                                "25998"
                            ],
                            "created_at": "2017-07-29T21:31:08.000+08:00"
                        },
                        {
                            "id": 3,
                            "user_id": 8910,
                            "shopkeeper_name": "王健雄",
                            "province": null,
                            "city": null,
                            "user_phone": "19888888888",
                            "shop_name": "gg=jasldfjadsklf",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "order_number": 0,
                            "order_amount": "0.0",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 2,
                            "parent_names": [
                                "高强",
                                "王健雄"
                            ],
                            "parent_ids": [
                                "25998",
                                "8910"
                            ],
                            "created_at": "2017-07-29T22:15:43.000+08:00"
                        },
                        {
                            "id": 4,
                            "user_id": 12311,
                            "shopkeeper_name": "李航",
                            "province": null,
                            "city": null,
                            "user_phone": "12111111111",
                            "shop_name": "张三小店12千千万",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "order_number": 15507,
                            "order_amount": "0.003",
                            "descendant_order_number": 15507,
                            "descendant_order_amount": "0.02",
                            "children_count": 1,
                            "descendant_count": 1,
                            "tree_depth": 2,
                            "parent_names": [
                                "Andox",
                                "李航"
                            ],
                            "parent_ids": [
                                "12345",
                                "12311"
                            ],
                            "created_at": "2017-07-28T00:54:27.000+08:00"
                        },
                        {
                            "id": 10,
                            "user_id": 26049,
                            "shopkeeper_name": "张三",
                            "province": "湖南",
                            "city": "株洲",
                            "user_phone": "15207400547",
                            "shop_name": "张三小店12千千万",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 25998,
                            "parent_shopkeeper_name": "高强",
                            "parent_user_phone": "13661638426",
                            "order_number": 15507,
                            "order_amount": "0.02",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 3,
                            "parent_names": [
                                "Andox",
                                "李航",
                                "张三"
                            ],
                            "parent_ids": [
                                "12345",
                                "12311",
                                "26049"
                            ],
                            "created_at": "2017-07-28T00:54:27.000+08:00"
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
### ReportShopkeeper (object)
+ `id`: 10 (number) - ID
+ `user_id`: 26049 (number) - 店主用户ID
+ `shopkeeper_name`: `张三` (string) - 店主姓名
+ `province`: `湖南` (string) - 省份
+ `city`: `株洲` (string) - 城市
+ `user_phone`: `15207400547` (string) - 店主手机号
+ `shop_name`: `张三小店12千千万` (string) - 店铺名
+ `user_grade`: `grade_platinum` (string) - 店铺等级
+ `user_grade_text`: `白金店主` (string) - 店铺等级
+ `parent_shopkeeper_user_id`: 25998 (number, nullable) - 上级店主用户ID
+ `parent_shopkeeper_name`: `高强` (string) - 上级店主用户姓名
+ `parent_user_phone`: `13661638426` (string) - 上级店主用户手机号
+ `order_number`: 15507 (number) - 订单数
+ `order_amount`: 0.02 (string) - 订单销售金额
+ `descendant_order_number`: 0 (number) - 下级店铺订单数
+ `descendant_order_amount`: 0.0 (string) - 下级店铺订单销售金额
+ `children_count`: 0 (number) - 店主直接下级数量
+ `descendant_count`: 0 (number) - 店主所有下级数量
+ `tree_depth`: 3 (number) - 店主所在层级
+ `parent_names`: `高强` (array[string]) - 上级名称
  + `掌柜`
+ `parent_ids`: 25998 (array[string]) - 上级用户ID
  + `1656`
+ `created_at`: `2017-07-28T00:54:27.000+08:00` (string) - 订单销售金额
