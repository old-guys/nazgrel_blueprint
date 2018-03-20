# Group 累计店主行为报表

## 累计店主行为报表列表 [GET /api/open/mobile/report/cumulative_shop_activities{?device,user_token,shop_id,updated_at_range}]
获取累计店主行为报表列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
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
            + per_page: 3 (number) - 每页条数
            + page: 1 (number) - 页码
            + models (array[SampleReportCumulativeShopActivity], fixed-type)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "total_count": 4797,
                    "total_pages": 1599,
                    "current_page": 1,
                    "next_page": 2,
                    "prev_page": null,
                    "first_page?": true,
                    "last_page?": false,
                    "per_page": 3,
                    "page": 0,
                    "models": [
                        {
                            "id": 4798,
                            "shop_id": 6739,
                            "day_0_shared_count": 0,
                            "day_7_shared_count": 0,
                            "day_30_shared_count": 0,
                            "total_shared_count": 0,
                            "day_0_view_count": 0,
                            "day_7_view_count": 0,
                            "day_30_view_count": 0,
                            "total_view_count": 0,
                            "day_0_viewer_count": 0,
                            "day_7_viewer_count": 0,
                            "day_30_viewer_count": 0,
                            "total_viewer_count": 0,
                            "day_0_order_number": 0,
                            "day_7_order_number": 0,
                            "day_30_order_number": 0,
                            "total_order_number": 1,
                            "day_0_shopkeeper_order_number": 0,
                            "day_7_shopkeeper_order_number": 0,
                            "day_30_shopkeeper_order_number": 0,
                            "total_shopkeeper_order_number": 1,
                            "day_0_sale_order_number": 0,
                            "day_7_sale_order_number": 0,
                            "day_30_sale_order_number": 0,
                            "total_sale_order_number": 0,
                            "day_0_order_amount": "0.0",
                            "day_7_order_amount": "0.0",
                            "day_30_order_amount": "0.0",
                            "total_order_amount": "2.1",
                            "day_0_commission_income_amount": "0.0",
                            "day_7_commission_income_amount": "0.0",
                            "day_30_commission_income_amount": "0.0",
                            "total_commission_income_amount": "0.0",
                            "day_0_income_coin": "0.0",
                            "day_7_income_coin": "0.0",
                            "day_30_income_coin": "0.0",
                            "total_income_coin": "0.0",
                            "day_0_use_coin": "0.0",
                            "day_7_use_coin": "0.0",
                            "day_30_use_coin": "0.0",
                            "total_use_coin": "0.0",
                            "day_0_withdraw_amount": "0.0",
                            "day_7_withdraw_amount": "0.0",
                            "day_30_withdraw_amount": "0.0",
                            "total_withdraw_amount": "0.0",
                            "day_0_shopkeeper_order_amount": "0.0",
                            "day_7_shopkeeper_order_amount": "0.0",
                            "day_30_shopkeeper_order_amount": "0.0",
                            "total_shopkeeper_order_amount": "2.1",
                            "day_0_sale_order_amount": "0.0",
                            "day_7_sale_order_amount": "0.0",
                            "day_30_sale_order_amount": "0.0",
                            "total_sale_order_amount": "0.0",
                            "day_0_children_grade_platinum_count": 0,
                            "day_7_children_grade_platinum_count": 3,
                            "day_30_children_grade_platinum_count": 3,
                            "total_children_grade_platinum_count": 3,
                            "day_0_children_grade_gold_count": 0,
                            "day_7_children_grade_gold_count": 1,
                            "day_30_children_grade_gold_count": 1,
                            "total_children_grade_gold_count": 1,
                            "day_0_ecn_grade_platinum_count": 0,
                            "day_7_ecn_grade_platinum_count": 3,
                            "day_30_ecn_grade_platinum_count": 3,
                            "total_ecn_grade_platinum_count": 3,
                            "day_0_children_count": 0,
                            "day_7_children_count": 4,
                            "day_30_children_count": 4,
                            "total_children_count": 4,
                            "day_0_children_commission_income_amount": 0,
                            "day_7_children_commission_income_amount": 0,
                            "day_30_children_commission_income_amount": 0,
                            "total_children_commission_income_amount": 0,
                            "day_0_descendant_count": 0,
                            "day_7_descendant_count": 4,
                            "day_30_descendant_count": 4,
                            "total_descendant_count": 4,
                            "day_0_descendant_activation_count": 0,
                            "day_7_descendant_activation_count": 4,
                            "day_30_descendant_activation_count": 4,
                            "total_descendant_activation_count": 4,
                            "day_0_descendant_order_number": 0,
                            "day_7_descendant_order_number": 4,
                            "day_30_descendant_order_number": 4,
                            "total_descendant_order_number": 4,
                            "day_0_descendant_order_amount": "0.0",
                            "day_7_descendant_order_amount": "117.3",
                            "day_30_descendant_order_amount": "117.3",
                            "total_descendant_order_amount": "117.3",
                            "day_0_descendant_commission_income_amount": "0.0",
                            "day_7_descendant_commission_income_amount": "0.0",
                            "day_30_descendant_commission_income_amount": "0.0",
                            "total_descendant_commission_income_amount": "0.0",
                            "day_0_ecn_grade_gold_count": 0,
                            "day_7_ecn_grade_gold_count": 1,
                            "day_30_ecn_grade_gold_count": 1,
                            "total_ecn_grade_gold_count": 1,
                            "created_at": "2018-03-19T16:40:19.000+08:00",
                            "updated_at": "2018-03-20T16:00:58.000+08:00"
                        },
                        {
                            "id": 4797,
                            "shop_id": 6694,
                            "day_0_shared_count": 0,
                            "day_7_shared_count": 0,
                            "day_30_shared_count": 0,
                            "total_shared_count": 1,
                            "day_0_view_count": 0,
                            "day_7_view_count": 0,
                            "day_30_view_count": 0,
                            "total_view_count": 0,
                            "day_0_viewer_count": 0,
                            "day_7_viewer_count": 0,
                            "day_30_viewer_count": 0,
                            "total_viewer_count": 0,
                            "day_0_order_number": 0,
                            "day_7_order_number": 0,
                            "day_30_order_number": 0,
                            "total_order_number": 1,
                            "day_0_shopkeeper_order_number": 0,
                            "day_7_shopkeeper_order_number": 0,
                            "day_30_shopkeeper_order_number": 0,
                            "total_shopkeeper_order_number": 1,
                            "day_0_sale_order_number": 0,
                            "day_7_sale_order_number": 0,
                            "day_30_sale_order_number": 0,
                            "total_sale_order_number": 0,
                            "day_0_order_amount": "0.0",
                            "day_7_order_amount": "0.0",
                            "day_30_order_amount": "0.0",
                            "total_order_amount": "189.0",
                            "day_0_commission_income_amount": "0.0",
                            "day_7_commission_income_amount": "0.0",
                            "day_30_commission_income_amount": "0.0",
                            "total_commission_income_amount": "0.0",
                            "day_0_income_coin": "0.0",
                            "day_7_income_coin": "0.0",
                            "day_30_income_coin": "0.0",
                            "total_income_coin": "0.0",
                            "day_0_use_coin": "0.0",
                            "day_7_use_coin": "0.0",
                            "day_30_use_coin": "0.0",
                            "total_use_coin": "0.0",
                            "day_0_withdraw_amount": "0.0",
                            "day_7_withdraw_amount": "0.0",
                            "day_30_withdraw_amount": "0.0",
                            "total_withdraw_amount": "140.0",
                            "day_0_shopkeeper_order_amount": "0.0",
                            "day_7_shopkeeper_order_amount": "0.0",
                            "day_30_shopkeeper_order_amount": "0.0",
                            "total_shopkeeper_order_amount": "189.0",
                            "day_0_sale_order_amount": "0.0",
                            "day_7_sale_order_amount": "0.0",
                            "day_30_sale_order_amount": "0.0",
                            "total_sale_order_amount": "0.0",
                            "day_0_children_grade_platinum_count": 0,
                            "day_7_children_grade_platinum_count": 0,
                            "day_30_children_grade_platinum_count": 0,
                            "total_children_grade_platinum_count": 2,
                            "day_0_children_grade_gold_count": 0,
                            "day_7_children_grade_gold_count": 0,
                            "day_30_children_grade_gold_count": 0,
                            "total_children_grade_gold_count": 0,
                            "day_0_ecn_grade_platinum_count": 0,
                            "day_7_ecn_grade_platinum_count": 0,
                            "day_30_ecn_grade_platinum_count": 0,
                            "total_ecn_grade_platinum_count": 2,
                            "day_0_children_count": 0,
                            "day_7_children_count": 0,
                            "day_30_children_count": 0,
                            "total_children_count": 2,
                            "day_0_children_commission_income_amount": 0,
                            "day_7_children_commission_income_amount": 0,
                            "day_30_children_commission_income_amount": 0,
                            "total_children_commission_income_amount": 0,
                            "day_0_descendant_count": 0,
                            "day_7_descendant_count": 0,
                            "day_30_descendant_count": 0,
                            "total_descendant_count": 2,
                            "day_0_descendant_activation_count": 0,
                            "day_7_descendant_activation_count": 0,
                            "day_30_descendant_activation_count": 0,
                            "total_descendant_activation_count": 2,
                            "day_0_descendant_order_number": 0,
                            "day_7_descendant_order_number": 0,
                            "day_30_descendant_order_number": 0,
                            "total_descendant_order_number": 1,
                            "day_0_descendant_order_amount": "0.0",
                            "day_7_descendant_order_amount": "0.0",
                            "day_30_descendant_order_amount": "0.0",
                            "total_descendant_order_amount": "29.9",
                            "day_0_descendant_commission_income_amount": "0.0",
                            "day_7_descendant_commission_income_amount": "0.0",
                            "day_30_descendant_commission_income_amount": "0.0",
                            "total_descendant_commission_income_amount": "0.0",
                            "day_0_ecn_grade_gold_count": 0,
                            "day_7_ecn_grade_gold_count": 0,
                            "day_30_ecn_grade_gold_count": 0,
                            "total_ecn_grade_gold_count": 0,
                            "created_at": "2018-03-19T16:40:19.000+08:00",
                            "updated_at": "2018-03-20T16:00:58.000+08:00"
                        },
                        {
                            "id": 4796,
                            "shop_id": 6740,
                            "day_0_shared_count": 0,
                            "day_7_shared_count": 0,
                            "day_30_shared_count": 0,
                            "total_shared_count": 1,
                            "day_0_view_count": 0,
                            "day_7_view_count": 0,
                            "day_30_view_count": 0,
                            "total_view_count": 0,
                            "day_0_viewer_count": 0,
                            "day_7_viewer_count": 0,
                            "day_30_viewer_count": 0,
                            "total_viewer_count": 0,
                            "day_0_order_number": 0,
                            "day_7_order_number": 0,
                            "day_30_order_number": 0,
                            "total_order_number": 1,
                            "day_0_shopkeeper_order_number": 0,
                            "day_7_shopkeeper_order_number": 0,
                            "day_30_shopkeeper_order_number": 0,
                            "total_shopkeeper_order_number": 1,
                            "day_0_sale_order_number": 0,
                            "day_7_sale_order_number": 0,
                            "day_30_sale_order_number": 0,
                            "total_sale_order_number": 0,
                            "day_0_order_amount": "0.0",
                            "day_7_order_amount": "0.0",
                            "day_30_order_amount": "0.0",
                            "total_order_amount": "2.1",
                            "day_0_commission_income_amount": "0.0",
                            "day_7_commission_income_amount": "0.0",
                            "day_30_commission_income_amount": "0.0",
                            "total_commission_income_amount": "0.0",
                            "day_0_income_coin": "0.0",
                            "day_7_income_coin": "0.0",
                            "day_30_income_coin": "0.0",
                            "total_income_coin": "0.0",
                            "day_0_use_coin": "0.0",
                            "day_7_use_coin": "0.0",
                            "day_30_use_coin": "0.0",
                            "total_use_coin": "0.0",
                            "day_0_withdraw_amount": "0.0",
                            "day_7_withdraw_amount": "0.0",
                            "day_30_withdraw_amount": "0.0",
                            "total_withdraw_amount": "0.0",
                            "day_0_shopkeeper_order_amount": "0.0",
                            "day_7_shopkeeper_order_amount": "0.0",
                            "day_30_shopkeeper_order_amount": "0.0",
                            "total_shopkeeper_order_amount": "2.1",
                            "day_0_sale_order_amount": "0.0",
                            "day_7_sale_order_amount": "0.0",
                            "day_30_sale_order_amount": "0.0",
                            "total_sale_order_amount": "0.0",
                            "day_0_children_grade_platinum_count": 0,
                            "day_7_children_grade_platinum_count": 0,
                            "day_30_children_grade_platinum_count": 0,
                            "total_children_grade_platinum_count": 0,
                            "day_0_children_grade_gold_count": 0,
                            "day_7_children_grade_gold_count": 0,
                            "day_30_children_grade_gold_count": 0,
                            "total_children_grade_gold_count": 0,
                            "day_0_ecn_grade_platinum_count": 0,
                            "day_7_ecn_grade_platinum_count": 0,
                            "day_30_ecn_grade_platinum_count": 0,
                            "total_ecn_grade_platinum_count": 0,
                            "day_0_children_count": 0,
                            "day_7_children_count": 0,
                            "day_30_children_count": 0,
                            "total_children_count": 1,
                            "day_0_children_commission_income_amount": 0,
                            "day_7_children_commission_income_amount": 0,
                            "day_30_children_commission_income_amount": 0,
                            "total_children_commission_income_amount": 0,
                            "day_0_descendant_count": 0,
                            "day_7_descendant_count": 0,
                            "day_30_descendant_count": 0,
                            "total_descendant_count": 1,
                            "day_0_descendant_activation_count": 0,
                            "day_7_descendant_activation_count": 0,
                            "day_30_descendant_activation_count": 0,
                            "total_descendant_activation_count": 1,
                            "day_0_descendant_order_number": 0,
                            "day_7_descendant_order_number": 0,
                            "day_30_descendant_order_number": 0,
                            "total_descendant_order_number": 0,
                            "day_0_descendant_order_amount": "0.0",
                            "day_7_descendant_order_amount": "0.0",
                            "day_30_descendant_order_amount": "0.0",
                            "total_descendant_order_amount": "0.0",
                            "day_0_descendant_commission_income_amount": "0.0",
                            "day_7_descendant_commission_income_amount": "0.0",
                            "day_30_descendant_commission_income_amount": "0.0",
                            "total_descendant_commission_income_amount": "0.0",
                            "day_0_ecn_grade_gold_count": 0,
                            "day_7_ecn_grade_gold_count": 0,
                            "day_30_ecn_grade_gold_count": 0,
                            "total_ecn_grade_gold_count": 0,
                            "created_at": "2018-03-19T16:24:12.000+08:00",
                            "updated_at": "2018-03-20T16:00:58.000+08:00"
                        }
                    ]
                }
            }

## Data Structures
### SampleReportCumulativeShopActivity (object)
+ `id`: 665 (number) - ID
+ `shop_id`: 2 (number) - 店铺ID
+ `day_0_shared_count`: 3 (number) - 当天分享量
+ `day_7_shared_count`: 5 (number) - 7天分享量
+ `day_30_shared_count`: 13 (number) - 30天分享量
+ `total_shared_count`: 22 (number) - 分享量
+ `day_0_view_count`: 3 (number) - 当天浏览量
+ `day_7_view_count`: 5 (number) - 7天浏览量
+ `day_30_view_count`: 13 (number) - 30天浏览量
+ `total_view_count`: 22 (number) - 浏览量
+ `day_0_viewer_count`: 3 (number) - 当天访客数
+ `day_7_viewer_count`: 5 (number) - 7天访客数
+ `day_30_viewer_count`: 13 (number) - 30天访客数
+ `total_viewer_count`: 22 (number) - 访客数
+ `day_0_order_number`: 3 (number) - 当天订单数
+ `day_7_order_number`: 5 (number) - 7天订单数
+ `day_30_order_number`: 13 (number) - 30天订单数
+ `total_order_number`: 22 (number) - 订单数
+ `day_0_shopkeeper_order_number`: 2 (number) - 当天自购订单数
+ `day_7_shopkeeper_order_number`: 3 (number) - 7天自购订单数
+ `day_30_shopkeeper_order_number`: 8 (number) - 30天自购订单数
+ `total_shopkeeper_order_number`: 23 (number) - 自购订单数
+ `day_0_sale_order_number`: 1 (number) - 当天销售订单数
+ `day_7_sale_order_number`: 2 (number) - 7天销售订单数
+ `day_30_sale_order_number`: 7 (number) - 30天销售订单数
+ `total_sale_order_number`: 13 (number) - 销售订单数
+ `day_0_order_amount`: 58.0 (string) - 当天订单金额
+ `day_7_order_amount`: 200.0 (string) - 7天订单金额
+ `day_30_order_amount`: 1000.0 (string) - 30天订单金额
+ `total_order_amount`: 2130.0 (string) - 订单金额
+ `day_0_commission_income_amount`: 18.0 (string) - 当天店铺佣金
+ `day_7_commission_income_amount`: 220.0 (string) - 7天店铺佣金
+ `day_30_commission_income_amount`: 500.0 (string) - 30天店铺佣金
+ `total_commission_income_amount`: 830.0 (string) - 店铺佣金
+ `day_0_income_coin`: 18.0 (string) - 当天收入芝蚂币
+ `day_7_income_coin`: 220.0 (string) - 7天收入芝蚂币
+ `day_30_income_coin`: 500.0 (string) - 30天收入芝蚂币
+ `total_income_coin`: 830.0 (string) - 收入芝蚂币
+ `day_0_use_coin`: 18.0 (string) - 当天使用芝蚂币
+ `day_7_use_coin`: 220.0 (string) - 7天使用芝蚂币
+ `day_30_use_coin`: 500.0 (string) - 30天使用芝蚂币
+ `total_use_coin`: 830.0 (string) - 使用芝蚂币
+ `day_0_withdraw_amount`: 3.0 (string) - 当天提现金额
+ `day_7_withdraw_amount`: 13.0 (string) - 7天提现金额
+ `day_30_withdraw_amount`: 20.0 (string) - 30天提现金额
+ `total_withdraw_amount`: 135.0 (string) - 提现金额
+ `day_0_shopkeeper_order_amount`: 20.0 (string) - 当天自购订单金额
+ `day_7_shopkeeper_order_amount`: 20.0 (string) - 7天自购订单金额
+ `day_30_shopkeeper_order_amount`: 230.0 (string) - 30天自购订单金额
+ `total_shopkeeper_order_amount`: 330.0 (string) - 自购订单金额
+ `day_0_sale_order_amount`: 38.0 (string) - 当天销售订单金额
+ `day_7_sale_order_amount`: 180.0 (string) - 7天销售订单金额
+ `day_30_sale_order_amount`: 770.0 (string) - 30天销售订单金额
+ `total_sale_order_amount`: 1270.0 (string) - 销售订单金额
+ `day_0_children_grade_platinum_count`: 1 (number) - 当天直接邀请白金用户数
+ `day_7_children_grade_platinum_count`: 3 (number) - 7天直接邀请白金用户数
+ `day_30_children_grade_platinum_count`: 5 (number) - 30天直接邀请白金用户数
+ `total_children_grade_platinum_count`: 12 (number) - 直接邀请白金用户数
+ `day_0_children_grade_gold_count`: 2 (number) - 当天直接邀请黄金店主数
+ `day_7_children_grade_gold_count`: 5 (number) - 7天直接邀请黄金店主数
+ `day_30_children_grade_gold_count`: 10 (number) - 30天直接邀请黄金店主数
+ `total_children_grade_gold_count`: 13 (number) - 直接邀请黄金店主数
+ `day_0_ecn_grade_platinum_count`: 33 (number) - 当天ECN白金店主数
+ `day_7_ecn_grade_platinum_count`: 44 (number) - 7天ECN白金店主数
+ `day_30_ecn_grade_platinum_count`: 66 (number) - 30天ECN白金店主数
+ `total_ecn_grade_platinum_count`: 166 (number) - ECN白金店主数
+ `day_0_ecn_grade_gold_count`: 23 (number) - 当天ECN黄金店主数
+ `day_7_ecn_grade_gold_count`: 33 (number) - 7天ECN黄金店主数
+ `day_30_ecn_grade_gold_count`: 35 (number) - 30天ECN黄金店主数
+ `total_ecn_grade_gold_count`: 135 (number) - ECN黄金店主数
+ `day_0_children_count`: 2 (number) - 当天直接邀请店主数
+ `day_7_children_count`: 5 (number) - 7天直接邀请店主数
+ `day_30_children_count`: 10 (number) - 30天直接邀请店主数
+ `total_children_count`: 13 (number) - 直接邀请店主数
+ `day_0_descendant_count`: 2 (number) - 当天下级店主数
+ `day_7_descendant_count`: 5 (number) - 7天下级店主数
+ `day_30_descendant_count`: 10 (number) - 30天下级店主数
+ `total_descendant_count`: 13 (number) - 下级店主数
+ `day_0_descendant_activation_count`: 2 (number) - 当天下级激活数
+ `day_7_descendant_activation_count`: 5 (number) - 7天下级激活数
+ `day_30_descendant_activation_count`: 10 (number) - 30天下级激活数
+ `total_descendant_activation_count`: 13 (number) - 下级下级激活数
+ `day_0_descendant_number`: 1 (number) - 当天下级订单数
+ `day_7_descendant_number`: 2 (number) - 7天下级订单数
+ `day_30_descendant_number`: 7 (number) - 30天下级订单数
+ `total_descendant_number`: 13 (number) - 下级订单数
+ `day_0_descendant_order_amount`: 58.0 (string) - 当天下级订单金额
+ `day_7_descendant_order_amount`: 200.0 (string) - 7天下级订单金额
+ `day_30_descendant_order_amount`: 1000.0 (string) - 30天下级订单金额
+ `total_descendant_order_amount`: 2130.0 (string) - 下级订单金额
+ `day_0_descendant_commission_income_amount`: 58.0 (string) - 当天下级佣金金额
+ `day_7_descendant_commission_income_amount`: 200.0 (string) - 7天下级佣金金额
+ `day_30_descendant_commission_income_amount`: 1000.0 (string) - 30天下级佣金金额
+ `total_descendant_commission_income_amount`: 2130.0 (string) - 下级佣金金额
+ created_at: `2018-01-25T17:56:39.000+08:00` (string) - 创建时间
+ updated_at: `2018-01-25T17:56:39.000+08:00` (string) - 更新时间
