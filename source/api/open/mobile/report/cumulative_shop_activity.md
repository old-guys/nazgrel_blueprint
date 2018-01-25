# Group 累计店主行为报表

## 累计店主行为报表列表 [GET /api/open/mobile/report/cumulative_shop_activities{?device,user_token}]
获取累计店主行为报表列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 2 (number) - 总条数
            + total_pages: 1 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SampleReportCumulativeShopActivity])

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 417,
                    "total_pages": 139,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 3,
                    "page": 0,
                    "models": [
                        {
                            "id": 665,
                            "shop_id": 537,
                            "day_0_order_number": 3,
                            "day_7_order_number": 5,
                            "day_30_order_number": 13,
                            "day_0_shopkeeper_order_number": 2,
                            "day_7_shopkeeper_order_number": 3,
                            "day_30_shopkeeper_order_number": 8,
                            "day_0_sale_order_number": 1,
                            "day_7_sale_order_number": 2,
                            "day_30_sale_order_number": 7,
                            "day_0_order_amount": "58.0",
                            "day_7_order_amount": "200.0",
                            "day_30_order_amount": "1000.0",
                            "day_0_shopkeeper_order_amount": "20.0",
                            "day_7_shopkeeper_order_amount": "20.0",
                            "day_30_shopkeeper_order_amount": "230.0",
                            "day_0_sale_order_amount": "38.0",
                            "day_7_sale_order_amount": "180.0",
                            "day_30_sale_order_amount": "770.0",
                            "day_0_children_grade_platinum_count": 1,
                            "day_7_children_grade_platinum_count": 3,
                            "day_30_children_grade_platinum_count": 5,
                            "day_0_children_grade_gold_count": 2,
                            "day_7_children_grade_gold_count": 5,
                            "day_30_children_grade_gold_count": 10,
                            "day_0_ecn_grade_platinum_count": 33,
                            "day_7_ecn_grade_platinum_count": 44,
                            "day_30_ecn_grade_platinum_count": 66,
                            "day_0_ecn_grade_gold_count": 23,
                            "day_7_ecn_grade_gold_count": 33,
                            "day_30_ecn_grade_gold_count": 35,
                            "created_at": "2018-01-25T17:56:44.000+08:00",
                            "updated_at": "2018-01-25T17:56:44.000+08:00"
                        },
                        {
                            "id": 664,
                            "shop_id": 536,
                            "day_0_order_number": 4,
                            "day_7_order_number": 5,
                            "day_30_order_number": 13,
                            "day_0_shopkeeper_order_number": 1,
                            "day_7_shopkeeper_order_number": 3,
                            "day_30_shopkeeper_order_number": 8,
                            "day_0_sale_order_number": 3,
                            "day_7_sale_order_number": 2,
                            "day_30_sale_order_number": 7,
                            "day_0_order_amount": "108.0",
                            "day_7_order_amount": "200.0",
                            "day_30_order_amount": "1000.0",
                            "day_0_shopkeeper_order_amount": "20.0",
                            "day_7_shopkeeper_order_amount": "20.0",
                            "day_30_shopkeeper_order_amount": "230.0",
                            "day_0_sale_order_amount": "88.0",
                            "day_7_sale_order_amount": "180.0",
                            "day_30_sale_order_amount": "770.0",
                            "day_0_children_grade_platinum_count": 12,
                            "day_7_children_grade_platinum_count": 3,
                            "day_30_children_grade_platinum_count": 5,
                            "day_0_children_grade_gold_count": 32,
                            "day_7_children_grade_gold_count": 5,
                            "day_30_children_grade_gold_count": 10,
                            "day_0_ecn_grade_platinum_count": 8,
                            "day_7_ecn_grade_platinum_count": 44,
                            "day_30_ecn_grade_platinum_count": 66,
                            "day_0_ecn_grade_gold_count": 3,
                            "day_7_ecn_grade_gold_count": 13,
                            "day_30_ecn_grade_gold_count": 25,
                            "created_at": "2018-01-25T17:56:44.000+08:00",
                            "updated_at": "2018-01-25T17:56:44.000+08:00"
                        },
                        {
                            "id": 663,
                            "shop_id": 535,
                            "day_0_order_number": 0,
                            "day_7_order_number": 0,
                            "day_30_order_number": 0,
                            "day_0_shopkeeper_order_number": 0,
                            "day_7_shopkeeper_order_number": 0,
                            "day_30_shopkeeper_order_number": 0,
                            "day_0_sale_order_number": 0,
                            "day_7_sale_order_number": 0,
                            "day_30_sale_order_number": 0,
                            "day_0_order_amount": "0.0",
                            "day_7_order_amount": "0.0",
                            "day_30_order_amount": "0.0",
                            "day_0_shopkeeper_order_amount": "0.0",
                            "day_7_shopkeeper_order_amount": "0.0",
                            "day_30_shopkeeper_order_amount": "0.0",
                            "day_0_sale_order_amount": "0.0",
                            "day_7_sale_order_amount": "0.0",
                            "day_30_sale_order_amount": "0.0",
                            "day_0_children_grade_platinum_count": 0,
                            "day_7_children_grade_platinum_count": 0,
                            "day_30_children_grade_platinum_count": 0,
                            "day_0_children_grade_gold_count": 0,
                            "day_7_children_grade_gold_count": 0,
                            "day_30_children_grade_gold_count": 0,
                            "day_0_ecn_grade_platinum_count": 0,
                            "day_7_ecn_grade_platinum_count": 0,
                            "day_30_ecn_grade_platinum_count": 0,
                            "day_0_ecn_grade_gold_count": 0,
                            "day_7_ecn_grade_gold_count": 0,
                            "day_30_ecn_grade_gold_count": 0,
                            "created_at": "2018-01-25T17:56:44.000+08:00",
                            "updated_at": "2018-01-25T17:56:44.000+08:00"
                        }
                    ]
                }
            }

## Data Structures
### SampleReportCumulativeShopActivity (object)
+ `id`: 1 (number) - ID
+ `shop_id`: 16 (number) - 店铺ID
+ `day_0_order_number`: 2 (number) - 当天订单数
+ `day_7_order_number`: 22 (number) - 7天订单数
+ `day_30_order_number`: 22 (number) - 30天订单数
+ `day_0_shopkeeper_order_number`: 2 (number) - 当天自购订单数
+ `day_7_shopkeeper_order_number`: 12 (number) - 7天自购订单数
+ `day_30_shopkeeper_order_number`: 19 (number) - 30天自购订单数
+ `day_0_sale_order_number`: 0 (number) - 当天销售订单数
+ `day_7_sale_order_number`: 10 (number) - 7天销售订单数
+ `day_30_sale_order_number`: 13 (number) - 30天销售订单数
+ `day_0_order_amount`: 0 (string) - 当天订单金额
+ `day_7_order_amount`: 10 (string) - 7天订单金额
+ `day_30_order_amount`: 13 (string) - 30天订单金额
+ `day_0_shopkeeper_order_amount`: 0 (string) - 当天自购订单金额
+ `day_7_shopkeeper_order_amount`: 10 (string) - 7天自购订单金额
+ `day_30_shopkeeper_order_amount`: 13 (string) - 30天自购订单金额
+ `day_0_sale_order_amount`: 0 (string) - 当天销售订单金额
+ `day_7_sale_order_amount`: 10 (string) - 7天销售订单金额
+ `day_30_sale_order_amount`: 13 (string) - 30天销售订单金额
+ `day_0_children_grade_platinum_count`: 0 (number) - 当天直接邀请白金用户数
+ `day_7_children_grade_platinum_count`: 10 (number) - 7天直接邀请白金用户数
+ `day_30_children_grade_platinum_count`: 13 (number) - 30天直接邀请白金用户数
+ `day_0_children_grade_gold_count`: 0 (number) - 当天直接邀请黄金店主数
+ `day_7_children_grade_gold_count`: 10 (number) - 7天直接邀请黄金店主数
+ `day_30_children_grade_gold_count`: 13 (number) - 30天直接邀黄金店主数
+ `day_0_ecn_grade_platinum_count`: 0 (number) - 当天ECN白金店主数
+ `day_7_ecn_grade_platinum_count`: 10 (number) - 7天ECN白金店主数
+ `day_30_ecn_grade_platinum_count`: 13 (number) - 30天ECN白金店主数
+ `day_0_ecn_grade_gold_count`: 0 (number) - 当天ECN黄金店主数
+ `day_7_ecn_grade_gold_count`: 10 (number) - 7天ECN黄金店主数
+ `day_30_ecn_grade_gold_count`: 13 (number) - 30天ECN黄金店主数
+ created_at: `2017-08-10T04:42:08.000+08:00` (string) - 创建时间
+ updated_at: `2017-08-10T04:42:08.000+08:00` (string) - 更新时间
