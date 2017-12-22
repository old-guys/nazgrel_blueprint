# Group 渠道新增店主

## 渠道新增店主列表 [GET /api/web/report/channel_shop_newers{?device,user_token,channel_id,report_date,report_date%5b%5d}]
获取渠道新增店主列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + report_date: `2017-12-01` (string, optional)
    + report_date%5b%5d (string, optional)
        + For example: `report_date[]=2017-12-01&report_date[]=2017-12-31`
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
            + models (array[SampleReportChannelShopNewer])

    + Body

            {
              "code": 0,
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
                    "stage_1_grade_platinum": 0,
                    "stage_1_grade_gold": 0,
                    "stage_2_grade_platinum": 0,
                    "stage_2_grade_gold": 0,
                    "stage_3_grade_platinum": 0,
                    "stage_3_grade_gold": 0,
                    "month_grade_platinum": 0,
                    "month_grade_gold": 2,
                    "year_grade_platinum": 336,
                    "year_grade_gold": 30
                  }
                ]
              }
            }

## 渠道新增店主报表 [GET /api/web/report/channel_shop_newers/report{?device,user_token,time_type,channel_id,report_date}]
渠道新增店主报表

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
            + summary (ReportChannelShopNewerSummary)
            + models (array[ReportChannelShopNewerTimeType])

    + Body

            {
              "code": 0,
              "data": {
                "summary": {
                  "stage_1_grade_platinum": 0,
                  "stage_1_grade_gold": 0,
                  "stage_2_grade_platinum": 0,
                  "stage_2_grade_gold": 0,
                  "stage_3_grade_platinum": 0,
                  "stage_3_grade_gold": 0,
                  "month_grade_platinum": 0,
                  "month_grade_gold": 3,
                  "year_grade_platinum": 337,
                  "year_grade_gold": 33
                },
                "total_count": 5,
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
                    "stage_1_grade_platinum": 0,
                    "stage_1_grade_gold": 0,
                    "stage_2_grade_platinum": 0,
                    "stage_2_grade_gold": 0,
                    "stage_3_grade_platinum": 0,
                    "stage_3_grade_gold": 0,
                    "month_grade_platinum": 0,
                    "month_grade_gold": 2,
                    "year_grade_platinum": 336,
                    "year_grade_gold": 30
                  },
                  {
                    "index": 2,
                    "channel_id": 13,
                    "channel": {
                      "name": "222wwww",
                      "channel_user_name": "王秉飞",
                      "city": "上海"
                    },
                    "stage_1_grade_platinum": 0,
                    "stage_1_grade_gold": 0,
                    "stage_2_grade_platinum": 0,
                    "stage_2_grade_gold": 0,
                    "stage_3_grade_platinum": 0,
                    "stage_3_grade_gold": 0,
                    "month_grade_platinum": 0,
                    "month_grade_gold": 0,
                    "year_grade_platinum": 0,
                    "year_grade_gold": 1
                  },
                  {
                    "index": 3,
                    "channel_id": 14,
                    "channel": {
                      "name": "18000000000",
                      "channel_user_name": "18000000000",
                      "city": null
                    },
                    "stage_1_grade_platinum": 0,
                    "stage_1_grade_gold": 0,
                    "stage_2_grade_platinum": 0,
                    "stage_2_grade_gold": 0,
                    "stage_3_grade_platinum": 0,
                    "stage_3_grade_gold": 0,
                    "month_grade_platinum": 0,
                    "month_grade_gold": 1,
                    "year_grade_platinum": 0,
                    "year_grade_gold": 1
                  },
                  {
                    "index": 4,
                    "channel_id": 15,
                    "channel": {
                      "name": "张小林",
                      "channel_user_name": "张小林",
                      "city": null
                    },
                    "stage_1_grade_platinum": 0,
                    "stage_1_grade_gold": 0,
                    "stage_2_grade_platinum": 0,
                    "stage_2_grade_gold": 0,
                    "stage_3_grade_platinum": 0,
                    "stage_3_grade_gold": 0,
                    "month_grade_platinum": 0,
                    "month_grade_gold": 0,
                    "year_grade_platinum": 1,
                    "year_grade_gold": 0
                  },
                  {
                    "index": 5,
                    "channel_id": 16,
                    "channel": {
                      "name": "徐六六",
                      "channel_user_name": "",
                      "city": null
                    },
                    "stage_1_grade_platinum": 0,
                    "stage_1_grade_gold": 0,
                    "stage_2_grade_platinum": 0,
                    "stage_2_grade_gold": 0,
                    "stage_3_grade_platinum": 0,
                    "stage_3_grade_gold": 0,
                    "month_grade_platinum": 0,
                    "month_grade_gold": 0,
                    "year_grade_platinum": 0,
                    "year_grade_gold": 1
                  }
                ]
              }
            }

## Data Structures
### SampleReportChannelShopNewer (object)
+ index: 1 (number) - 序号
+ channel_id: 16 (number) - 渠道ID
+ channel (object) - 渠道
    + name: 徐六六 (string) - 渠道名
    + channel_user_name: 张小林 (string) - 负责人名字
    + city: 上海 (string, nullable) - 负责人名字
+ stage_1_grade_platinum: 0 (number) - 00:00-9:00 白金店主数
+ stage_1_grade_gold: 0 (number) - 00:00-9:00 黄金店主数
+ stage_2_grade_platinum: 0 (number) - 09:00-18:00 白金店主数
+ stage_2_grade_gold: 0 (number) - 09:00-18:00 黄金店主数
+ stage_3_grade_platinum: 0 (number) - 18:00-24:00 白金店主数
+ stage_3_grade_gold: 0 (number) - 18:00-24:00 黄金店主数
+ month_grade_platinum: 9 (number) - 本月累计白金店主数
+ month_grade_gold: 9 (number) - 本月累计黄金店主数
+ year_grade_platinum: 9 (number) - 本年累计白金店主数
+ year_grade_gold: 9 (number) - 本年累计黄金店主数
### ReportChannelShopNewerTimeType (SampleReportChannelShopNewer)
### ReportChannelShopNewerSummary (object)
+ stage_1_grade_platinum: 0 (number) - 00:00-9:00 白金店主数
+ stage_1_grade_gold: 0 (number) - 00:00-9:00 黄金店主数
+ stage_2_grade_platinum: 0 (number) - 09:00-18:00 白金店主数
+ stage_2_grade_gold: 0 (number) - 09:00-18:00 黄金店主数
+ stage_3_grade_platinum: 0 (number) - 18:00-24:00 白金店主数
+ stage_3_grade_gold: 0 (number) - 18:00-24:00 黄金店主数
+ month_grade_platinum: 9 (number) - 本月累计白金店主数
+ month_grade_gold: 9 (number) - 本月累计黄金店主数
+ year_grade_platinum: 9 (number) - 本年累计白金店主数
+ year_grade_gold: 9 (number) - 本年累计黄金店主数
