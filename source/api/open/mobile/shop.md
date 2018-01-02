# Group 店铺

## 店铺详情接口 [/api/open/mobile/shops/{shop_id}/summary{?device,user_token}]
### 店铺详情接口 [GET]
店主分析页面获取地店铺详情

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + shop_id: 532 (number, required) - 城市筛选

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
          + `id`: 10 (number) - 店铺ID
          + `shop_name`: cpencil芝蚂店 (string) - 店铺名称
          + `shopkeeper_name`: 17500000007 (string) - 店主姓名
          + `province`: 北京 (string) - 省份
          + `city`: 北京 (string) - 城市
          + `user_phone`: 17500000007 (string) - 店主手机号
          + `commission_income_amount`: 23.0 (string) - 店铺佣金
          + `balance_amount`: 23.0 (string) - 账户余额
          + `withdraw_amount`: 1.0 (string) - 已提现金额
          + `last_three_day_descendant_count`: 3 (number) - 近3天开拓店主数
          + `descendant_count`: 15 (number) - 总开拓店主数

    + Body

            {
                "code": 0,
                "data": {
                    "id": 8458,
                    "shop_name": "17500000007的小店",
                    "shopkeeper_name": "17500000007",
                    "province": "北京",
                    "city": "北京",
                    "user_phone": "17500000007",
                    "commission_income_amount": "0.0",
                    "balance_amount": "0.0",
                    "withdraw_amount": "0.0",
                    "last_three_day_descendant_count": 3,
                    "descendant_count": 15,
                    "created_at": "2017-12-28T15:37:51.000+08:00"
                }
            }
