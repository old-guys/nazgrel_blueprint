# Group 工作台

## 工作台 [GET /api/channel/dashboard{?device,user_token}]
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
            + commission_amount: 11.33 (number) - 总佣金
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


## 商品销售排行 [GET /api/channel/dashboard/hot_sales_product{?device,user_token}]
商品销售排行：今日排行榜

+ Parameters
    + device: h5 (string, required) - 设备类型
    + user_token: waNXHf3GnG2vKik4FDTQISzbvB5cDNezPYHytlunMY4= (string, required) - 用户 Token

+ Response 200 (application/json;charset=UTF-8)
    + Attributes (object)
        + code: 0 (number) - 错误码
        + data (object)
            + today (array[HotSalesProduct])
    + Body

            {
              "code": 0,
              "data": {
                "today": [
                  {
                    "index": 1,
                    "product_name": "德国美发沙龙施华蔻水漾密集修护调理霜",
                    "product_id": 41,
                    "product_num": 31
                  },
                  {
                    "index": 2,
                    "product_name": "蒙牛 低脂高钙牛奶",
                    "product_id": 234,
                    "product_num": 12
                  },
                  {
                    "index": 3,
                    "product_name": "香奈儿",
                    "product_id": 225,
                    "product_num": 9
                  },
                  {
                    "index": 4,
                    "product_name": "虚拟库存12018",
                    "product_id": 240,
                    "product_num": 8
                  },
                  {
                    "index": 5,
                    "product_name": "韩国所望进口正品植物洗发水女士 去屑控油止痒持久留香洗发露男",
                    "product_id": 224,
                    "product_num": 4
                  }
                ]
              }
            }

## Data Structures
### HotSalesProduct (object)
+ index: 1 (number) - 序号
+ product_name: 香奈儿 (string) - 产品名称
+ product_id: 234 (number) - 产品ID
+ product_num: 9 (number) - 销售数量
