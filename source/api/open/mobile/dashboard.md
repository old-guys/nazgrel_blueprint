# Group 工作台

## 首页 [GET /api/channel/dashboard{?device,user_token}]
  当天运营数据接口

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + date: `2017-12-29` (string) - 日期
            + shop_count: 5 (number) - 开店数
            + order_count: 3 (number) - 订单数
            + order_amount: 11.33 (string) - 销售金额
    + Body

            {
                "code": 0,
                "data": {
                  "date": "2017-12-29",
                  "shop_count": 5,
                  "order_count": 3,
                  "order_amount": "11.33"
                }
            }


## 等级店铺数量 [GET /api/channel/dashboard/user_grade_stat{?device,user_token}]
获取各等级店铺数量

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (array[TotalShopKeeperUsergrade])

    + Body

            {
                "code": 0,
                "data": [
                    {
                        "user_grade": "grade_platinum",
                        "user_grade_text": "白金店主",
                        "count": 366
                    },
                    {
                        "user_grade": "grade_gold",
                        "user_grade_text": "黄金店主",
                        "count": 51
                    },
                    {
                        "user_grade": "grade_trainee",
                        "user_grade_text": "见习店主",
                        "count": 2
                    }
                ]
            }

## Data Structures
### TotalShopKeeperUsergrade (object)
+ `user_grade`: `grade_platinum` (string) - 用户等级
+ `user_grade_text`: 白金店主 (string) - 用户等级
+ count: 234 (number) - 店主数
