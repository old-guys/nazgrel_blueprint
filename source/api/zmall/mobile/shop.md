# Group 店铺

## 店铺详情接口 [/api/zmall/mobile/shops/{shop_id}/summary{?device,user_token}]
### 店铺详情接口 [GET]
店铺详情获取统计摘要

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + shop_id: 532 (number, required) - 店铺ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (ShowShopSummary)

    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "order_amount": "13940.03",
                    "commission_income_amount": "0.004",
                    "total_income_coin": "10000.0",
                    "shop_stat": {
                        "children_grade_trainee_size": 0,
                        "children_activation_grade_trainee_size": 0,
                        "children_inactivated_grade_trainee_size": 0,
                        "children_grade_gold_size": 0,
                        "children_grade_platinum_size": 8,
                        "children_size": 8,
                        "descendant_grade_trainee_size": 11,
                        "descendant_activation_grade_trainee_size": 1,
                        "descendant_inactivated_grade_trainee_size": 10,
                        "descendant_grade_gold_size": 6,
                        "descendant_grade_platinum_size": 22,
                        "descendant_size": 40
                    }
                }
            }

## 店铺统计明细 [/api/zmall/mobile/shops/{shop_id}/stat{?device,user_token,limit,time_range}]
### 店铺统计明细 [GET]
该店铺统计明细

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token
    + `shop_id`: 2 (number, required) - 店铺ID

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + `id`: 10 (number) - 店铺ID
            + `models` (array[ShowShopStat], fixed-type)
    + Body

            {
                "code": 0,
                "message": "",
                "remark": "",
                "data": {
                    "id": 2,
                    "models": [
                        {
                            "report_month": "2018-03",
                            "month_shopkeeper_order_number": 2,
                            "month_shopkeeper_order_amount": "64.8",
                            "month_sale_order_number": 0,
                            "month_sale_order_amount": "0.0",
                            "month_commission_income_amount": "0.0",
                            "month_balance_amount": "2243.144",
                            "month_income_coin": "19.6",
                            "month_use_coin": "0.0",
                            "month_balance_coin": "9930.4"
                        },
                        {
                            "report_month": "2018-02",
                            "month_shopkeeper_order_number": 0,
                            "month_shopkeeper_order_amount": "0.0",
                            "month_sale_order_number": 0,
                            "month_sale_order_amount": "0.0",
                            "month_commission_income_amount": "0.0",
                            "month_balance_amount": "0.0",
                            "month_income_coin": "0.0",
                            "month_use_coin": "0.0",
                            "month_balance_coin": "0.0"
                        },
                        {
                            "report_month": "2018-01",
                            "month_shopkeeper_order_number": 0,
                            "month_shopkeeper_order_amount": "0.0",
                            "month_sale_order_number": 0,
                            "month_sale_order_amount": "0.0",
                            "month_commission_income_amount": "0.0",
                            "month_balance_amount": "0.0",
                            "month_income_coin": "0.0",
                            "month_use_coin": "0.0",
                            "month_balance_coin": "0.0"
                        },
                        {
                            "report_month": "2017-12",
                            "month_shopkeeper_order_number": 0,
                            "month_shopkeeper_order_amount": "0.0",
                            "month_sale_order_number": 0,
                            "month_sale_order_amount": "0.0",
                            "month_commission_income_amount": "0.0",
                            "month_balance_amount": "0.0",
                            "month_income_coin": "0.0",
                            "month_use_coin": "0.0",
                            "month_balance_coin": "0.0"
                        }
                    ]
                }
            }


## Data Structures
### ShowShopSummary (object)
+ `id`: 10 (number) - 店铺ID
+ `children_grade_trainee_size`: 0 (number) - 直接体验店主数
+ `children_activation_grade_trainee_size`: 0 (number) - 直接激活体验店主数
+ `children_inactivated_grade_trainee_size`: 0 (number) - 直接未激活体验店主数
+ `children_grade_gold_size`: 0 (number) - 直接黄金店主数
+ `children_grade_platinum_size`: 8 (number) - 直接白金店主数
+ `children_size`: 8 (number) - 直接店主数
+ `descendant_grade_trainee_size`: 12 (number) - 间接体验店主数
+ `descendant_activation_grade_trainee_size`: 2 (number) - 间接激活体验店主数
+ `descendant_inactivated_grade_trainee_size`: 10 (number) - 间接未激活体验店主数
+ `descendant_grade_gold_size`: 6 (number) - 间接黄金店主数
+ `descendant_grade_platinum_size`: 22 (number) - 间接白金店主数
+ `descendant_size`: 40 (number) - 间接店主数
### ShowShopStat (object)
+ `report_month`: `2018-03` (string) - 月份
+ `month_shopkeeper_order_number`: 2 (number) - 月店主订单数
+ `month_shopkeeper_order_amount`: 64.8 (string) - 月销售订单金额
+ `month_sale_order_number`: 0 (number) - 月销售订单数
+ `month_sale_order_amount`: 0 (string) - 月销售订单金额
+ `month_commission_income_amount`: 0 (string) - 月佣金收入
+ `month_balance_amount`: 0 (string) - 账户余额
+ `month_income_coin`: 0 (string) - 芝蚂币收入
+ `month_use_coin`: 0 (string) - 芝蚂币使用
+ `month_balance_coin`: 0 (string) - 芝蚂币余额
