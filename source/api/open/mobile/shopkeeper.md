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

## 店主关系拓扑 [/api/open/mobile/shopkeepers/report{?device,user_token,shop_id,city,user_grade}]
### 店主关系拓扑 [GET]
店主关系拓扑图接口

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, optional) - 店铺ID, 有店铺ID只返回特定店铺的结果

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
                    "total_count": 424,
                    "total_pages": 29,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 1,
                            "shop_id": 1,
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
                            "parent_shop_id": null,
                            "order_number": 15507,
                            "order_amount": "0.0",
                            "commission_income_amount": null,
                            "descendant_order_number": 31014,
                            "descendant_order_amount": "0.023",
                            "descendant_commission_income_amount": "0.023",
                            "children_count": 1,
                            "descendant_count": 2,
                            "tree_depth": 1,
                            "parent_names": [
                                "Andox"
                            ],
                            "parent_shop_ids": [
                                1
                            ],
                            "parent_ids": [
                                1
                            ],
                            "created_at": "2017-07-28T00:54:27.000+08:00"
                        },
                        {
                            "id": 2,
                            "shop_id": 2,
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
                            "parent_shop_id": null,
                            "order_number": 2,
                            "order_amount": "12990.03",
                            "commission_income_amount": "2054.003",
                            "descendant_order_number": 462,
                            "descendant_order_amount": "68435.61",
                            "descendant_commission_income_amount": "68435.61",
                            "children_count": 46,
                            "descendant_count": 384,
                            "tree_depth": 1,
                            "parent_names": [
                                "高强"
                            ],
                            "parent_shop_ids": [
                                2
                            ],
                            "parent_ids": [
                                2
                            ],
                            "created_at": "2017-07-29T21:31:08.000+08:00"
                        },
                        {
                            "id": 3,
                            "shop_id": 3,
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
                            "parent_shop_id": null,
                            "order_number": 0,
                            "order_amount": "0.0",
                            "commission_income_amount": "0.0",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 2,
                            "parent_names": [
                                "高强",
                                "王健雄"
                            ],
                            "parent_shop_ids": [
                                2,
                                3
                            ],
                            "parent_ids": [
                                2,
                                3
                            ],
                            "created_at": "2017-07-29T22:15:43.000+08:00"
                        },
                        {
                            "id": 4,
                            "shop_id": 1,
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
                            "parent_shop_id": null,
                            "order_number": 15507,
                            "order_amount": "0.003",
                            "commission_income_amount": null,
                            "descendant_order_number": 15507,
                            "descendant_order_amount": "0.02",
                            "descendant_commission_income_amount": "0.02",
                            "children_count": 1,
                            "descendant_count": 1,
                            "tree_depth": 2,
                            "parent_names": [
                                "Andox",
                                "李航"
                            ],
                            "parent_shop_ids": [
                                1,
                                1
                            ],
                            "parent_ids": [
                                1,
                                4
                            ],
                            "created_at": "2017-07-28T00:54:27.000+08:00"
                        },
                        {
                            "id": 10,
                            "shop_id": 1,
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
                            "parent_shop_id": 2,
                            "order_number": 15507,
                            "order_amount": "0.02",
                            "commission_income_amount": null,
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 3,
                            "parent_names": [
                                "Andox",
                                "李航",
                                "张三"
                            ],
                            "parent_shop_ids": [
                                1,
                                1,
                                1
                            ],
                            "parent_ids": [
                                1,
                                4,
                                10
                            ],
                            "created_at": "2017-07-28T00:54:27.000+08:00"
                        },
                        {
                            "id": 11,
                            "shop_id": 6,
                            "user_id": 1656,
                            "shopkeeper_name": "掌柜",
                            "province": "上海",
                            "city": "",
                            "user_phone": "18621806536",
                            "shop_name": "我的好店铺8888",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 25998,
                            "parent_shopkeeper_name": "高强",
                            "parent_user_phone": "13661638426",
                            "parent_shop_id": 2,
                            "order_number": 7,
                            "order_amount": "0.12",
                            "commission_income_amount": "0.013",
                            "descendant_order_number": 292,
                            "descendant_order_amount": "46574.39",
                            "descendant_commission_income_amount": "46574.39",
                            "children_count": 12,
                            "descendant_count": 213,
                            "tree_depth": 2,
                            "parent_names": [
                                "高强",
                                "掌柜"
                            ],
                            "parent_shop_ids": [
                                2,
                                6
                            ],
                            "parent_ids": [
                                2,
                                11
                            ],
                            "created_at": "2017-08-09T23:52:47.000+08:00"
                        },
                        {
                            "id": 12,
                            "shop_id": 8,
                            "user_id": 17512,
                            "shopkeeper_name": "郑明",
                            "province": "湖南",
                            "city": "长沙",
                            "user_phone": "13808483343",
                            "shop_name": "¥ātomoの㊣",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 1656,
                            "parent_shopkeeper_name": "掌柜",
                            "parent_user_phone": "18621806536",
                            "parent_shop_id": 6,
                            "order_number": 18,
                            "order_amount": "0.47",
                            "commission_income_amount": "0.211",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 3,
                            "parent_names": [
                                "高强",
                                "掌柜",
                                "郑明"
                            ],
                            "parent_shop_ids": [
                                2,
                                6,
                                8
                            ],
                            "parent_ids": [
                                2,
                                11,
                                12
                            ],
                            "created_at": "2017-08-09T20:16:38.000+08:00"
                        },
                        {
                            "id": 14,
                            "shop_id": 10,
                            "user_id": 24454,
                            "shopkeeper_name": "嘻嘻嘻",
                            "province": "上海",
                            "city": "",
                            "user_phone": "13022189206",
                            "shop_name": "cpencil芝蚂店",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 25998,
                            "parent_shopkeeper_name": "高强",
                            "parent_user_phone": "13661638426",
                            "parent_shop_id": 2,
                            "order_number": 0,
                            "order_amount": "0.0",
                            "commission_income_amount": "0.0",
                            "descendant_order_number": 2,
                            "descendant_order_amount": "0.02",
                            "descendant_commission_income_amount": "0.02",
                            "children_count": 3,
                            "descendant_count": 3,
                            "tree_depth": 2,
                            "parent_names": [
                                "高强",
                                "嘻嘻嘻"
                            ],
                            "parent_shop_ids": [
                                2,
                                10
                            ],
                            "parent_ids": [
                                2,
                                14
                            ],
                            "created_at": "2017-08-10T04:42:08.000+08:00"
                        },
                        {
                            "id": 15,
                            "shop_id": 99,
                            "user_id": 24420,
                            "shopkeeper_name": "李大强",
                            "province": "上海",
                            "city": "",
                            "user_phone": "13916025169",
                            "shop_name": "提现测试1",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "parent_shop_id": null,
                            "order_number": 1,
                            "order_amount": "5.0",
                            "commission_income_amount": "0.6",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 1,
                            "parent_names": [
                                "李大强"
                            ],
                            "parent_shop_ids": [
                                99
                            ],
                            "parent_ids": [
                                15
                            ],
                            "created_at": "2017-08-12T23:41:45.000+08:00"
                        },
                        {
                            "id": 17,
                            "shop_id": 12,
                            "user_id": 26303,
                            "shopkeeper_name": "兰博基尼",
                            "province": "上海",
                            "city": "",
                            "user_phone": "13764684843",
                            "shop_name": "XP测试店铺2018",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 26133,
                            "parent_shopkeeper_name": "王秉飞1",
                            "parent_user_phone": "13162865863",
                            "parent_shop_id": 13,
                            "order_number": 8,
                            "order_amount": "9.97",
                            "commission_income_amount": "1.037",
                            "descendant_order_number": 34,
                            "descendant_order_amount": "1050.08",
                            "descendant_commission_income_amount": "1050.08",
                            "children_count": 29,
                            "descendant_count": 59,
                            "tree_depth": 4,
                            "parent_names": [
                                "高强",
                                "掌柜",
                                "兰博基尼",
                                "王秉飞1"
                            ],
                            "parent_shop_ids": [
                                2,
                                6,
                                12,
                                13
                            ],
                            "parent_ids": [
                                2,
                                11,
                                17,
                                18
                            ],
                            "created_at": "2017-08-10T10:58:36.000+08:00"
                        },
                        {
                            "id": 18,
                            "shop_id": 13,
                            "user_id": 26133,
                            "shopkeeper_name": "王秉飞1",
                            "province": "上海",
                            "city": "",
                            "user_phone": "13162865863",
                            "shop_name": "何以解忧 唯有暴富",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 1656,
                            "parent_shopkeeper_name": "掌柜",
                            "parent_user_phone": "18621806536",
                            "parent_shop_id": 6,
                            "order_number": 16,
                            "order_amount": "5311.15",
                            "commission_income_amount": "635.136",
                            "descendant_order_number": 203,
                            "descendant_order_amount": "16685.68",
                            "descendant_commission_income_amount": "16685.68",
                            "children_count": 17,
                            "descendant_count": 184,
                            "tree_depth": 3,
                            "parent_names": [
                                "高强",
                                "掌柜",
                                "王秉飞1"
                            ],
                            "parent_shop_ids": [
                                2,
                                6,
                                13
                            ],
                            "parent_ids": [
                                2,
                                11,
                                18
                            ],
                            "created_at": "2017-08-10T19:01:24.000+08:00"
                        },
                        {
                            "id": 19,
                            "shop_id": 14,
                            "user_id": 26324,
                            "shopkeeper_name": "Leslie",
                            "province": "上海",
                            "city": "",
                            "user_phone": "18221849989",
                            "shop_name": "Leslie shop",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 1656,
                            "parent_shopkeeper_name": "掌柜",
                            "parent_user_phone": "18621806536",
                            "parent_shop_id": 6,
                            "order_number": 6,
                            "order_amount": "5.65",
                            "commission_income_amount": "0.676",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 3,
                            "parent_names": [
                                "高强",
                                "掌柜",
                                "Leslie"
                            ],
                            "parent_shop_ids": [
                                2,
                                6,
                                14
                            ],
                            "parent_ids": [
                                2,
                                11,
                                19
                            ],
                            "created_at": "2017-08-10T21:05:16.000+08:00"
                        },
                        {
                            "id": 21,
                            "shop_id": 19,
                            "user_id": 16543,
                            "shopkeeper_name": "李明松",
                            "province": "安徽",
                            "city": "亳州",
                            "user_phone": "18656783389",
                            "shop_name": "路路通",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 24454,
                            "parent_shopkeeper_name": "嘻嘻嘻",
                            "parent_user_phone": "13022189206",
                            "parent_shop_id": 10,
                            "order_number": 0,
                            "order_amount": "0.0",
                            "commission_income_amount": "0.0",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 0,
                            "descendant_count": 0,
                            "tree_depth": 3,
                            "parent_names": [
                                "高强",
                                "嘻嘻嘻",
                                "李明松"
                            ],
                            "parent_shop_ids": [
                                2,
                                10,
                                19
                            ],
                            "parent_ids": [
                                2,
                                14,
                                21
                            ],
                            "created_at": "2017-08-10T22:41:19.000+08:00"
                        },
                        {
                            "id": 23,
                            "shop_id": 21,
                            "user_id": 26325,
                            "shopkeeper_name": "",
                            "province": "广西",
                            "city": "南宁",
                            "user_phone": "13300000001",
                            "shop_name": "阳光店铺_爱茜茜里总部分店",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 26303,
                            "parent_shopkeeper_name": "兰博基尼",
                            "parent_user_phone": "13764684843",
                            "parent_shop_id": 12,
                            "order_number": 11,
                            "order_amount": "643.11",
                            "commission_income_amount": "121.634",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 3,
                            "descendant_count": 8,
                            "tree_depth": 5,
                            "parent_names": [
                                "高强",
                                "掌柜",
                                "兰博基尼",
                                "王秉飞1",
                                ""
                            ],
                            "parent_shop_ids": [
                                2,
                                6,
                                12,
                                13,
                                21
                            ],
                            "parent_ids": [
                                2,
                                11,
                                17,
                                18,
                                23
                            ],
                            "created_at": "2017-08-10T22:53:38.000+08:00"
                        },
                        {
                            "id": 24,
                            "shop_id": 22,
                            "user_id": 26327,
                            "shopkeeper_name": "徐氏二",
                            "province": "广西",
                            "city": "南宁",
                            "user_phone": "13300000002",
                            "shop_name": "徐氏子店铺2",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 26303,
                            "parent_shopkeeper_name": "兰博基尼",
                            "parent_user_phone": "13764684843",
                            "parent_shop_id": 12,
                            "order_number": 0,
                            "order_amount": "0.0",
                            "commission_income_amount": "0.0",
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "children_count": 2,
                            "descendant_count": 2,
                            "tree_depth": 5,
                            "parent_names": [
                                "高强",
                                "掌柜",
                                "兰博基尼",
                                "王秉飞1",
                                "徐氏二"
                            ],
                            "parent_shop_ids": [
                                2,
                                6,
                                12,
                                13,
                                22
                            ],
                            "parent_ids": [
                                2,
                                11,
                                17,
                                18,
                                24
                            ],
                            "created_at": "2017-08-10T23:24:25.000+08:00"
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
+ `shop_id`: 2 (number) - 店铺ID
+ `user_id`: 26049 (number) - 店主用户ID
+ `shopkeeper_name`: `张三` (string) - 店主姓名
+ `province`: `湖南` (string) - 省份
+ `city`: `株洲` (string) - 城市
+ `user_phone`: `15207400547` (string) - 店主手机号
+ `shop_name`: `张三小店12千千万` (string) - 店铺名
+ `user_grade`: `grade_platinum` (string) - 店铺等级
+ `user_grade_text`: `白金店主` (string) - 店铺等级
+ `parent_shopkeeper_user_id`: 25998 (number, nullable) - 上级店主用户ID
+ `parent_shop_id`: 32 (number, nullable) - 上级店铺ID
+ `parent_shopkeeper_name`: `高强` (string) - 上级店主用户姓名
+ `parent_user_phone`: `13661638426` (string) - 上级店主用户手机号
+ `order_number`: 15507 (number) - 订单数
+ `order_amount`: 0.02 (string) - 订单销售金额
+ `commission_income_amount`: 0.02 (string) - 店铺佣金
+ `descendant_order_number`: 0 (number) - 下级店铺订单数
+ `descendant_order_amount`: 0.0 (string) - 下级店铺订单销售金额
+ `descendant_commission_income_amount`: 0.0 (string) - 下级店铺店铺佣金
+ `children_count`: 0 (number) - 店主直接下级数量
+ `descendant_count`: 0 (number) - 店主所有下级数量
+ `tree_depth`: 3 (number) - 店主所在层级
+ `parent_names`: `高强` (array[string]) - 上级名称
  + `掌柜`
+ `parent_ids`: 25998 (array[string]) - 上级用户ID
  + `1656`
+ `parent_shop_ids`: 2 (array[string]) - 上级店主ID
  + `3`
+ `created_at`: `2017-07-28T00:54:27.000+08:00` (string) - 订单销售金额
