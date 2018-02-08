# Group 店主行为报表

## 店主行为报表列表 [GET /api/open/mobile/report/shop_activities{?device,user_token,shop_id,report_date}]
获取店主行为报表列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `report_date`: `2018-02-07` (string, optional) - 报表日期
    + `shop_id`: 2 (number,optional) - 店铺ID

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
            + models (array[SampleReportShopActivity], fixed-type)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 1,
                    "total_pages": 1,
                    "current_page": 1,
                    "next_page": null,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": true,
                    "per_page": 15,
                    "page": 0,
                    "models": [
                        {
                            "id": 2570,
                            "shop_id": 34,
                            "shared_count": 0,
                            "view_count": 0,
                            "viewer_count": 0,
                            "order_number": 0,
                            "shopkeeper_order_number": 0,
                            "sale_order_number": 0,
                            "order_amount": "0.0",
                            "commission_income_amount": "0.0",
                            "shopkeeper_order_amount": "0.0",
                            "sale_order_amount": "0.0",
                            "children_grade_platinum_count": 0,
                            "children_grade_gold_count": 0,
                            "ecn_grade_platinum_count": 0,
                            "ecn_grade_gold_count": 0,
                            "created_at": "2018-02-07T11:30:25.000+08:00",
                            "updated_at": "2018-02-07T14:30:07.000+08:00"
                        }
                    ]
                }
            }

## Data Structures
### SampleReportShopActivity (object)
+ `id`: 665 (number) - ID
+ `shop_id`: 2 (number) - 店铺ID
+ `shared_count`: 3 (number) - 当天分享量
+ `view_count`: 3 (number) - 当天浏览量
+ `viewer_count`: 3 (number) - 当天访客数
+ `order_number`: 3 (number) - 当天订单数
+ `shopkeeper_order_number`: 2 (number) - 当天自购订单数
+ `sale_order_number`: 1 (number) - 当天销售订单数
+ `order_amount`: 58.0 (string) - 当天订单金额
+ `commission_income_amount`: 18.0 (string) - 当天店铺佣金
+ `shopkeeper_order_amount`: 20.0 (string) - 当天自购订单金额
+ `sale_order_amount`: 38.0 (string) - 当天销售订单金额
+ `children_grade_platinum_count`: 1 (number) - 当天直接邀请白金用户数
+ `children_grade_gold_count`: 2 (number) - 当天直接邀请黄金店主数
+ `ecn_grade_platinum_count`: 33 (number) - 当天ECN白金店主数
+ `ecn_grade_gold_count`: 23 (number) - 当天ECN黄金店主数
+ created_at: `2018-01-25T17:56:39.000+08:00` (string) - 创建时间
+ updated_at: `2018-01-25T17:56:39.000+08:00` (string) - 更新时间
