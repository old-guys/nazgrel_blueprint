# Group 店主ECN

## 店主ECN列表 [GET /api/web/report/shop_ecns{?device,user_token,created_at,ecn_count,shopkeeper%5buser_name%5d,shopkeeper%5buser_phone%5d}]
获取店主ECN列表

+ Parameters
    + device: h5 (string, required) - 设备类型
    + `user_token`: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `created_at`: `2017-12-01` (string, optional)
        + For example: `created_at=2018-01-01T00:00:00+08:00..2018-01-07T23:59:59+08:00`
    + `ecn_count`: `100` (string, optional)
        + For example: `ecn_count=200..500`
    + `shopkeeper%5buser_name%5d`: `王健雄` (string, optional) - 店主姓名
    + `shopkeeper%5buser_phone%5d`: `19888888888` (string, optional) - 店主手机号

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
            + models (array[SampleReportShopEcn], fixed)

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
                            "id": 3,
                            "shop_id": 3,
                            "shop_name": "gg=jasldfjadsklf",
                            "channel_id": null,
                            "channel_name": "",
                            "shopkeeper_user_id": 8910,
                            "shopkeeper_name": "王健雄",
                            "shopkeeper_phone": "19888888888",
                            "ecn_count": 0,
                            "ancestry_rate": null,
                            "ecn_grade_platinum_count": 0,
                            "ecn_grade_gold_count": 0,
                            "children_count": 0,
                            "children_grade_platinum_count": 0,
                            "children_grade_gold_count": 0,
                            "indirectly_descendant_count": 0,
                            "indirectly_descendant_grade_platinum_count": 0,
                            "indirectly_descendant_grade_gold_count": 0
                        }
                    ]
                }
            }

## Data Structures
### SampleReportShopEcn (object)
+ `id`: 1 (number) - ID
+ `shop_id`: 16 (number) - 店铺ID
+ `shop_name`: 徐六六 (string) - 店铺名
+ `channel_id`: 1 (string, nullable) - 渠道ID
+ `channel_name`: 上海 (string) - 渠道名
+ `shopkeeper_user_id`: `8910` (string) - 店主ID
+ `shopkeeper_user_name`: `王健雄` (string) - 店主名
+ `shopkeeper_user_phone`: `19888888888` (string) - 店主手机号
+ `ecn_count`: 0 (number) - ECN数
+ `ancestry_rate`: `0.22%` (string) - 上级总数占比
+ `ecn_grade_platinum_count`: 0 (number) - ECN白金数
+ `ecn_grade_gold_count`: 0 (number) - ECN黄金数
+ `children_count`: 0 (number) - 直接邀请数
+ `children_grade_platinum_count`: 0 (number) - 直接ECN白金数
+ `children_grade_gold_count`: 9 (number) - 直接ECN黄金数
+ `indirectly_descendant_count`: 9 (number) - 间接邀请数
+ `indirectly_descendant_grade_platinum_count`: 9 (number) - 间接ECN白金数
+ `indirectly_descendant_grade_gold_count`: 9 (number) - 间接ECN黄金数
