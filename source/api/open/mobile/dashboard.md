# Group 工作台

## 工作台 [GET /api/channel/dashboard{?device,user_token}]
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
