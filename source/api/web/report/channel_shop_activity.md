# Group 渠道店主行为

## 渠道店主行为列表 [GET /api/web/report/channel_shop_activities{?device,user_token,channel_id,report_date}]
获取渠道店主行为列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + report_date: `2017-12-01` (string, optional)
        + For example: `report_date=2017-12-01..2017-12-31`
    + channel_id: 1 (number, optional) - 渠道ID

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
            + models (array[SampleReportChannelShopActivity], fixed-type)

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
                            "index": 1,
                            "channel_id": 1,
                            "channel": {
                                "name": "王二小",
                                "channel_user_name": "",
                                "city": null
                            },
                            "shared_count": 18,
                            "stage_1_shared_count": 0,
                            "stage_2_shared_count": 16,
                            "stage_3_shared_count": 2,
                            "week_shared_count": 0,
                            "month_shared_count": 1367,
                            "year_shared_count": 23545,
                            "total_shared_count": 0,
                            "view_count": 10,
                            "stage_1_view_count": 0,
                            "stage_2_view_count": 10,
                            "stage_3_view_count": 0,
                            "week_view_count": 0,
                            "month_view_count": 142,
                            "year_view_count": 1054,
                            "total_view_count": 0,
                            "viewer_count": 0,
                            "stage_1_viewer_count": 0,
                            "stage_2_viewer_count": 0,
                            "stage_3_viewer_count": 0,
                            "week_viewer_count": 0,
                            "month_viewer_count": 0,
                            "year_viewer_count": 0,
                            "total_viewer_count": 0,
                            "order_number": 2,
                            "stage_1_order_number": 0,
                            "stage_2_order_number": 0,
                            "stage_3_order_number": 0,
                            "week_order_number": 0,
                            "month_order_number": 22,
                            "year_order_number": 89,
                            "total_order_number": 0,
                            "shopkeeper_order_number": 2,
                            "stage_1_shopkeeper_order_number": 0,
                            "stage_2_shopkeeper_order_number": 0,
                            "stage_3_shopkeeper_order_number": 0,
                            "week_shopkeeper_order_number": 0,
                            "month_shopkeeper_order_number": 10,
                            "year_shopkeeper_order_number": 71,
                            "total_shopkeeper_order_number": 0,
                            "sale_order_number": 0,
                            "stage_1_sale_order_number": 0,
                            "stage_2_sale_order_number": 0,
                            "stage_3_sale_order_number": 0,
                            "week_sale_order_number": 0,
                            "month_sale_order_number": 12,
                            "year_sale_order_number": 18,
                            "total_sale_order_number": 0,
                            "order_amount": "0.02",
                            "stage_1_order_amount": "0.0",
                            "stage_2_order_amount": "0.0",
                            "stage_3_order_amount": "0.0",
                            "week_order_amount": "0.0",
                            "month_order_amount": "100.0",
                            "year_order_amount": "44808.07",
                            "total_order_amount": "0.0",
                            "commission_income_amount": "0.0",
                            "stage_1_commission_income_amount": "0.0",
                            "stage_2_commission_income_amount": "0.0",
                            "stage_3_commission_income_amount": "0.0",
                            "week_commission_income_amount": "0.0",
                            "month_commission_income_amount": "0.0",
                            "year_commission_income_amount": "0.0",
                            "total_commission_income_amount": "0.0",
                            "shopkeeper_order_amount": "0.02",
                            "stage_1_shopkeeper_order_amount": "0.0",
                            "stage_2_shopkeeper_order_amount": "0.0",
                            "stage_3_shopkeeper_order_amount": "0.0",
                            "week_shopkeeper_order_amount": "0.0",
                            "month_shopkeeper_order_amount": "0.0",
                            "year_shopkeeper_order_amount": "44708.07",
                            "total_shopkeeper_order_amount": "0.0",
                            "sale_order_amount": "0.0",
                            "stage_1_sale_order_amount": "0.0",
                            "stage_2_sale_order_amount": "0.0",
                            "stage_3_sale_order_amount": "0.0",
                            "week_sale_order_amount": "0.0",
                            "month_sale_order_amount": "100.0",
                            "year_sale_order_amount": "100.0",
                            "total_sale_order_amount": "0.0",
                            "ecn_grade_platinum_count": 0,
                            "stage_1_ecn_grade_platinum_count": 0,
                            "stage_2_ecn_grade_platinum_count": 0,
                            "stage_3_ecn_grade_platinum_count": 0,
                            "week_ecn_grade_platinum_count": 0,
                            "month_ecn_grade_platinum_count": 0,
                            "year_ecn_grade_platinum_count": 970,
                            "total_ecn_grade_platinum_count": 0,
                            "ecn_grade_gold_count": 0,
                            "stage_1_ecn_grade_gold_count": 0,
                            "stage_2_ecn_grade_gold_count": 0,
                            "stage_3_ecn_grade_gold_count": 0,
                            "week_ecn_grade_gold_count": 0,
                            "month_ecn_grade_gold_count": 26,
                            "year_ecn_grade_gold_count": 164,
                            "total_ecn_grade_gold_count": 0,
                            "ecn_count": 0
                        }
                    ]
                }
            }

## 渠道店主行为报表 [GET /api/web/report/channel_shop_activities/report{?device,user_token,time_type,channel_id,report_date}]
渠道店主行为报表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + time_type: `day` (string, optional) - 时间类型
        + Members
            + day
            + month
    + report_date: `2017-12-01` (string, optional)
        + For example: 当时间类型是`day`传递任意日期, 当时间类型是`month`传递月份内任意日期
    + channel_id: 1 (number, optional) - 渠道ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + total_count: 1 (number) - 总条数
            + total_pages: 1 (number) - 总页数
            + current_page: 1 (number) - 当前页
            + next_page (number, nullable) - 下一页
            + prev_page (number, nullable) - 前一页
            + first_page? (boolean) - 是否第一页
            + last_page? (boolean) - 是否最后一页
            + per_page: 15 (number) - 每页条数
            + page: 1 (number) - 页码
            + summary (ReportChannelShopActivitySummary)
            + models (array[ReportChannelShopActivitySummary], fixed-type)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "summary": {
                        "shared_count": 18,
                        "stage_1_shared_count": 0,
                        "stage_2_shared_count": 16,
                        "stage_3_shared_count": 2,
                        "week_shared_count": 0,
                        "month_shared_count": 1367,
                        "year_shared_count": 23545,
                        "view_count": 10,
                        "stage_1_view_count": 0,
                        "stage_2_view_count": 10,
                        "stage_3_view_count": 0,
                        "week_view_count": 0,
                        "month_view_count": 142,
                        "year_view_count": 1054,
                        "viewer_count": 0,
                        "stage_1_viewer_count": 0,
                        "stage_2_viewer_count": 0,
                        "stage_3_viewer_count": 0,
                        "week_viewer_count": 0,
                        "month_viewer_count": 0,
                        "year_viewer_count": 0,
                        "order_number": 2,
                        "stage_1_order_number": 0,
                        "stage_2_order_number": 0,
                        "stage_3_order_number": 0,
                        "week_order_number": 0,
                        "month_order_number": 22,
                        "year_order_number": 89,
                        "shopkeeper_order_number": 2,
                        "stage_1_shopkeeper_order_number": 0,
                        "stage_2_shopkeeper_order_number": 0,
                        "stage_3_shopkeeper_order_number": 0,
                        "week_shopkeeper_order_number": 0,
                        "month_shopkeeper_order_number": 10,
                        "year_shopkeeper_order_number": 71,
                        "sale_order_number": 0,
                        "stage_1_sale_order_number": 0,
                        "stage_2_sale_order_number": 0,
                        "stage_3_sale_order_number": 0,
                        "week_sale_order_number": 0,
                        "month_sale_order_number": 12,
                        "year_sale_order_number": 18,
                        "order_amount": "0.02",
                        "stage_1_order_amount": "0.0",
                        "stage_2_order_amount": "0.0",
                        "stage_3_order_amount": "0.0",
                        "week_order_amount": "0.0",
                        "month_order_amount": "100.0",
                        "year_order_amount": "44808.07",
                        "commission_income_amount": "0.0",
                        "stage_1_commission_income_amount": "0.0",
                        "stage_2_commission_income_amount": "0.0",
                        "stage_3_commission_income_amount": "0.0",
                        "week_commission_income_amount": "0.0",
                        "month_commission_income_amount": "0.0",
                        "year_commission_income_amount": "0.0",
                        "shopkeeper_order_amount": "0.02",
                        "stage_1_shopkeeper_order_amount": "0.0",
                        "stage_2_shopkeeper_order_amount": "0.0",
                        "stage_3_shopkeeper_order_amount": "0.0",
                        "week_shopkeeper_order_amount": "0.0",
                        "month_shopkeeper_order_amount": "0.0",
                        "year_shopkeeper_order_amount": "44708.07",
                        "sale_order_amount": "0.0",
                        "stage_1_sale_order_amount": "0.0",
                        "stage_2_sale_order_amount": "0.0",
                        "stage_3_sale_order_amount": "0.0",
                        "week_sale_order_amount": "0.0",
                        "month_sale_order_amount": "100.0",
                        "year_sale_order_amount": "100.0",
                        "ecn_count": 0
                    },
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
                            "index": 1,
                            "channel_id": 1,
                            "channel": {
                                "name": "王二小",
                                "channel_user_name": "",
                                "city": null
                            },
                            "shared_count": 18,
                            "stage_1_shared_count": 0,
                            "stage_2_shared_count": 16,
                            "stage_3_shared_count": 2,
                            "week_shared_count": 0,
                            "month_shared_count": 1367,
                            "year_shared_count": 23545,
                            "total_shared_count": 0,
                            "view_count": 10,
                            "stage_1_view_count": 0,
                            "stage_2_view_count": 10,
                            "stage_3_view_count": 0,
                            "week_view_count": 0,
                            "month_view_count": 142,
                            "year_view_count": 1054,
                            "total_view_count": 0,
                            "viewer_count": 0,
                            "stage_1_viewer_count": 0,
                            "stage_2_viewer_count": 0,
                            "stage_3_viewer_count": 0,
                            "week_viewer_count": 0,
                            "month_viewer_count": 0,
                            "year_viewer_count": 0,
                            "total_viewer_count": 0,
                            "order_number": 2,
                            "stage_1_order_number": 0,
                            "stage_2_order_number": 0,
                            "stage_3_order_number": 0,
                            "week_order_number": 0,
                            "month_order_number": 22,
                            "year_order_number": 89,
                            "total_order_number": 0,
                            "shopkeeper_order_number": 2,
                            "stage_1_shopkeeper_order_number": 0,
                            "stage_2_shopkeeper_order_number": 0,
                            "stage_3_shopkeeper_order_number": 0,
                            "week_shopkeeper_order_number": 0,
                            "month_shopkeeper_order_number": 10,
                            "year_shopkeeper_order_number": 71,
                            "total_shopkeeper_order_number": 0,
                            "sale_order_number": 0,
                            "stage_1_sale_order_number": 0,
                            "stage_2_sale_order_number": 0,
                            "stage_3_sale_order_number": 0,
                            "week_sale_order_number": 0,
                            "month_sale_order_number": 12,
                            "year_sale_order_number": 18,
                            "total_sale_order_number": 0,
                            "order_amount": "0.02",
                            "stage_1_order_amount": "0.0",
                            "stage_2_order_amount": "0.0",
                            "stage_3_order_amount": "0.0",
                            "week_order_amount": "0.0",
                            "month_order_amount": "100.0",
                            "year_order_amount": "44808.07",
                            "total_order_amount": "0.0",
                            "commission_income_amount": "0.0",
                            "stage_1_commission_income_amount": "0.0",
                            "stage_2_commission_income_amount": "0.0",
                            "stage_3_commission_income_amount": "0.0",
                            "week_commission_income_amount": "0.0",
                            "month_commission_income_amount": "0.0",
                            "year_commission_income_amount": "0.0",
                            "total_commission_income_amount": "0.0",
                            "shopkeeper_order_amount": "0.02",
                            "stage_1_shopkeeper_order_amount": "0.0",
                            "stage_2_shopkeeper_order_amount": "0.0",
                            "stage_3_shopkeeper_order_amount": "0.0",
                            "week_shopkeeper_order_amount": "0.0",
                            "month_shopkeeper_order_amount": "0.0",
                            "year_shopkeeper_order_amount": "44708.07",
                            "total_shopkeeper_order_amount": "0.0",
                            "sale_order_amount": "0.0",
                            "stage_1_sale_order_amount": "0.0",
                            "stage_2_sale_order_amount": "0.0",
                            "stage_3_sale_order_amount": "0.0",
                            "week_sale_order_amount": "0.0",
                            "month_sale_order_amount": "100.0",
                            "year_sale_order_amount": "100.0",
                            "total_sale_order_amount": "0.0",
                            "ecn_grade_platinum_count": 0,
                            "stage_1_ecn_grade_platinum_count": 0,
                            "stage_2_ecn_grade_platinum_count": 0,
                            "stage_3_ecn_grade_platinum_count": 0,
                            "week_ecn_grade_platinum_count": 0,
                            "month_ecn_grade_platinum_count": 0,
                            "year_ecn_grade_platinum_count": 970,
                            "total_ecn_grade_platinum_count": 0,
                            "ecn_grade_gold_count": 0,
                            "stage_1_ecn_grade_gold_count": 0,
                            "stage_2_ecn_grade_gold_count": 0,
                            "stage_3_ecn_grade_gold_count": 0,
                            "week_ecn_grade_gold_count": 0,
                            "month_ecn_grade_gold_count": 26,
                            "year_ecn_grade_gold_count": 164,
                            "total_ecn_grade_gold_count": 0,
                            "ecn_count": 0
                        }
                    ]
                }
            }

## Data Structures
### SampleReportChannelShopActivity (object)
+ index: 1 (number) - 序号
+ channel_id: 16 (number) - 渠道ID
+ channel (object) - 渠道
    + name: 徐六六 (string) - 渠道名
    + channel_user_name: 张小林 (string) - 负责人名字
    + city: 上海 (string, nullable) - 负责人名字
+ stage_1_shared_count: 0 (number) - 00:00-9:00 分享数
+ stage_2_shared_count: 0 (number) - 09:00-18:00 分享数
+ stage_3_shared_count: 0 (number) - 18:00-24:00 分享数
+ week_shared_count: 9 (number) - 本周累计分享数
+ month_shared_count: 9 (number) - 本月累计分享数
+ year_shared_count: 9 (number) - 本年累计分享数
+ total_shared_count: 9 (number) - 累计分享数
+ stage_1_view_count: 0 (number) - 00:00-9:00 浏览数
+ stage_2_view_count: 0 (number) - 09:00-18:00 浏览数
+ stage_3_view_count: 0 (number) - 18:00-24:00 浏览数
+ week_view_count: 9 (number) - 本月累计浏览数
+ month_view_count: 9 (number) - 本月累计浏览数
+ year_view_count: 9 (number) - 本年累计浏览数
+ total_view_count: 9 (number) - 累计访客数
+ stage_1_viewer_count: 0 (number) - 00:00-9:00 访客数
+ stage_2_viewer_count: 0 (number) - 09:00-18:00 访客数
+ stage_3_viewer_count: 0 (number) - 18:00-24:00 访客数
+ week_viewer_count: 9 (number) - 本月累计访客数
+ month_viewer_count: 9 (number) - 本月累计访客数
+ year_viewer_count: 9 (number) - 本年累计访客数
+ total_viewer_count: 9 (number) - 累计访客数
+ stage_1_order_number: 0 (number) - 00:00-9:00 订单数
+ stage_2_order_number: 0 (number) - 09:00-18:00 订单数
+ stage_3_order_number: 0 (number) - 18:00-24:00 订单数
+ week_order_number: 9 (number) - 本周累计订单数
+ month_order_number: 9 (number) - 本月累计订单数
+ year_order_number: 9 (number) - 本年累计订单数
+ total_order_number: 9 (number) - 累计订单数
+ stage_1_shopkeeper_order_number: 0 (number) - 00:00-9:00 店主订单数
+ stage_2_shopkeeper_order_number: 0 (number) - 09:00-18:00 店主订单数
+ stage_3_shopkeeper_order_number: 0 (number) - 18:00-24:00 店主订单数
+ week_shopkeeper_order_number: 9 (number) - 本周累计店主订单数
+ month_shopkeeper_order_number: 9 (number) - 本月累计店主订单数
+ year_shopkeeper_order_number: 9 (number) - 本年累计店主订单数
+ total_shopkeeper_order_number: 9 (number) - 累计店主订单数
+ stage_1_sale_order_number: 0 (number) - 00:00-9:00 销售订单数
+ stage_2_sale_order_number: 0 (number) - 09:00-18:00 销售订单数
+ stage_3_sale_order_number: 0 (number) - 18:00-24:00 销售订单数
+ week_sale_order_number: 9 (number) - 本周累计销售订单数
+ month_sale_order_number: 9 (number) - 本月累计销售订单数
+ year_sale_order_number: 9 (number) - 本年累计销售订单数
+ total_sale_order_number: 9 (number) - 累计销售订单数
+ stage_1_order_amount: 0 (string) - 00:00-9:00 订单金额
+ stage_2_order_amount: 0 (string) - 09:00-18:00 订单金额
+ stage_3_order_amount: 0 (string) - 18:00-24:00 订单金额
+ week_order_amount: 9 (string) - 本周累计订单金额
+ month_order_amount: 9 (string) - 本月累计订单金额
+ year_order_amount: 9 (string) - 本年累计订单金额
+ total_order_amount: 9 (string) - 累计订单金额
+ stage_1_shopkeeper_order_amount: 0 (string) - 00:00-9:00 店主订单金额
+ stage_2_shopkeeper_order_amount: 0 (string) - 09:00-18:00 店主订单金额
+ stage_3_shopkeeper_order_amount: 0 (string) - 18:00-24:00 店主订单金额
+ week_shopkeeper_order_amount: 9 (string) - 本周累计店主订单金额
+ month_shopkeeper_order_amount: 9 (string) - 本月累计店主订单金额
+ year_shopkeeper_order_amount: 9 (string) - 本年累计店主订单金额
+ total_shopkeeper_order_amount: 9 (string) - 累计店主订单金额
+ stage_1_sale_order_amount: 0 (string) - 00:00-9:00 销售订单金额
+ stage_2_sale_order_amount: 0 (string) - 09:00-18:00 销售订单金额
+ stage_3_sale_order_amount: 0 (string) - 18:00-24:00 销售订单金额
+ month_sale_order_amount: 9 (string) - 本月累计销售订单金额
+ week_sale_order_amount: 9 (string) - 本周累计销售订单金额
+ year_sale_order_amount: 9 (string) - 本年累计销售订单金额
+ total_sale_order_amount: 9 (string) - 累计销售订单金额
+ stage_1_ecn_grade_platinum_count: 0 (number) - 00:00-9:00 ECN白金店主数
+ stage_2_ecn_grade_platinum_count: 0 (number) - 09:00-18:00 ECN白金店主数
+ stage_3_ecn_grade_platinum_count: 0 (number) - 18:00-24:00 ECN白金店主数
+ month_ecn_grade_platinum_count: 9 (number) - 本月累计ECN白金店主数
+ week_ecn_grade_platinum_count: 9 (number) - 本周累计ECN白金店主数
+ year_ecn_grade_platinum_count: 9 (number) - 本年累计ECN白金店主数
+ total_ecn_grade_platinum_count: 9 (number) - 本年累计ECN白金店主数
+ stage_1_ecn_grade_gold_count: 0 (number) - 00:00-9:00 ECN黄金店主数
+ stage_2_ecn_grade_gold_count: 0 (number) - 09:00-18:00 ECN黄金店主数
+ stage_3_ecn_grade_gold_count: 0 (number) - 18:00-24:00 ECN黄金店主数
+ month_ecn_grade_gold_count: 9 (number) - 本月累计ECN黄金店主数
+ year_ecn_grade_gold_count: 9 (number) - 本年累计ECN黄金店主数
+ total_ecn_grade_gold_count: 9 (number) - 本年累计ECN黄金店主数
### ReportChannelShopActivityTimeType (SampleReportChannelShopActivity)
### ReportChannelShopActivitySummary (object)
+ stage_1_shared_count: 0 (number) - 00:00-9:00 分享数
+ stage_2_shared_count: 0 (number) - 09:00-18:00 分享数
+ stage_3_shared_count: 0 (number) - 18:00-24:00 分享数
+ week_shared_count: 9 (number) - 本周累计分享数
+ month_shared_count: 9 (number) - 本月累计分享数
+ year_shared_count: 9 (number) - 本年累计分享数
+ stage_1_view_count: 0 (number) - 00:00-9:00 浏览数
+ stage_2_view_count: 0 (number) - 09:00-18:00 浏览数
+ stage_3_view_count: 0 (number) - 18:00-24:00 浏览数
+ week_view_count: 9 (number) - 本周累计浏览数
+ month_view_count: 9 (number) - 本月累计浏览数
+ year_view_count: 9 (number) - 本年累计浏览数
+ stage_1_viewer_count: 0 (number) - 00:00-9:00 访客数
+ stage_2_viewer_count: 0 (number) - 09:00-18:00 访客数
+ stage_3_viewer_count: 0 (number) - 18:00-24:00 访客数
+ week_viewer_count: 9 (number) - 本周累计访客数
+ month_viewer_count: 9 (number) - 本月累计访客数
+ year_viewer_count: 9 (number) - 本年累计访客数
+ stage_1_order_number: 0 (number) - 00:00-9:00 订单数
+ stage_2_order_number: 0 (number) - 09:00-18:00 订单数
+ stage_3_order_number: 0 (number) - 18:00-24:00 订单数
+ week_order_number: 9 (number) - 本周累计订单数
+ month_order_number: 9 (number) - 本月累计订单数
+ year_order_number: 9 (number) - 本年累计订单数
+ stage_1_shopkeeper_order_number: 0 (number) - 00:00-9:00 店主订单数
+ stage_2_shopkeeper_order_number: 0 (number) - 09:00-18:00 店主订单数
+ stage_3_shopkeeper_order_number: 0 (number) - 18:00-24:00 店主订单数
+ week_shopkeeper_order_number: 9 (number) - 本周累计店主订单数
+ month_shopkeeper_order_number: 9 (number) - 本月累计店主订单数
+ year_shopkeeper_order_number: 9 (number) - 本年累计店主订单数
+ stage_1_sale_order_number: 0 (number) - 00:00-9:00 销售订单数
+ stage_2_sale_order_number: 0 (number) - 09:00-18:00 销售订单数
+ stage_3_sale_order_number: 0 (number) - 18:00-24:00 销售订单数
+ week_sale_order_number: 9 (number) - 本周累计销售订单数
+ month_sale_order_number: 9 (number) - 本月累计销售订单数
+ year_sale_order_number: 9 (number) - 本年累计销售订单数
+ stage_1_order_amount: 0 (string) - 00:00-9:00 订单金额
+ stage_2_order_amount: 0 (string) - 09:00-18:00 订单金额
+ stage_3_order_amount: 0 (string) - 18:00-24:00 订单金额
+ week_order_amount: 9 (string) - 本周累计订单金额
+ month_order_amount: 9 (string) - 本月累计订单金额
+ year_order_amount: 9 (string) - 本年累计订单金额
+ stage_1_shopkeeper_order_amount: 0 (string) - 00:00-9:00 店主订单金额
+ stage_2_shopkeeper_order_amount: 0 (string) - 09:00-18:00 店主订单金额
+ stage_3_shopkeeper_order_amount: 0 (string) - 18:00-24:00 店主订单金额
+ week_shopkeeper_order_amount: 9 (string) - 本周累计店主订单金额
+ month_shopkeeper_order_amount: 9 (string) - 本月累计店主订单金额
+ year_shopkeeper_order_amount: 9 (string) - 本年累计店主订单金额
+ stage_1_sale_order_amount: 0 (string) - 00:00-9:00 销售订单金额
+ stage_2_sale_order_amount: 0 (string) - 09:00-18:00 销售订单金额
+ stage_3_sale_order_amount: 0 (string) - 18:00-24:00 销售订单金额
+ week_sale_order_amount: 9 (string) - 本周累计销售订单金额
+ month_sale_order_amount: 9 (string) - 本月累计销售订单金额
+ year_sale_order_amount: 9 (string) - 本年累计销售订单金额
+ ecn_count: 9 (number) - ECN店主数
