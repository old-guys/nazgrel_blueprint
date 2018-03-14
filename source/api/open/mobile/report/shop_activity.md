# Group 店主行为报表

## 店主行为报表列表 [GET /api/open/mobile/report/shop_activities{?device,user_token,shop_id,report_date,updated_at_range}]
获取店主行为报表列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `report_date`: `2018-02-07` (string, optional) - 报表日期
    + `shop_id`: 2 (number,optional) - 店铺ID
    + `updated_at_range`: 1_hour_ago (enum[string], optional) - 更新时间范围
        + Members
          + 30_minute_ago - 近30分钟
          + 1_hour_ago - 近1个小时
          + 1_day_ago - 近1天
          + 1_month_ago - 近1个月

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
                            "id": 3576,
                            "shop_id": 649,
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
                            "children_count": 0,
                            "children_commission_income_amount": "0.0",
                            "descendant_count": 0,
                            "descendant_activation_count": 0,
                            "descendant_order_number": 0,
                            "descendant_order_amount": "0.0",
                            "descendant_commission_income_amount": "0.0",
                            "ecn_grade_gold_count": 0,
                            "created_at": "2018-03-02T16:00:19.000+08:00",
                            "updated_at": "2018-03-02T16:00:19.000+08:00"
                        }
                    ]
                }
            }

## 自然时间段店主行为报表列表 [GET /api/open/mobile/report/shop_activities/range_stat{?device,user_token,shop_id,report_date,updated_at_range}]
获取按自然时间段的店主行为报表列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `report_date`: `2018-02-07` (string, optional) - 报表日期
    + `shop_id`: 2 (number,optional) - 店铺ID
    + `updated_at_range`: 1_hour_ago (enum[string], optional) - 更新时间范围
        + Members
          + 30_minute_ago - 近30分钟
          + 1_hour_ago - 近1个小时
          + 1_day_ago - 近1天
          + 1_month_ago - 近1个月

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
            + models (array[RangeStatReportShopActivity], fixed-type)

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
                            "id": 3576,
                            "shop_id": 649,
                            "week_shared_count": 1,
                            "month_shared_count": 0,
                            "week_view_count": 0,
                            "month_view_count": 0,
                            "week_viewer_count": 0,
                            "month_viewer_count": 0,
                            "week_order_number": 1,
                            "month_order_number": 0,
                            "week_shopkeeper_order_number": 1,
                            "month_shopkeeper_order_number": 0,
                            "week_sale_order_number": 0,
                            "month_sale_order_number": 0,
                            "week_order_amount": "888.88",
                            "month_order_amount": "0.0",
                            "week_commission_income_amount": "444.44",
                            "month_commission_income_amount": "0.0",
                            "week_shopkeeper_order_amount": "888.88",
                            "month_shopkeeper_order_amount": "0.0",
                            "week_sale_order_amount": "0.0",
                            "month_sale_order_amount": "0.0",
                            "week_children_grade_platinum_count": 0,
                            "month_children_grade_platinum_count": 0,
                            "week_children_grade_gold_count": 0,
                            "month_children_grade_gold_count": 0,
                            "week_ecn_grade_platinum_count": 0,
                            "month_ecn_grade_platinum_count": 0,
                            "week_children_count": 0,
                            "month_children_count": 0,
                            "week_children_commission_income_amount": "0.0",
                            "month_children_commission_income_amount": "0.0",
                            "week_descendant_count": 0,
                            "month_descendant_count": 0,
                            "week_descendant_activation_count": 0,
                            "month_descendant_activation_count": 0,
                            "week_descendant_order_number": 0,
                            "month_descendant_order_number": 0,
                            "week_descendant_order_amount": "0.0",
                            "month_descendant_order_amount": "0.0",
                            "week_descendant_commission_income_amount": "0.0",
                            "month_descendant_commission_income_amount": "0.0",
                            "week_ecn_grade_gold_count": 0,
                            "month_ecn_grade_gold_count": 0,
                            "created_at": "2018-03-02T16:00:19.000+08:00",
                            "updated_at": "2018-03-02T16:00:19.000+08:00"
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
+ `children_count`: 23 (number) - 当天邀请店主数
+ `children_commission_income_amount`: `0.0` (string) - 当天邀请店主佣金金额
+ `descendant_count`: 23 (number) - 当天下级店主数
+ `descendant_activation_count`: 23 (number) - 当天下级激活数
+ `descendant_order_number`: 0 (number) - 当天下级店主订单
+ `descendant_order_amount`: `0.0` (string) - 当天下级店主订单金额
+ `descendant_commission_income_amount`: `0.0` (string) - 当天下级店主佣金金额
+ created_at: `2018-01-25T17:56:39.000+08:00` (string) - 创建时间
+ updated_at: `2018-01-25T17:56:39.000+08:00` (string) - 更新时间
## RangeStatReportShopActivity (object)
+ `id`: 665 (number) - ID
+ `shop_id`: 2 (number) - 店铺ID
+ `week_shared_count`: 3 (number) - 本周分享量
+ `week_view_count`: 3 (number) - 本周浏览量
+ `week_viewer_count`: 3 (number) - 本周访客数
+ `week_order_number`: 3 (number) - 本周订单数
+ `week_shopkeeper_order_number`: 2 (number) - 本周自购订单数
+ `week_sale_order_number`: 1 (number) - 本周销售订单数
+ `week_order_amount`: 58.0 (string) - 当天订单金额
+ `week_commission_income_amount`: 18.0 (string) - 本周店铺佣金
+ `week_shopkeeper_order_amount`: 20.0 (string) - 本周自购订单金额
+ `week_sale_order_amount`: 38.0 (string) - 本周销售订单金额
+ `week_children_grade_platinum_count`: 1 (number) - 本周直接邀请白金用户数
+ `week_children_grade_gold_count`: 2 (number) - 本周直接邀请黄金店主数
+ `week_ecn_grade_platinum_count`: 33 (number) - 本周ECN白金店主数
+ `week_ecn_grade_gold_count`: 23 (number) - 本周ECN黄金店主数
+ `week_children_count`: 23 (number) - 本周店主数
+ `week_children_commission_income_amount`: `0.0` (string) - 本周店主佣金金额
+ `week_descendant_count`: 23 (number) - 本周下级店主数
+ `week_descendant_activation_count`: 23 (number) - 本周下级激活数
+ `week_descendant_order_number`: 0 (number) - 本周店主订单
+ `week_descendant_order_amount`: `0.0` (string) - 本周店主订单金额
+ `week_descendant_commission_income_amount`: `0.0` (string) - 本周店主佣金金额
+ `month_shared_count`: 3 (number) - 本月分享量
+ `month_view_count`: 3 (number) - 本月浏览量
+ `month_viewer_count`: 3 (number) - 本月访客数
+ `month_order_number`: 3 (number) - 本月订单数
+ `month_shopkeeper_order_number`: 2 (number) - 本月自购订单数
+ `month_sale_order_number`: 1 (number) - 本月销售订单数
+ `month_order_amount`: 58.0 (string) - 本月订单金额
+ `month_commission_income_amount`: 18.0 (string) - 本月店铺佣金
+ `month_shopkeeper_order_amount`: 20.0 (string) - 本月自购订单金额
+ `month_sale_order_amount`: 38.0 (string) - 本月销售订单金额
+ `month_children_grade_platinum_count`: 1 (number) - 本月直接邀请白金用户数
+ `month_children_grade_gold_count`: 2 (number) - 本月直接邀请黄金店主数
+ `month_ecn_grade_platinum_count`: 33 (number) - 本月ECN白金店主数
+ `month_ecn_grade_gold_count`: 23 (number) - 本月ECN黄金店主数
+ `month_children_count`: 23 (number) - 本月邀请店主数
+ `month_children_commission_income_amount`: `0.0` (string) - 本月邀请店主佣金金额
+ `month_descendant_count`: 23 (number) - 本月下级店主数
+ `month_descendant_activation_count`: 23 (number) - 本月下级激活数
+ `month_descendant_order_number`: 0 (number) - 本月下级店主订单
+ `month_descendant_order_amount`: `0.0` (string) - 本月下级店主订单金额
+ `month_descendant_commission_income_amount`: `0.0` (string) - 本月下级店主佣金金额
+ created_at: `2018-01-25T17:56:39.000+08:00` (string) - 创建时间
+ updated_at: `2018-01-25T17:56:39.000+08:00` (string) - 更新时间
