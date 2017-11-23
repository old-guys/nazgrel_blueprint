# Group Dashboard

## dashboard index [/api/channel/dashboard{?device,user_token}]
### 工作台 [GET]
获取工作台 summary 数据

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + shop_count: 5 (number) - 总开店数
            + order_count: 3 (number) - 总订单数
            + commission_amount: 11.33, (number) - 总佣金
            + today (object)
                + shop_count: 1 (number) - 开店数
                + order_count: 3 (number) - 订单数
    + Body

            {
                "code": 0,
                "data": {
                    "shop_count": 5,
                    "order_count": 3,
                    "commission_amount": 11.33,
                    "today": {
                        "shop_count": 1,
                        "order_count": 3
                    }
                }
            }
