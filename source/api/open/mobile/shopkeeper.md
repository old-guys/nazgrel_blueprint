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
            + models (array[SampleShopkeeper], fixed-type)
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
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
            + models (array[SalesShopkeeper], fixed-type)
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
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "如5u4额如贱人",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "135.0"
                        },
                        {
                            "id": 210,
                            "shop_id": 275,
                            "shop_name": "2的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "2",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "130.05"
                        },
                        {
                            "id": 310,
                            "shop_id": 377,
                            "shop_name": "王2的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "王2",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "10.02"
                        },
                        {
                            "id": 190,
                            "shop_id": 189,
                            "shop_name": "wu的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "wu",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.02"
                        },
                        {
                            "id": 192,
                            "shop_id": 191,
                            "shop_name": "li的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "li",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.01"
                        },
                        {
                            "id": 222,
                            "shop_id": 287,
                            "shop_name": "biubiu",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.01"
                        },
                        {
                            "id": 260,
                            "shop_id": 325,
                            "shop_name": "王秉飞04的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "王秉飞04",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 263,
                            "shop_id": 328,
                            "shop_name": "15121048956的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "顾哈",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 8457,
                            "shop_id": 531,
                            "shop_name": "王1的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "王1",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 273,
                            "shop_id": 338,
                            "shop_name": "哦哦哦哦哦哦的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "哦哦哦哦哦哦",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 275,
                            "shop_id": 340,
                            "shop_name": "17601234567的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "17601234567",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 276,
                            "shop_id": 341,
                            "shop_name": "15000000098的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "15000000098",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 278,
                            "shop_id": 343,
                            "shop_name": "发图好好的大家的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "发图好好的大家",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 26,
                            "shop_id": 24,
                            "shop_name": "孔侑太太的百宝箱",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "李丹",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        },
                        {
                            "id": 290,
                            "shop_id": 356,
                            "shop_name": "13661467242的小店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg",
                            "shopkeeper_name": "13661467242",
                            "province": "上海",
                            "city": "上海",
                            "order_amount": "0.0"
                        }
                    ]
                }
            }

## 店主关系拓扑 [/api/open/mobile/shopkeepers/report{?device,user_token,shop_id}]
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
            + total_pages: 99 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 5 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[ReportShopkeeper], fixed-type)
    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 494,
                    "total_pages": 99,
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
                            "shop_id": 1,
                            "user_id": 12345,
                            "shopkeeper_name": "Andox",
                            "shopkeeper_real_name": null,
                            "province": "浙江",
                            "city": "杭州",
                            "status": "normal",
                            "status_text": "正常",
                            "user_phone": "15888888888",
                            "shop_name": "张三小店12千千万",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/image/9fa53b1117ea46ac81f12d1f55fa0d50.jpg",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "parent_shop_id": null,
                            "total_income_amount": "1441.9",
                            "balance_amount": "1441.9",
                            "withdraw_amount": "0.0",
                            "blocked_amount": "0.0",
                            "create_shop_amount": "0.0",
                            "invite_code": "inviteCo",
                            "invite_qrcode_url": "http://zmcimg.ishanggang.com/static/img/static/img/qrcode/BnmPHocI_inviteQrcode.jpg",
                            "order_number": 671,
                            "order_amount": "8495570.43",
                            "shopkeeper_order_number": 0,
                            "shopkeeper_order_amount": "0.0",
                            "sale_order_number": 671,
                            "sale_order_amount": "8495570.43",
                            "commission_income_amount": "1041131.246",
                            "descendant_order_number": 1342,
                            "descendant_order_amount": "16991140.86",
                            "descendant_commission_income_amount": "2082262.492",
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
                            "shopkeeper_real_name": "",
                            "province": "上海",
                            "city": "",
                            "status": "normal",
                            "status_text": "正常",
                            "user_phone": "13661638426",
                            "shop_name": "解忧杂货店",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/image/25b773c1f4644fcdbcca1cc1dee90659.jpg",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "parent_shop_id": null,
                            "total_income_amount": "8229.557",
                            "balance_amount": "7571.021",
                            "withdraw_amount": "530.0",
                            "blocked_amount": "17.136",
                            "create_shop_amount": "0.0",
                            "invite_code": "gaoq1234",
                            "invite_qrcode_url": "http://zmcimg.ishanggang.com/static/img/static/img/qrcode/BnmPHocI_inviteQrcode.jpg",
                            "order_number": 2,
                            "order_amount": "12990.03",
                            "shopkeeper_order_number": 1,
                            "shopkeeper_order_amount": "12990.0",
                            "sale_order_number": 1,
                            "sale_order_amount": "0.03",
                            "commission_income_amount": "2054.003",
                            "descendant_order_number": 482,
                            "descendant_order_amount": "69144.89",
                            "descendant_commission_income_amount": "11085.167",
                            "children_count": 48,
                            "descendant_count": 454,
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
                            "shopkeeper_real_name": null,
                            "province": null,
                            "city": null,
                            "status": "normal",
                            "status_text": "正常",
                            "user_phone": "19888888888",
                            "shop_name": "gg=jasldfjadsklf",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/image/5b0272f43df84733b932c40741e69860.jpg",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "parent_shop_id": null,
                            "total_income_amount": "0.0",
                            "balance_amount": "0.0",
                            "withdraw_amount": "0.0",
                            "blocked_amount": "0.0",
                            "create_shop_amount": "0.0",
                            "invite_code": null,
                            "invite_qrcode_url": "http://zmcimg.ishanggang.com/static/img/static/img/qrcode/BnmPHocI_inviteQrcode.jpg",
                            "order_number": 0,
                            "order_amount": "0.0",
                            "shopkeeper_order_number": 0,
                            "shopkeeper_order_amount": "0.0",
                            "sale_order_number": 0,
                            "sale_order_amount": "0.0",
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
                            "shopkeeper_real_name": null,
                            "province": null,
                            "city": null,
                            "status": "normal",
                            "status_text": "正常",
                            "user_phone": "12111111111",
                            "shop_name": "张三小店12千千万",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/image/9fa53b1117ea46ac81f12d1f55fa0d50.jpg",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": null,
                            "parent_shopkeeper_name": null,
                            "parent_user_phone": null,
                            "parent_shop_id": null,
                            "total_income_amount": "0.003",
                            "balance_amount": "0.0",
                            "withdraw_amount": "0.0",
                            "blocked_amount": "0.003",
                            "create_shop_amount": "0.0",
                            "invite_code": null,
                            "invite_qrcode_url": "http://zmcimg.ishanggang.com/static/img/static/img/qrcode/BnmPHocI_inviteQrcode.jpg",
                            "order_number": 671,
                            "order_amount": "8495570.43",
                            "shopkeeper_order_number": 3,
                            "shopkeeper_order_amount": "38970.0",
                            "sale_order_number": 668,
                            "sale_order_amount": "8456600.43",
                            "commission_income_amount": "1041131.246",
                            "descendant_order_number": 671,
                            "descendant_order_amount": "8495570.43",
                            "descendant_commission_income_amount": "1041131.246",
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
                            "shopkeeper_real_name": null,
                            "province": "湖南",
                            "city": "株洲",
                            "status": "normal",
                            "status_text": "正常",
                            "user_phone": "15207400547",
                            "shop_name": "张三小店12千千万",
                            "shop_img_url": "http://zmcimg.ishanggang.com/static/img/image/9fa53b1117ea46ac81f12d1f55fa0d50.jpg",
                            "user_grade": "grade_platinum",
                            "user_grade_text": "白金店主",
                            "parent_shopkeeper_id": 25998,
                            "parent_shopkeeper_name": "高强",
                            "parent_user_phone": "13661638426",
                            "parent_shop_id": 2,
                            "total_income_amount": "40775.434",
                            "balance_amount": "48.012",
                            "withdraw_amount": "0.0",
                            "blocked_amount": "-2.978",
                            "create_shop_amount": "0.0",
                            "invite_code": "BnmPHocI",
                            "invite_qrcode_url": "http://zmcimg.ishanggang.com/static/img/static/img/qrcode/BnmPHocI_inviteQrcode.jpg",
                            "order_number": 671,
                            "order_amount": "8495570.43",
                            "shopkeeper_order_number": 0,
                            "shopkeeper_order_amount": "0.0",
                            "sale_order_number": 671,
                            "sale_order_amount": "8495570.43",
                            "commission_income_amount": "1041131.246",
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
                        }
                    ]
                }
            }


## Data Structures
### SampleShopkeeper (object)
+ `id`: 10 (number) - ID
+ `shop_id`: `2` (number) - 店铺ID
+ `shop_name`: `王1的小店` (string) - 店铺名称
+ `shop_img_url`: `http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg` (string) - 店铺头像
+ `shopkeeper_name`: `高强` (string) - 店主姓名
+ `shopkeeper_real_name`: `高强` (string, nullable) - 店主真实姓名
+ `province`: `吉林` (string) - 省份
+ `city`: `长春` (string) - 城市
+ `user_grade`: `grade_gold` (string) - 等级
+ `user_grade_text`: `黄金店主` (string) - 等级
+ `today_order_amount`: 0.0 (string) - 订单销售金额
+ `today_order_number`: 0 (number) - 订单数
+ `created_at`: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
### SalesShopkeeper (object)
+ `id`: 10 (number) - ID
+ `shop_id`: `2` (number) - 店铺ID
+ `shop_name`: `王1的小店` (string) - 店铺名称
+ `shop_img_url`: `http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg` (string) - 店铺头像
+ `shopkeeper_name`: `高强` (string) - 店主姓名
+ `province`: `吉林` (string) - 省份
+ `city`: `长春` (string) - 城市
+ `order_amount`: 0.0 (string) - 订单销售金额
### ReportShopkeeper (object)
+ `id`: 10 (number) - ID
+ `shop_id`: 2 (number) - 店铺ID
+ `user_id`: 26049 (number) - 店主用户ID
+ `shopkeeper_name`: `张三` (string) - 店主姓名
+ `province`: `湖南` (string, nullable) - 省份
+ `city`: `株洲` (string, nullable) - 城市
+ `status`: `normal` (string) - 状态
+ `status_text`: `正常` (string) - 状态

+ `user_phone`: `15207400547` (string) - 店主手机号
+ `shop_name`: `张三小店12千千万` (string) - 店铺名
+ `shop_img_url`: `http://zmcimg.ishanggang.com/static/img/touxiang_mr.jpg` (string) - 店铺头像
+ `user_grade`: `grade_platinum` (string) - 店铺等级
+ `user_grade_text`: `白金店主` (string) - 店铺等级
+ `parent_shopkeeper_user_id`: 25998 (number, nullable) - 上级店主用户ID
+ `parent_shop_id`: 32 (number, nullable) - 上级店铺ID
+ `parent_shopkeeper_name`: `高强` (string, nullable) - 上级店主用户姓名
+ `parent_user_phone`: `13661638426` (string, nullable) - 上级店主用户手机号
+ `total_income_amount`: 1441.9 (string) - 账户总收入
+ `balance_amount`: 1441.9 (string) - 账户余额
+ `withdraw_amount`: 0.0 (string) - 已提现金额
+ `blocked_amount`: 0.0 (string) - 冻结金额
+ `create_shop_amount`: 0.0 (string) - 开店支付金额
+ `invite_code`: `inviteCo` (string, nullable) - 邀请码
+ `invite_qrcode_url`: `http://zmcimg.ishanggang.com/static/img/static/img/qrcode/BnmPHocI_inviteQrcode.jpg` (string, nullable) - 邀请二维码图片url
+ `order_number`: 15507 (number) - 订单数
+ `order_amount`: 0.02 (string) - 订单销售金额
+ `shopkeeper_order_number`: 2003 (number) - 自购订单数
+ `shopkeeper_order_amount`: 312.02 (string) - 自购订单销售金额
+ `sale_order_number`: 2003 (number) - 销售订单数
+ `sale_order_amount`: 312.02 (string) - 销售订单销售金额
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
